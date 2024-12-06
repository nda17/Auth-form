import { IUser } from '@/shared/types/user.types'

export interface IUserEditInput
	extends Omit<IUser, 'id' | 'verificationToken' | 'createdAt'> {}
