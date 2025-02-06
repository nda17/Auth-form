import AuthForm from '@/components/screens/(auth)/auth-form/AuthForm';
import styles from '@/components/screens/(auth)/register/SignUp.module.scss';
import { FC } from 'react';

const SignUp: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.form}>
				<h2 className={styles.title}>Sign up</h2>
				<AuthForm isLogin={false} />
			</div>
		</div>
	);
};

export default SignUp;
