import { IUser } from '@/shared/types/user.types';

export interface IUserEditInput
	extends Omit<IUser, 'verificationToken' | 'createdAt' | 'rights'> {
	isUser?: boolean;
	isAdmin?: boolean;
	isManager?: boolean;
	isPremium?: boolean;
}
