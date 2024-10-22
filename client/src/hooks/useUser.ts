import {
	getRefreshToken,
	saveTokenStorage
} from '@/services/auth/auth.helper'
import authService from '@/services/auth/auth.service'
import userService from '@/services/user/user.service'
import { transformUserToState } from '@/utils/transform-user-to-state'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

const useUser = (navState?: boolean) => {
	const refreshToken = getRefreshToken()

	const { data, isLoading } = useQuery({
		queryKey: ['get-profile', navState],
		queryFn: () => userService.fetchProfile(),
		refetchInterval: 1800000 // 30 minutes in milliseconds

		// enabled: refreshToken !== null

		// enabled: isEnabled
	})

	const { isSuccess, data: dataTokens } = useQuery({
		queryKey: ['get-new-tokens'],
		queryFn: () => authService.getNewTokens(),
		// enabled: !data?.data
		enabled: !!refreshToken
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
