import { UserRole } from '@/services/auth/auth.types'
import { getServerAuth } from '@/utils/server/get-server-auth'
import { NextRequest, NextResponse } from 'next/server'

export const adminMiddleware = async (request: NextRequest) => {
	const user = await getServerAuth()

	if (
		user?.isLoggedIn &&
		user?.isAdmin &&
		user?.rights?.includes(UserRole.ADMIN)
	) {
		NextResponse.redirect(new URL('/admin', request.url))
	} else if (
		user?.isLoggedIn &&
		!user?.isAdmin &&
		!user?.rights?.includes(UserRole.ADMIN)
	) {
		return NextResponse.error()
	} else {
		return NextResponse.redirect(new URL('/logout', request.url))
	}

	return NextResponse.next()
}
