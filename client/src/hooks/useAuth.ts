import { getAccessToken } from '@/services/auth/auth.helper'
import userService from '@/services/user/user.service'
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

	const statusAuth = profile
		? transformUserToState(profile).isLoggedIn
		: null

	return { statusAuth }
}

export default useAuth
