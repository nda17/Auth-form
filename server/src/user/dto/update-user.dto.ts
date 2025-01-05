import { IsEmail } from 'class-validator'

export class UpdateUserDto {
	@IsEmail()
	email?: string

	id?: string

	password?: string

	name?: string

	avatarPath?: string

	isUser?: boolean

	isAdmin?: boolean

	isManager?: boolean

	isPremium?: boolean
}
