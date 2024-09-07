import SignUp from '@/components/screens/(auth)/register/SignUp'
import type { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Sign up'
}

const RegisterPage: NextPage = () => {
	return <SignUp />
}

export default RegisterPage
