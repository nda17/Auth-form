import { IUser } from '@/shared/types/user.types';
import { SubmitHandler } from 'react-hook-form';

export type TypeUserForm =
	| 'admin-create'
	| 'admin-edit'
	| 'user-edit-profile';

export interface IUserForm {
	type: TypeUserForm;
	params?: { id: string };
}

export interface IQueriesResult {
	data?: Omit<IUser, 'verificationToken' | 'createdAt'>;
	isLoading?: boolean;
	onSubmit: SubmitHandler<IUser>;
}
