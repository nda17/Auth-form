import Users from '@/components/screens/admin/users/Users';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'User list',
	description: 'Admin panel page'
};

const UsersPage = async () => {
	return <Users />;
};

export default UsersPage;
