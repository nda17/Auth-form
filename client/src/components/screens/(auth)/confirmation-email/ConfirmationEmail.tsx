'use client';
import styles from '@/components/screens/(auth)/confirmation-email/ConfirmationEmail.module.scss';
import Heading from '@/components/ui/heading/Heading';
import SubHeading from '@/components/ui/sub-heading/SubHeading';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

const ConfirmationEmail: NextPage = () => {
	const { replace } = useRouter();

	setTimeout(() => {
		replace(PUBLIC_PAGES.HOME);
	}, 5000);

	return (
		<div className={styles.wrapper}>
			<Heading text="Email confirmed!" />
			<SubHeading text="Redirect to Home page after 5 seconds..." />
		</div>
	);
};

export default ConfirmationEmail;
