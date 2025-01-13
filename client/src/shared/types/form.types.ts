import { IUser } from '@/shared/types/user.types';

export interface IFormData extends Pick<IUser, 'email'> {
	password: string;
}

export interface IEmail extends Pick<IUser, 'email'> {}
