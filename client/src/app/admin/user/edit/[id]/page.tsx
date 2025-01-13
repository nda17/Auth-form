import UserEdit from '@/components/screens/admin/user/edit/UserEdit';
import { IParamsUrl } from '@/shared/types/params-url.types';
import { NextPage } from 'next';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Edit user',
	description: 'User data editing page'
};

const UserEditPage: NextPage<IParamsUrl> = ({ params }) => {
	return <UserEdit params={params} />;
};

export default UserEditPage;
