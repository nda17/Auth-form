import { TUserDataState } from '@/utils/transform-user-to-state'

export interface IHome
	extends Pick<TUserDataState, 'isLoggedIn' | 'isAdmin' | 'isManager'> {}
