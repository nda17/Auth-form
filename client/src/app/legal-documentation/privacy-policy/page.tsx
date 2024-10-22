import PrivacyPolicy from '@/components/screens/legal-documentation/privacy-policy/PrivacyPolicy'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Privacy Policy',
	description: 'Privacy Policy page'
}

const PrivacyPolicyPage = () => {
	return <PrivacyPolicy />
}

export default PrivacyPolicyPage
