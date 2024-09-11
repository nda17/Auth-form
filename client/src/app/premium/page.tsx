import { PremiumContent } from '@/app/premium/PremiumContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Premium content',
	description: 'Premium content page'
}

const PremiumPage = () => {
	return <PremiumContent />
}

export default PremiumPage
