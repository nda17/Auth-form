import UserService from '@/services/user/user.service';
import { useQuery } from '@tanstack/react-query';

const useManager = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['get-user-manager-rights'],
		queryFn: () => UserService.fetchManager(),
		select: ({ data }) => data.access
	});

	return { data, isLoading };
};

export default useManager;
