import UserService from '@/services/user/user.service';
import { useQuery } from '@tanstack/react-query';

export const useManager = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['get-user-manager-rights'],
		queryFn: () => UserService.getManager(),
		select: ({ data }) => data.access
	});

	return { data, isLoading };
};
