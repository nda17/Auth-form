import AuthForm from '@/components/screens/(auth)/auth-form/AuthForm';
import styles from '@/components/screens/(auth)/login/SignIn.module.scss';
import { NextPage } from 'next';

const SignIn: NextPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.form}>
				<h2 className={styles.title}>Sign in</h2>
				<AuthForm isLogin />
			</div>
		</div>
	);
};

export default SignIn;
