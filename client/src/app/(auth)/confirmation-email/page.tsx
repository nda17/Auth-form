import Error404 from '@/app/not-found';
import ConfirmationEmail from '@/components/screens/(auth)/confirmation-email/ConfirmationEmail';
import authService from '@/services/auth/auth.service';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Confirmation Email',
	description: 'Confirmation email page'
};

const ConfirmationEmailPage = async ({
	searchParams
}: {
	searchParams: { token: string };
}) => {
	const verificationToken = searchParams.token;

	try {
		await authService.getConfirmationEmail(verificationToken);
		return <ConfirmationEmail />;
	} catch (error) {
		return <Error404 />;
	}
};

export default ConfirmationEmailPage;
