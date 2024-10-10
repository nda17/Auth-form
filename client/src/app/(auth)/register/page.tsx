import SignUp from '@/components/screens/(auth)/register/SignUp'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Sign up',
	description: 'Sign up page'
}

const RegisterPage = async () => {
	return <SignUp />
}

export default RegisterPage
