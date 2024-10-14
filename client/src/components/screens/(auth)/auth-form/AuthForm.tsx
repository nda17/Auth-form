'use client'
import styles from '@/components/screens/(auth)/auth-form/AuthForm.module.scss'
import { IAuthFormProps } from '@/components/screens/(auth)/auth-form/auth-form.interface'
import AuthToggle from '@/components/screens/(auth)/auth-form/auth-toggle/AuthToggle'
import SocialMediaButtons from '@/components/screens/(auth)/auth-form/social-media-buttons/SocialMediaButtons'
import useAuthForm from '@/components/screens/(auth)/auth-form/useAuthForm'
import FieldEmail from '@/components/ui/form-elements/field-email/FieldEmail'
import FieldPassword from '@/components/ui/form-elements/field-password/FieldPassword'
import { validEmail, validPassword } from '@/shared/regex'
import clsx from 'clsx'
import { NextPage } from 'next'
import ReCAPTCHA from 'react-google-recaptcha'

const AuthForm: NextPage<IAuthFormProps> = ({ isLogin }) => {
	const {
		handleSubmit,
		isLoading,
		onSubmit,
		recaptchaRef,
		register,
		formState: { errors }
	} = useAuthForm(isLogin)

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<FieldEmail
				{...register('email', {
					required: 'Email is required!',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email'
					}
				})}
				placeholder="Enter email:"
				type="email"
				error={errors.email}
			/>

			<FieldPassword
				{...register('password', {
					pattern: {
						value: validPassword,
						message:
							'Min length should more 6 symbols. Contains 1 number 0-9, 1 Latin letter a-z, 1 Latin letter A-Z'
					}
				})}
				placeholder="Enter password:"
				type="password"
				error={errors.password}
			/>

			<ReCAPTCHA
				hl="en"
				ref={recaptchaRef}
				size="normal"
				sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
				theme="dark"
				className={styles.recaptcha}
			/>

			<div className={clsx(styles['wrapper-button'])}>
				<button
					type="submit"
					className={clsx(
						styles['button-primary'],
						isLogin ? 'bg-green-500' : 'bg-yellow-700',
						isLoading ? 'opacity-75 cursor-not-allowed' : ''
					)}
					disabled={isLoading}
				>
					{isLoading ? 'Loading...' : isLogin ? 'Sign in' : 'Sign up'}
				</button>
			</div>

			<SocialMediaButtons />

			<AuthToggle isLogin={isLogin} />
		</form>
	)
}

export default AuthForm
