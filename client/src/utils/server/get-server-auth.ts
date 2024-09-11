'use server'
import authService, { EnumTokens } from '@/services/auth/auth.service'
import { ITokenInside } from '@/services/auth/auth.types'
import {
	transformUserToState,
	TUserDataState
} from '@/utils/transform-user-to-state'
import { jwtVerify } from 'jose'
import { cookies } from 'next/headers'

export const getServerAuth = async (): Promise<TUserDataState | null> => {
	const JWT_SECRET = process.env.JWT_SECRET
	let accessToken = cookies().get(EnumTokens.ACCESS_TOKEN)?.value
	const refreshToken = cookies().get(EnumTokens.REFRESH_TOKEN)?.value

	if (!refreshToken) return null

	if (!accessToken) {
		try {
			const data = await authService.getNewTokensByRefresh(refreshToken)
			accessToken = data.accessToken
		} catch (error) {
			return null
		}
	}

	try {
		const { payload }: { payload: ITokenInside } = await jwtVerify(
			accessToken,
			new TextEncoder().encode(`${JWT_SECRET}`)
		)

		if (!payload) return null

		return transformUserToState(payload)
	} catch (error) {
		return null
	}
}
