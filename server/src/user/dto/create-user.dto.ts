import { IsEmail } from 'class-validator';

export class CreateUserDto {
	@IsEmail()
	email: string;

	id: string;

	password: string;

	name?: string;

	avatarPath?: string;

	isUser?: boolean;

	isAdmin?: boolean;

	isManager?: boolean;

	isPremium?: boolean;
}
