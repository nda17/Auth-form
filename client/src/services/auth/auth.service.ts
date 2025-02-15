import { axiosClassicRequest } from '@/api/interceptors'
import {
	removeFromStorage,
	saveTokenStorage
} from '@/services/auth/auth.helper'
import { IFormData } from '@/shared/types/form.types'
import { IUser } from '@/shared/types/user.types'

interface IAuthResponse {
	accessToken: string
	user: IUser
}

interface IConfirmationToken {
	verificationToken: string
}

interface IEmail {
	email: string
}

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken'
}

class AuthService {
	async main(
		type: 'login' | 'register',
		data: IFormData,
		token?: string | null
	) {
		const response = await axiosClassicRequest.post<IAuthResponse>(
			`/auth/${type}`,
			data,
			{
				headers: {
					recaptcha: token
				}
			}
		)

		if (response.data.accessToken) {
			saveTokenStorage(response.data.accessToken)
		}

		return response
	}

	async getNewTokens() {
		const response = await axiosClassicRequest.post<IAuthResponse>(
			'/auth/access-token'
		)

		if (response.data.accessToken) {
			saveTokenStorage(response.data.accessToken)
		}

		return response
	}

	async getNewTokensByRefresh(refreshToken: string) {
		const response = await axiosClassicRequest.post<IAuthResponse>(
			'/auth/access-token',
			{},
			{
				headers: {
					Cookie: `refreshToken=${refreshToken}`
				}
			}
		)

		return response.data
	}

	async getConfirmationEmail(verificationToken: string) {
		const response = await axiosClassicRequest.patch<IConfirmationToken>(
			'/auth/confirmation-email',
			{ verificationToken: verificationToken }
		)

		return response
	}

	async getRestorePassword(data: IEmail, token?: string | null) {
		const response = await axiosClassicRequest.patch<IEmail>(
			'/auth/restore-password',
			{ email: data.email },
			{
				headers: {
					recaptcha: token
				}
			}
		)

		return response
	}

	async logout() {
		const response = await axiosClassicRequest.post<boolean>(
			'/auth/logout'
		)

		if (response.data) {
			removeFromStorage()
		}

		return response
	}
}

export default new AuthService()
