import { adminMiddleware } from '@/app/middlewares/adminMiddleware'
import { authMiddleware } from '@/app/middlewares/authMiddleware'
import { managerMiddleware } from '@/app/middlewares/managerMiddleware'
import { profileMiddleware } from '@/app/middlewares/profileMiddleware'
import { NextRequest } from 'next/server'

export const middleware = (request: NextRequest) => {
	const { pathname } = request.nextUrl

	switch (true) {
		case /^\/(register|login)$/.test(pathname):
			return authMiddleware(request)

		case /^\/profile/.test(pathname):
			return profileMiddleware(request)

		case /^\/admin(\/.*)?$/.test(pathname):
			return adminMiddleware(request)

		case /^\/manager(\/.*)?$/.test(pathname):
			return managerMiddleware(request)
	}
}

export const config = {
	matcher: '/((?!api|_next|static|public|favicon.ico).*)'
}
