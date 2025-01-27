import UserEdit from '@/components/screens/admin/users/(form)/edit/UserEdit';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Edit user',
	description: 'User data editing page'
};

const UserEditPage = async ({ params }) => {
	return <UserEdit params={params} />;
};

export default UserEditPage;
