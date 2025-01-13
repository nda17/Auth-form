import { IsObject } from 'class-validator';

export class ConfirmationEmailDto {
	@IsObject()
	verificationToken: string;
}
