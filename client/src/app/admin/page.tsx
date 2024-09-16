import Admin from '@/components/screens/admin/Admin'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Admin',
	description: 'Admin page'
}

const AdminPage = () => {
	return <Admin />
}

export default AdminPage