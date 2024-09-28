import { getAccessToken } from '@/services/auth/auth.helper'
import userService from '@/services/user.service'
import { transformUserToState } from '@/utils/transform-user-to-state'
import { useQuery } from '@tanstack/react-query'

const useAuth = () => {
	const accessToken = getAccessToken()

	const { data } = useQuery({
		queryKey: ['get-status-is-logged-in'],
		queryFn: () => userService.fetchProfile(),
		enabled: accessToken !== null
	})

	const profile = data?.data

	const userState = profile ? transformUserToState(profile) : null

	return userState.isLoggedIn
}

export default useAuth
