import authService from '@/services/auth/auth.service'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Confirmation Email',
	description: 'Confirmation email page'
}

const ConfirmationEmailPage = async ({
	searchParams
}: {
	searchParams: { token: string }
}) => {
	const confirmationToken = searchParams.token

	try {
		await authService.getConfirmationEmail(confirmationToken)
		return <p>Email confirmed.</p>
	} catch (error) {
		return (
			<p>
				An error occurred while confirming your email, please try again
				later.
			</p>
		)
	}
}

export default ConfirmationEmailPage
