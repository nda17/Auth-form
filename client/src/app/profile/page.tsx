import Profile from '@/components/screens/profile/Profile';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Profile',
	description: 'Profile page'
};

const ProfilePage = async () => {
	return <Profile />;
};

export default ProfilePage;
