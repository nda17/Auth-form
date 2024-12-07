import { IUser } from '@/shared/types/user.types'

export interface IUserInfo extends Pick<IUser, 'avatarPath' | 'name'> {
	isLoading: boolean
}
