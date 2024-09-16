import Home from '@/components/screens/home/Home'
import { getServerAuth } from '@/utils/server/get-server-auth'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Home',
	description: 'Home page'
}

const HomePage = async () => {
	const user = await getServerAuth()

	return (
		<Home
			isLoggedIn={user?.isLoggedIn ? true : false}
			rights={user?.rights}
		/>
	)
}

export default HomePage
