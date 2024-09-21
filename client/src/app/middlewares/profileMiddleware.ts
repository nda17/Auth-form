import { getServerAuth } from '@/utils/server/get-server-auth'
import { NextRequest, NextResponse } from 'next/server'

export const profileMiddleware = async (request: NextRequest) => {
	const user = await getServerAuth()

	if (!user && !user?.isLoggedIn) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	return NextResponse.next()
}
