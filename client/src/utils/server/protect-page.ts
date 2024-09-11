'use server'
import { PUBLIC_PAGES } from '@/config/pages/public.config'
import { UserRole } from '@/services/auth/auth.types'
import { getServerAuth } from '@/utils/server/get-server-auth'
import type { TUserDataState } from '@/utils/transform-user-to-state'
import { notFound, redirect } from 'next/navigation'

type RoleCheckFunction = (user: TUserDataState) => boolean

const roleChecks: Partial<Record<UserRole, RoleCheckFunction>> = {
	[UserRole.ADMIN]: (user: TUserDataState) => user.isAdmin,
	[UserRole.PREMIUM]: (user: TUserDataState) => user.isPremium,
	[UserRole.MANAGER]: (user: TUserDataState) => user.isManager
}

type TRoles = UserRole[] | UserRole

export const protectPage = async (roles: TRoles = UserRole.USER) => {
	const rolesArray = Array.isArray(roles) ? roles : [roles]

	const user = await getServerAuth()
	if (!user) {
		return rolesArray.includes(UserRole.ADMIN)
			? notFound()
			: redirect(PUBLIC_PAGES.LOGIN)
	}

	for (const role of rolesArray) {
		const checkRole = roleChecks[role]
		if (checkRole && !checkRole(user)) {
			if (role === UserRole.PREMIUM) {
				return redirect(PUBLIC_PAGES.PREMIUM_CONTENT_PRICE)
			} else {
				return notFound()
			}
		}
	}
}
