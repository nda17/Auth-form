import adminService from '@/services/admin/admin.service';
import { useQuery } from '@tanstack/react-query';

const useCountUsers = () => {
	const { data: response, isLoading } = useQuery({
		queryKey: ['get-count-users'],
		queryFn: () => adminService.fetchCountUsers()
	});

	return { response, isLoading };
};

export default useCountUsers;
