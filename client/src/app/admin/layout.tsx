import { UserRole } from '@/services/auth/auth.types'
import { protectPage } from '@/utils/server/protect-page'
import type { PropsWithChildren } from 'react'

const AdminLayout = async ({ children }: PropsWithChildren) => {
	await protectPage(UserRole.ADMIN)

	return children
}

export default AdminLayout
