import Manager from '@/components/screens/manager/Manager';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Manager content',
	description: 'Manager content page'
};

const ManagerPage = async () => {
	return <Manager />;
};

export default ManagerPage;
