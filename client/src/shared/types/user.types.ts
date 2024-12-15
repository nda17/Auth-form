import { UserRole } from '@/services/auth/auth.types'

export interface IUser {
	id: number
	name?: string
	email: string
	password?: string
	avatarPath?: string
	verificationToken?: string
	rights: UserRole[]
	createdAt: string
}
