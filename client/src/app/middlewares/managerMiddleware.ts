import { UserRole } from '@/services/auth/auth.types'
import { getServerAuth } from '@/utils/server/get-server-auth'
import { NextRequest, NextResponse } from 'next/server'

export const managerMiddleware = async (request: NextRequest) => {
	const user = await getServerAuth()

	if (
		user?.isLoggedIn &&
		user?.isManager &&
		user?.rights?.includes(UserRole.MANAGER)
	) {
		NextResponse.redirect(new URL('/manager', request.url))
	} else {
		return NextResponse.error()
	}

	return NextResponse.next()
}
