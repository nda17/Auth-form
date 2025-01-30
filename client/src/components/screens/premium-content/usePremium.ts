import UserService from '@/services/user/user.service';
import { useQuery } from '@tanstack/react-query';

const usePremium = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['get-user-premium-rights'],
		queryFn: () => UserService.getPremium(),
		select: ({ data }) => data.access
	});

	return { data, isLoading };
};

export default usePremium;
