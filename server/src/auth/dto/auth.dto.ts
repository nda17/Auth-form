import { IsEmail, IsString, Matches } from 'class-validator'

export class AuthDto {
	@Matches(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		{
			message: 'Please enter a valid email'
		}
	)
	@IsEmail()
	email: string

	@Matches(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g, {
		message:
			'Min length should more 6 symbols. Contains 1 number 0-9, 1 Latin letter a-z, 1 Latin letter A-Z'
	})
	@IsString()
	password: string
}
