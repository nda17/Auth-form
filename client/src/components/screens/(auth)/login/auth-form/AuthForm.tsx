'use client'
import { useAuthForm } from '@/components/screens/(auth)/login/auth-form//useAuthForm'
import styles from '@/components/screens/(auth)/login/auth-form/AuthForm.module.scss'
import { IAuthFormProps } from '@/components/screens/(auth)/login/auth-form/auth-form.interface'
import AuthToggle from '@/components/screens/(auth)/login/auth-form/auth-toggle/AuthToggle'
import SocialMediaButtons from '@/components/screens/(auth)/login/auth-form/social-media-buttons/SocialMediaButtons'
import clsx from 'clsx'
import { FC } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const AuthForm: FC<IAuthFormProps> = ({ isLogin }) => {
	const { handleSubmit, isLoading, onSubmit, recaptchaRef, register } =
		useAuthForm(isLogin)

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<div className={clsx(styles['wrapper-input'])}>
				<label className={clsx(styles['label-input'])}>
					Email
					<input
						type="email"
						placeholder="Enter email: "
						{...register('email', { required: true })}
						className={clsx(styles['input-field'])}
					/>
				</label>
			</div>

			<div className={clsx(styles['wrapper-input'])}>
				<label className={clsx(styles['label-input'])}>
					Password
					<input
						type="password"
						placeholder="Enter password: "
						{...register('password', { required: true })}
						className={clsx(styles['input-field'])}
					/>
				</label>
			</div>

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