import Home from '@/components/screens/home/Home'
import { protectPage } from '@/utils/server/protect-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Home'
}

const HomePage = async () => {
	await protectPage()

	return <Home />
}

export default HomePage
