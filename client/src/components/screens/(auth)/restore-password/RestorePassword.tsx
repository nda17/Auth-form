import styles from '@/components/screens/(auth)/login/SignIn.module.scss'
import RestorePasswordForm from '@/components/screens/(auth)/restore-password-form/RestorePasswordForm'
import { NextPage } from 'next'

const RestorePassword: NextPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.form}>
				<h2 className={styles.title}>Restore password</h2>
				<RestorePasswordForm />
			</div>
		</div>
	)
}

export default RestorePassword
