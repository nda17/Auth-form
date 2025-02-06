import styles from '@/components/screens/premium-content/PremiumContent.module.scss';
import Heading from '@/components/ui/heading/Heading';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import Link from 'next/link';
import { FC } from 'react';

const PremiumContent: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Heading text="Page for users with a purchased Premium subscription" />

			<div className={styles.text}>
				<Link
					href={`${PUBLIC_PAGES.PREMIUM_CONTENT}/content?id=1`}
					className={styles.link}
				>
					Premium content # 1
				</Link>
				<Link
					href={`${PUBLIC_PAGES.PREMIUM_CONTENT}/content?id=2`}
					className={styles.link}
				>
					Premium content # 2
				</Link>
				<Link
					href={`${PUBLIC_PAGES.PREMIUM_CONTENT}/content?id=3`}
					className={styles.link}
				>
					Premium content # 3
				</Link>
				<Link
					href={`${PUBLIC_PAGES.PREMIUM_CONTENT}/content?id=4`}
					className={styles.link}
				>
					Premium content # 4
				</Link>
				<Link
					href={`${PUBLIC_PAGES.PREMIUM_CONTENT}/content?id=5`}
					className={styles.link}
				>
					Premium content # 5
				</Link>
			</div>
		</div>
	);
};

export default PremiumContent;
