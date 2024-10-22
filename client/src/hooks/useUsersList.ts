import UserService from '@/services/user/user.service'
import { useQuery } from '@tanstack/react-query'

const useUsersList = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['get-users-list'],
		queryFn: () => UserService.fetchUsersList(),
		select: ({ data }) => data
	})

	return { data, isLoading }
}

export default useUsersList
