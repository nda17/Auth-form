import { IAuthToggle } from '@/components/screens/(auth)/auth-form/auth-toggle/auth-toggle.interface';
import styles from '@/components/screens/(auth)/auth-form/auth-toggle/AuthToggle.module.scss';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import clsx from 'clsx';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

const AuthToggle: NextPage<IAuthToggle> = ({ isLogin }) => {
	const router = useRouter();

	return (
		<div className={styles.wrapper}>
			{isLogin ? (
				<p className={clsx(styles['toggle-link-block'])}>
					No account?{' '}
					<button
						aria-label="Registration form"
						type="button"
						className={clsx(styles['sign-up-button'])}
						onClick={() => router.push(PUBLIC_PAGES.REGISTER)}
					>
						Sign up
					</button>
				</p>
			) : (
				<p className={clsx(styles['toggle-link-block'])}>
					Have an account?{' '}
					<button
						aria-label="Login form"
						type="button"
						className={clsx(styles['sign-in-button'])}
						onClick={() => router.push(PUBLIC_PAGES.LOGIN)}
					>
						Sign in
					</button>
				</p>
			)}
			<p className={clsx(styles['toggle-link-block'])}>
				<button
					aria-label="Password recovery form"
					type="button"
					className={clsx(styles['restore-password-button'])}
					onClick={() => router.push(PUBLIC_PAGES.RESTORE_PASSWORD)}
				>
					Forgot password?
				</button>
			</p>
		</div>
	);
};

export default AuthToggle;
