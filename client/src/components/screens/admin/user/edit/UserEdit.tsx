'use client'
import { IUserEditInput } from '@/components/screens/admin/user/edit/user-edit.interface'
import styles from '@/components/screens/admin/user/edit/UserEdit.module.scss'
import { useUserEdit } from '@/components/screens/admin/user/edit/useUserEdit'
import AdminNavigation from '@/components/ui/admin/admin-navigation/AdminNavigation'
import CheckboxRights from '@/components/ui/form-elements/admin-page/checkbox-rights/CheckboxRights'
import FieldEmail from '@/components/ui/form-elements/admin-page/field-email/FieldEmail'
import FieldId from '@/components/ui/form-elements/admin-page/field-id/FieldId'
import FieldName from '@/components/ui/form-elements/admin-page/field-name/FieldName'
import FieldPassword from '@/components/ui/form-elements/admin-page/field-password/FieldPassword'
import Button from '@/components/ui/form-elements/universal-elements/button/Button'
import FieldUploadFile from '@/components/ui/form-elements/universal-elements/field-upload-file/FieldUploadFile'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import UserInfo from '@/components/ui/user-info/UserInfo'
import { UserRole } from '@/services/auth/auth.types'
import {
	validEmail,
	validId,
	validName,
	validPassword
} from '@/shared/regex'
import { IParamsUrl } from '@/shared/types/params-url.types'
import clsx from 'clsx'
import { NextPage } from 'next'
import { Controller, useForm } from 'react-hook-form'

const UserEdit: NextPage<IParamsUrl> = ({ params }) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		control
	} = useForm<IUserEditInput>({ mode: 'onChange' })

	const { isLoading, data, onSubmit } = useUserEdit(setValue, params)

	return (
		<div className={styles.wrapper}>
			<Heading text="Admin page" />
			<AdminNavigation />
			<SubHeading text="Edit user" />
			<UserInfo
				avatarPath={data?.avatarPath}
				name={data?.name}
				isLoading={isLoading}
			/>
			{isLoading ? (
				<SkeletonLoader count={6} className="h-5 mb-4" />
			) : (
				<>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Controller
							control={control}
							name="avatarPath"
							render={({ field: { value, onChange } }) => (
								<FieldUploadFile
									onChange={onChange}
									value={value}
									currentFile={
										data?.avatarPath ||
										'/uploads/user-avatar/avatar-default.png'
									}
									folder="user-avatar"
									placeholder="Avatar"
								/>
							)}
						/>
						<div className={clsx(styles['wrapper-checkbox'])}>
							<div className={styles.checkbox}>
								<p>USER</p>
								<Controller
									control={control}
									name="isUser"
									render={({ field }) => (
										<CheckboxRights
											required
											type="checkbox"
											defaultChecked={data.rights.includes(UserRole.USER)}
											{...register('isUser', { value: field.value })}
										/>
									)}
								/>
							</div>
							<div className={styles.checkbox}>
								<p>ADMIN</p>
								<Controller
									control={control}
									name="isAdmin"
									render={({ field }) => (
										<CheckboxRights
											type="checkbox"
											defaultChecked={data.rights.includes(UserRole.ADMIN)}
											{...register('isAdmin', { value: field.value })}
										/>
									)}
								/>
							</div>
							<div className={styles.checkbox}>
								<p>MANAGER</p>
								<Controller
									control={control}
									name="isManager"
									render={({ field }) => (
										<CheckboxRights
											type="checkbox"
											defaultChecked={data.rights.includes(
												UserRole.MANAGER
											)}
											{...register('isManager', { value: field.value })}
										/>
									)}
								/>
							</div>
							<div className={styles.checkbox}>
								<p>PREMIUM</p>
								<Controller
									control={control}
									name="isPremium"
									render={({ field }) => (
										<CheckboxRights
											type="checkbox"
											defaultChecked={data.rights.includes(
												UserRole.PREMIUM
											)}
											{...register('isPremium', { value: field.value })}
										/>
									)}
								/>
							</div>
						</div>
						<FieldId
							type="text"
							error={errors.id}
							defaultValue={data.id}
							placeholder="ID"
							{...register('id', {
								pattern: {
									value: validId,
									message:
										'Min and max length 25 characters. First 2 characters of letters. Next are letters and numbers'
								}
							})}
						/>
						<FieldName
							type="text"
							error={errors.name}
							defaultValue={data.name}
							placeholder="Name"
							{...register('name', {
								pattern: {
									value: validName,
									message:
										'Min length must be greater than 2 characters. Numbers from the second character and the special character "-" can be used'
								}
							})}
						/>
						<FieldEmail
							type="email"
							error={errors.email}
							defaultValue={data?.email}
							placeholder="Email"
							{...register('email', {
								required: 'Email is required!',
								pattern: {
									value: validEmail,
									message: 'Please enter a valid email'
								}
							})}
						/>
						<FieldPassword
							type="password"
							error={errors.password}
							placeholder="Password"
							{...register('password', {
								pattern: {
									value: validPassword,
									message:
										'Min length should more 6 symbols. Contains 1 number 0-9, 1 Latin letter a-z, 1 Latin letter A-Z'
								}
							})}
						/>
						<Button>Save</Button>
					</form>
				</>
			)}
		</div>
	)
}

export default UserEdit
