import FreeContent from '@/components/screens/free-content/FreeContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Free content',
	description: 'Free content page for all users'
}

const FreeContentPage = () => {
	return <FreeContent />
}

export default FreeContentPage
