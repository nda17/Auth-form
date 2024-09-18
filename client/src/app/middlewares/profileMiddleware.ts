import { EnumTokens } from '@/services/auth/auth.service'
import { getServerAuth } from '@/utils/server/get-server-auth'
import { NextRequest, NextResponse } from 'next/server'

export const profileMiddleware = async (request: NextRequest) => {
	const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value
	const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value

	if (!refreshToken) {
		const response = NextResponse.redirect(new URL('/login', request.url))
		response.cookies.set(EnumTokens.ACCESS_TOKEN, '', {
			expires: new Date(0),
			path: '/',
			domain: 'localhost'
		})

		return response
	} else if (!accessToken) {
		await getServerAuth()
	}

	return NextResponse.next()
}
