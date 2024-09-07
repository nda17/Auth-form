import Content from '@/components/screens/content/Content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Content',
	description: 'Content page for all users'
}

const ContentPage = () => {
	return <Content />
}

export default ContentPage
