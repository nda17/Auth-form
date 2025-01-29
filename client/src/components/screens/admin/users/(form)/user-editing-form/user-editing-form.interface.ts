import { IQueriesResult } from '@/components/screens/admin/users/(form)/user-form/user-form.types';
import { IUser } from '@/shared/types/user.types';

export interface IUserEditingForm {
	id: string;
	type?: string;
	queriesResult: IQueriesResult;
	isCreateForm: boolean;
	isAdminEdit: boolean;
	isUserEdit: boolean;
}

export interface IUserEditInput
	extends Omit<IUser, 'verificationToken' | 'createdAt' | 'rights'> {
	isUser?: boolean;
	isAdmin?: boolean;
	isManager?: boolean;
	isPremium?: boolean;
}
