import AuthForm from '@/components/screens/(auth)/login/auth-form/AuthForm'
import styles from '@/components/screens/(auth)/login/SignIn.module.scss'
import { FC } from 'react'

const SignIn: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.form}>
				<h2 className={styles.title}>Sign in</h2>
				<AuthForm isLogin />
			</div>
		</div>
	)
}

export default SignIn
