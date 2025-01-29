import UserForm from '@/components/screens/admin/users/(form)/user-form/UserForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Create a new user',
	description: 'Create a new user page'
};

const UserCreatePage = async () => {
	return <UserForm type="admin-create" />;
};

export default UserCreatePage;
