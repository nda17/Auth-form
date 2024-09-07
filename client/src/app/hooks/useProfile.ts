import { saveTokenStorage } from '@/services/auth/auth.helper'
import authService from '@/services/auth/auth.service'
import userService from '@/services/user.service'
import { transformUserToState } from '@/utils/transform-user-to-state'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export function useProfile() {
	const { data, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.fetchProfile(),
		refetchInterval: 1800000 // 30 minutes in milliseconds
	})

	const { isSuccess, data: dataTokens } = useQuery({
		queryKey: ['new tokens'],
		queryFn: () => authService.getNewTokens(),
		enabled: !data?.data
	})

	useEffect(() => {
		if (!isSuccess) return

		if (dataTokens.data.accessToken)
			saveTokenStorage(dataTokens.data.accessToken)
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
