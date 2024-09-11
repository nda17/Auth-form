import { API_URL } from '@/constants'
import {
	getAccessToken,
	removeFromStorage
} from '@/services/auth/auth.helper'
import authService from '@/services/auth/auth.service'
import axios, { CreateAxiosDefaults } from 'axios'
import { errorCatch, getContentType } from './api.helper'

const axiosOptions: CreateAxiosDefaults = {
	baseURL: API_URL,
	headers: getContentType(),
	withCredentials: true
}

// Default requests without authorization:
export const axiosClassicRequest = axios.create(axiosOptions)

// Requests using axios interceptors to update accessToken:
export const axiosInterceptorsRequest = axios.create(axiosOptions)

axiosInterceptorsRequest.interceptors.request.use((config) => {
	const accessToken = getAccessToken()

	if (config?.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

axiosInterceptorsRequest.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config

		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await authService.getNewTokens()
				return axiosInterceptorsRequest.request(originalRequest)
			} catch (error) {
				if (
					errorCatch(error) === 'jwt expired' ||
					errorCatch(error) === 'Refresh token not passed'
				)
					removeFromStorage()
			}
		}

		throw error
	}
)
