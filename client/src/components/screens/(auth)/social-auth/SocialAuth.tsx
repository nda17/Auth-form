'use client';
import styles from '@/components/screens/(auth)/social-auth/SocialAuth.module.scss';
import SubHeading from '@/components/ui/sub-heading/SubHeading';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import { saveTokenStorage } from '@/services/auth/auth.helper';
import { NextPage } from 'next';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const SocialAuth: NextPage = () => {
	const searchParams = useSearchParams();
	const router = useRouter();

	useEffect(() => {
		const accessToken = searchParams.get('accessToken');
		if (accessToken) {
			saveTokenStorage(accessToken);
		}

		router.replace(PUBLIC_PAGES.HOME);
	}, []);

	return (
		<div className={styles.wrapper}>
			<SubHeading text="Redirecting..." />
		</div>
	);
};

export default SocialAuth;
