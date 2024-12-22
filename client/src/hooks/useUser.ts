import {
	getAccessToken,
	getRefreshToken,
	saveTokenStorage
} from '@/services/auth/auth.helper'
import authService from '@/services/auth/auth.service'
import userService from '@/services/user/user.service'
import { useAuthStore } from '@/store/auth-store/auth-store'
import { transformUserToState } from '@/utils/transform-user-to-state'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

const useUser = () => {
	const auth = useAuthStore((state) => state.auth)

	const { data, isLoading } = useQuery({
		queryKey: ['get-profile', auth],
		queryFn: () => userService.fetchProfile(),
		refetchInterval: 1800000, // 30 minutes in milliseconds

		enabled: () => getAccessToken() !== null
	})

	const { isSuccess, data: dataTokens } = useQuery({
		queryKey: ['get-new-tokens'],
		queryFn: () => authService.getNewTokens(),
		enabled: () => getRefreshToken() !== null
	})

	useEffect(() => {
		if (!isSuccess) {
			return
		}

		if (dataTokens.data.accessToken) {
			saveTokenStorage(dataTokens.data.accessToken)
		}
	}, [isSuccess])

	const profile = data?.data

	const userState = profile ? transformUserToState(profile) : null

	return {
		isLoading,
		user: {
			...profile,
			...userState
		}
	}
}

export default useUser
