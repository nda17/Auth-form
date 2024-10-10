'use client'
import styles from '@/components/screens/(auth)/auth-form/AuthForm.module.scss'
import useRestorePasswordForm from '@/components/screens/(auth)/restore-password-form/useRestorePasswordForm'
import clsx from 'clsx'
import { NextPage } from 'next'
import ReCAPTCHA from 'react-google-recaptcha'

const RestorePasswordForm: NextPage = () => {
	const { handleSubmit, isLoading, onSubmit, recaptchaRef, register } =
		useRestorePasswordForm()

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
						'bg-red-600',
						isLoading ? 'opacity-75 cursor-not-allowed' : ''
					)}
					disabled={isLoading}
				>
					Restore password
				</button>
			</div>
		</form>
	)
}

export default RestorePasswordForm
