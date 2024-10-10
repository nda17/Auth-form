'use client'
import useAuthForm from '@/components/screens/(auth)/auth-form/useAuthForm'
import styles from '@/components/screens/(auth)/auth-form/AuthForm.module.scss'
import { IAuthFormProps } from '@/components/screens/(auth)/auth-form/auth-form.interface'
import AuthToggle from '@/components/screens/(auth)/auth-form/auth-toggle/AuthToggle'
import SocialMediaButtons from '@/components/screens/(auth)/auth-form/social-media-buttons/SocialMediaButtons'
import FontAwesomeIcon from '@/components/ui/icons/FontAwesomeIcon'
import clsx from 'clsx'
import { NextPage } from 'next'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const AuthForm: NextPage<IAuthFormProps> = ({ isLogin }) => {
	const [typeInputPassword, setTypeInputPassword] = useState(true)

	const { handleSubmit, isLoading, onSubmit, recaptchaRef, register } =
		useAuthForm(isLogin)

	const toggleVisiblePassword = () => {
		setTypeInputPassword(!typeInputPassword)
	}

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
						type={typeInputPassword ? 'password' : 'text'}
						placeholder="Enter password: "
						{...register('password', { required: true })}
						className={clsx(styles['input-field-password'])}
					/>
					<span
						className={clsx(styles['toggle-visible-password'])}
						onClick={toggleVisiblePassword}
					>
						{typeInputPassword ? (
							<FontAwesomeIcon name="FaRegEye" fill="white" />
						) : (
							<FontAwesomeIcon name="FaRegEyeSlash" fill="white" />
						)}
					</span>
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
