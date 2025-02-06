import { ADMIN_PAGES } from '@/config/pages/admin.config';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import { UserRole } from '@/services/auth/auth.types';
import { getServerAuth } from '@/utils/server/get-server-auth';
import { NextRequest, NextResponse } from 'next/server';

export const adminMiddleware = async (request: NextRequest) => {
	const user = await getServerAuth();

	if (
		user?.isLoggedIn &&
		user?.isAdmin &&
		user?.rights?.includes(UserRole.ADMIN)
	) {
		NextResponse.redirect(new URL(ADMIN_PAGES.HOME, request.url));
	} else if (
		user?.isLoggedIn &&
		!user?.isAdmin &&
		!user?.rights?.includes(UserRole.ADMIN)
	) {
		return NextResponse.error();
	} else {
		return NextResponse.redirect(
			new URL(PUBLIC_PAGES.LOGOUT, request.url)
		);
	}

	return NextResponse.next();
};
