'use client';
import CheckboxRights from '@/components/screens/admin/users/(form)/fields/checkbox-rights/CheckboxRights';
import FieldEmail from '@/components/screens/admin/users/(form)/fields/field-email/FieldEmail';
import FieldId from '@/components/screens/admin/users/(form)/fields/field-id/FieldId';
import FieldName from '@/components/screens/admin/users/(form)/fields/field-name/FieldName';
import FieldPassword from '@/components/screens/admin/users/(form)/fields/field-password/FieldPassword';
import FieldUploadFile from '@/components/screens/admin/users/(form)/fields/field-upload-file/FieldUploadFile';
import {
	IUserEditingForm,
	IUserEditInput
} from '@/components/screens/admin/users/(form)/user-editing-form/user-editing-form.interface';
import styles from '@/components/screens/admin/users/(form)/user-editing-form/UserEditingForm.module.scss';
import UserFormHeading from '@/components/screens/admin/users/(form)/user-form-heading/UserFormHeading';
import AdminNavigation from '@/components/ui/admin/admin-navigation/AdminNavigation';
import SubmitButton from '@/components/ui/form-elements/submit-button/SubmitButton';
import Heading from '@/components/ui/heading/Heading';
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader';
import UserInfo from '@/components/ui/user-info/UserInfo';
import { UserRole } from '@/services/auth/auth.types';
import {
	validEmail,
	validId,
	validName,
	validPassword
} from '@/shared/regex';
import { cuidGenerate } from '@/utils/cuid.generate';
import clsx from 'clsx';
import { NextPage } from 'next';
import { Controller, useForm } from 'react-hook-form';

const UserEditingForm: NextPage<IUserEditingForm> = ({
	queriesResult: { onSubmit, data, isLoading },
	isCreateForm,
	isAdminEdit,
	isUserEdit,
	type
}) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		control
	} = useForm<IUserEditInput>({ mode: 'onChange' });

	return (
		<div className={styles.wrapper}>
			{!isUserEdit ? (
				<Heading text="Admin page" />
			) : (
				<Heading text="Profile" />
			)}
			{!isUserEdit && <AdminNavigation />}
			{isLoading ? (
				<div className="w-[10rem] h-5 mb-[1.1rem]">
					<SkeletonLoader count={1} className="w-full h-full" />
				</div>
			) : (
				<UserFormHeading type={type} email={data?.email} />
			)}
			<UserInfo
				avatarPath={data?.avatarPath || null}
				name={data?.name || null}
				isLoading={isLoading}
			/>
			{isLoading ? (
				<SkeletonLoader count={6} className="h-6 mb-4" />
			) : (
				<>
					<form onSubmit={handleSubmit(onSubmit)}>
						{isCreateForm || isAdminEdit || isUserEdit ? (
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
										id={data?.id}
										isAdminEdit={isAdminEdit}
										folder="user-avatar"
										placeholder="Avatar"
									/>
								)}
							/>
						) : null}
						{isCreateForm || isAdminEdit ? (
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
												defaultChecked={
													data?.rights.includes(UserRole.USER) || true
												}
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
												defaultChecked={
													data?.rights.includes(UserRole.ADMIN) || null
												}
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
												defaultChecked={
													data?.rights.includes(UserRole.MANAGER) || null
												}
												{...register('isManager', {
													value: field.value
												})}
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
												defaultChecked={
													data?.rights.includes(UserRole.PREMIUM) || null
												}
												{...register('isPremium', {
													value: field.value
												})}
											/>
										)}
									/>
								</div>
							</div>
						) : null}
						{isCreateForm || isAdminEdit ? (
							<div className="relative">
								<FieldId
									type="text"
									error={errors.id}
									defaultValue={!isCreateForm ? data?.id : null}
									placeholder="ID"
									{...register('id', {
										pattern: {
											value: validId,
											message:
												'Min and max length 25 characters. First 2 characters of letters. Next are letters and numbers'
										}
									})}
								/>
								{isCreateForm && (
									<button
										type="button"
										aria-label="Generate id"
										className="uppercase absolute top-0 right-3 cursor-pointer rounded-lg py-0.5 px-2 transition-colors border-gray-500 bg-gray-500 hover:bg-gray-300 text-xs text-gray-800"
										onClick={() => setValue('id', cuidGenerate())}
									>
										Generate
									</button>
								)}
							</div>
						) : null}
						{isCreateForm || isAdminEdit || isUserEdit ? (
							<FieldName
								type="text"
								error={errors.name}
								defaultValue={data?.name || null}
								placeholder="Name"
								{...register('name', {
									pattern: {
										value: validName,
										message:
											'Min length must be greater than 2 characters. Numbers from the second character and the special character "-" can be used'
									}
								})}
							/>
						) : null}
						{isCreateForm || isAdminEdit ? (
							<FieldEmail
								type="email"
								error={errors.email}
								defaultValue={data?.email || null}
								placeholder="Email"
								{...register('email', {
									required: 'Email is required!',
									pattern: {
										value: validEmail,
										message: 'Please enter a valid email'
									}
								})}
							/>
						) : null}
						{isAdminEdit || isUserEdit ? (
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
						) : null}
						{isCreateForm && (
							<FieldPassword
								type="password"
								error={errors.password}
								placeholder="Password"
								required
								{...register('password', {
									pattern: {
										value: validPassword,
										message:
											'Min length should more 6 symbols. Contains 1 number 0-9, 1 Latin letter a-z, 1 Latin letter A-Z'
									}
								})}
							/>
						)}
						<SubmitButton>{isCreateForm ? 'Create' : 'Save'}</SubmitButton>
					</form>
				</>
			)}
		</div>
	);
};

export default UserEditingForm;
