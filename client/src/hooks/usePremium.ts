import { getAccessToken } from '@/services/auth/auth.helper'
import UserService from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

const usePremium = () => {
	const accessToken = getAccessToken()

	const { data, isLoading } = useQuery({
		queryKey: ['get-user-premium-rights'],
		queryFn: () => UserService.fetchPremium(),
		retry: false,
		select: ({ data }) => data.access,
		enabled: accessToken !== null
	})

	return { data, isLoading }
}

export default usePremium