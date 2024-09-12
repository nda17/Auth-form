import { UserRole } from '@/services/auth/auth.types'

export interface IHome {
	isLoggedIn: boolean
	rights: UserRole[]
}
