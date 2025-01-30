import UserForm from '@/components/screens/admin/users/(form)/user-form/UserForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Edit user',
	description: 'User data editing page'
};

const ProfileEditPage = async ({ params }) => {
	return <UserForm type="user-edit-profile" params={params} />;
};

export default ProfileEditPage;
