import RestorePassword from '@/components/screens/(auth)/restore-password/RestorePassword'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Restore password',
	description: 'Restore password page'
}

const RestorePasswordPage = async () => {
	return <RestorePassword />
}

export default RestorePasswordPage
