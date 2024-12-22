import { IsEmail } from 'class-validator'

enum UserRole {
	USER = 'USER',
	PREMIUM = 'PREMIUM',
	MANAGER = 'MANAGER',
	ADMIN = 'ADMIN'
}

export class UpdateUserDto {
	@IsEmail()
	email: string

	password?: string

	name?: string

	avatarPath?: string

	rights?: UserRole[]
}
