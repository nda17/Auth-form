import { UserRole } from '@/services/auth/auth.types'
import { protectPage } from '@/utils/server/protect-page'
import type { PropsWithChildren } from 'react'

const PremiumLayout = async ({ children }: PropsWithChildren) => {
	await protectPage(UserRole.PREMIUM)

	return children
}

export default PremiumLayout
