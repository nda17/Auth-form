import { PUBLIC_PAGES } from '@/config/pages/public.config';
import { UserRole } from '@/services/auth/auth.types';
import { getServerAuth } from '@/utils/server/get-server-auth';
import { NextRequest, NextResponse } from 'next/server';

export const managerMiddleware = async (request: NextRequest) => {
	const user = await getServerAuth();

	if (
		user?.isLoggedIn &&
		user?.isManager &&
		user?.rights?.includes(UserRole.MANAGER)
	) {
		NextResponse.redirect(new URL(PUBLIC_PAGES.MANAGER, request.url));
	} else if (
		user?.isLoggedIn &&
		!user?.isManager &&
		!user?.rights?.includes(UserRole.MANAGER)
	) {
		return NextResponse.error();
	} else {
		return NextResponse.redirect(
			new URL(PUBLIC_PAGES.LOGOUT, request.url)
		);
	}

	return NextResponse.next();
};
