import SignIn from '@/components/screens/(auth)/login/SignIn'
import type { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Sign in',
	description: 'Sign ine page'
}

const LoginPage: NextPage = () => {
	return <SignIn />
}

export default LoginPage
