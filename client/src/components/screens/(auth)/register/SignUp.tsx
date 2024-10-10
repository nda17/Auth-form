import AuthForm from '@/components/screens/(auth)/auth-form/AuthForm'
import styles from '@/components/screens/(auth)/register/SignUp.module.scss'
import { NextPage } from 'next'

const SignUp: NextPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.form}>
				<h2 className={styles.title}>Sign up</h2>
				<AuthForm isLogin={false} />
			</div>
		</div>
	)
}

export default SignUp
