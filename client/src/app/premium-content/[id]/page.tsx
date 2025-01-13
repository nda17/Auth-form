import PremiumContentItem from '@/components/screens/premium-content/premium-content-item/PremiumContentItem';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Premium content',
	description: 'Premium content page'
};

const PremiumContentItemPage = () => {
	return <PremiumContentItem />;
};

export default PremiumContentItemPage;
