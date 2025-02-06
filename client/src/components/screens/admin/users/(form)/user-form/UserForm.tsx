'use client';
import UserEditingForm from '@/components/screens/admin/users/(form)/user-editing-form/UserEditingForm';
import { useCreateUpdateUser } from '@/components/screens/admin/users/(form)/user-form/useCreateUpdateUser';
import { IUserForm } from '@/components/screens/admin/users/(form)/user-form/user-form.types';
import { FC } from 'react';

const UserForm: FC<IUserForm> = ({ type, params }) => {
	const id = params?.id;
	const result = useCreateUpdateUser(
		id,
		type === 'admin-create',
		type === 'admin-edit',
		type === 'user-edit-profile'
	);

	return (
		<UserEditingForm
			queriesResult={result}
			id={id}
			isCreateForm={type === 'admin-create'}
			isAdminEdit={type === 'admin-edit'}
			isUserEdit={type === 'user-edit-profile'}
			type={type}
		/>
	);
};

export default UserForm;
