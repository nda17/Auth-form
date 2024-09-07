import { IAuthToggle } from '@/components/screens/(auth)/login/auth-form/auth-toggle//auth-toggle.interface'
import styles from '@/components/screens/(auth)/login/auth-form/auth-toggle/AuthToggle.module.scss'
import { PUBLIC_PAGES } from '@/config/pages/public.config'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

const AuthToggle: FC<IAuthToggle> = ({ isLogin }) => {
	const router = useRouter()

	return (
		<div className={styles.wrapper}>
			{isLogin ? (
				<p className={clsx(styles['toggle-link-block'])}>
					No account?{' '}
					<button
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
						type="button"
						className={clsx(styles['sign-in-button'])}
						onClick={() => router.push(PUBLIC_PAGES.LOGIN)}
					>
						Sign in
					</button>
				</p>
			)}
		</div>
	)
}

export default AuthToggle