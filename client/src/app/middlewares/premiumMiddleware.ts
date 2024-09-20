import { getServerAuth } from '@/utils/server/get-server-auth'
import { NextRequest, NextResponse } from 'next/server'

export const premiumMiddleware = async (request: NextRequest) => {
	const user = await getServerAuth()

	if (!user.isLoggedIn) {
		return NextResponse.redirect(new URL('/login', request.url))
	} else if (user.isLoggedIn && !user.isPremium) {
		return NextResponse.redirect(
			new URL('/premium-content-price', request.url)
		)
	}

	return NextResponse.next()
}
