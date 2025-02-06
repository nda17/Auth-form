'use client';
import styles from '@/components/screens/premium-content/premium-content-item/PremiumContentItem.module.scss';
import { usePremium } from '@/components/screens/premium-content/usePremium';
import { useUser } from '@/components/screens/profile/useUser';
import CirclesLoader from '@/components/ui/circles-loader/CirclesLoader';
import Heading from '@/components/ui/heading/Heading';
import SubHeading from '@/components/ui/sub-heading/SubHeading';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FC } from 'react';

const PremiumContentItem: FC = () => {
	const searchParams = useSearchParams();
	const id = searchParams.get('id') || undefined;
	const { user, isLoading: isLoadingProfile } = useUser();
	const { data, isLoading: isLoadingPremium } = usePremium();

	return (
		<div className={styles.wrapper}>
			<Heading text={`Premium content item # ${id}`} />
			{isLoadingProfile || isLoadingPremium ? (
				<CirclesLoader />
			) : (
				user?.isLoggedIn &&
				(data ? (
					<SubHeading
						text={`This is PREMIUM CONTENT # ${id}, you have access to this content.`}
					/>
				) : (
					<SubHeading
						text={
							'Sorry. To access PREMIUM CONTENT, please purchase a subscription.'
						}
					/>
				))
			)}

			{!user?.isLoggedIn && (
				<Link href={PUBLIC_PAGES.LOGIN} className={styles.link}>
					Please login
				</Link>
			)}
		</div>
	);
};

export default PremiumContentItem;
