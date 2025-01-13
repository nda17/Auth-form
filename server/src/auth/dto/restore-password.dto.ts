import { IsObject } from 'class-validator';

export class RestorePasswordDto {
	@IsObject()
	email: string;
}
