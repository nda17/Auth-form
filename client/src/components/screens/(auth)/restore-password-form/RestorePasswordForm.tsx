'use client';
import styles from '@/components/screens/(auth)/auth-form/AuthForm.module.scss';
import useRestorePasswordForm from '@/components/screens/(auth)/restore-password-form/useRestorePasswordForm';
import FieldEmail from '@/components/ui/form-elements/auth-page/field-email/FieldEmail';
import { validEmail } from '@/shared/regex';
import clsx from 'clsx';
import { NextPage } from 'next';
import ReCAPTCHA from 'react-google-recaptcha';

const RestorePasswordForm: NextPage = () => {
	const {
		handleSubmit,
		isLoading,
		onSubmit,
		recaptchaRef,
		register,
		formState: { errors }
	} = useRestorePasswordForm();

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
					aria-label="Recover password"
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
	);
};

export default RestorePasswordForm;
