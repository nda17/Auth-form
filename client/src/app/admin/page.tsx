import Admin from '@/components/screens/admin/Admin'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Admin panel',
	description: 'Admin panel page'
}

const AdminPage = async () => {
	return <Admin />
}

export default AdminPage
