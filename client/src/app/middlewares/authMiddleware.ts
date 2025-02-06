import { PUBLIC_PAGES } from '@/config/pages/public.config';
import { getServerAuth } from '@/utils/server/get-server-auth';
import { NextRequest, NextResponse } from 'next/server';

export const authMiddleware = async (request: NextRequest) => {
	const user = await getServerAuth();

	if (user && user?.isLoggedIn) {
		return NextResponse.redirect(new URL(PUBLIC_PAGES.HOME, request.url));
	}

	return NextResponse.next();
};
