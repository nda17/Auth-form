import PremiumContentPrice from '@/components/screens/premium-content-price/PremiumContentPrice'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Premium content price',
	description: 'Cost of premium content'
}

const FreeContentPage = () => {
	return <PremiumContentPrice />
}

export default FreeContentPage
