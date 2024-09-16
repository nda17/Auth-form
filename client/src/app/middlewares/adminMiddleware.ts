import { EnumTokens } from '@/services/auth/auth.service'
import { UserRole } from '@/services/auth/auth.types'
import { getServerAuth } from '@/utils/server/get-server-auth'
import { NextRequest, NextResponse } from 'next/server'

export const adminMiddleware = async (request: NextRequest) => {
	const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	if (!refreshToken) {
		const response = NextResponse.redirect(
			new URL('/not-found', request.url)
		)
		response.cookies.set(EnumTokens.ACCESS_TOKEN, '', {
			expires: new Date(0),
			path: '/',
			domain: 'localhost'
		})

		return response
	}

	if (request.nextUrl.pathname.includes('/admin')) {
		const user = await getServerAuth()

		if (!user) {
			return NextResponse.error()
		} else if (user?.rights?.includes(UserRole.ADMIN)) {
			NextResponse.redirect(new URL('/admin', request.url))
		} else {
			return NextResponse.error()
		}
	}

	return NextResponse.next()
}
