import { getServerAuth } from '@/utils/server/get-server-auth'
import { NextRequest, NextResponse } from 'next/server'

export const authMiddleware = async (request: NextRequest) => {
	const user = await getServerAuth()

	if (user.isLoggedIn) {
		return NextResponse.redirect(new URL('/', request.url))
	}

	return NextResponse.next()
}
