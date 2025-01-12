import SocialAuth from '@/components/screens/(auth)/social-auth/SocialAuth'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Redirecting',
}


const SocialAuthPage = async () => {
	return <SocialAuth />
}

export default SocialAuthPage




