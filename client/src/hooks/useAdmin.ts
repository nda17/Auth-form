import UserService from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

const useAdmin = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['get-users-list'],
		queryFn: () => UserService.fetchUsersList(),
		select: ({ data }) => data
	})

	return { data, isLoading }
}

export default useAdmin
