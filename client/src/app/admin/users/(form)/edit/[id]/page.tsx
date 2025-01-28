import UserForm from '@/components/screens/admin/users/(form)/user-form/UserForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Edit user',
	description: 'User data editing page'
};

const UserEditPage = async ({ params }) => {
	return <UserForm type="admin-edit" params={params} />;
};

export default UserEditPage;
