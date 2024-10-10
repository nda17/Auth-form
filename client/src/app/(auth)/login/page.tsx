import SignIn from '@/components/screens/(auth)/login/SignIn'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Sign in',
	description: 'Sign in page'
}

const LoginPage = async () => {
	return <SignIn />
}

export default LoginPage
