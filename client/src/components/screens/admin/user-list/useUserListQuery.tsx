import { useDebounce } from '@/hooks/useDebounce';
import UserService from '@/services/user/user.service';
import {
	useMutation,
	useQuery,
	useQueryClient
} from '@tanstack/react-query';
import axios from 'axios';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useUserListQuery = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [page, setPage] = useState(1);
	const debouncedSearch = useDebounce(searchTerm, 500);
	const queryClient = useQueryClient();

	const { data, isPending } = useQuery({
		queryKey: ['get-user-list', debouncedSearch],
		queryFn: () =>
			UserService.getAll({
				searchTerm: debouncedSearch,
				skip: 0,
				take: page * 10
			}),
		select: ({ data }) => data
	});

	useEffect(() => {
		if (page === 1) return;
		queryClient.invalidateQueries({ queryKey: ['get-user-list'] });
	}, [page]);

	const { mutateAsync: deleteUser } = useMutation({
		mutationKey: ['delete-user'],
		mutationFn: (userId: string) => UserService.delete(userId),
		onSuccess() {
			toast.success('Delete user was successful');
			queryClient.invalidateQueries({ queryKey: ['get-user-list'] });
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data?.message);
			}
		}
	});

	const users = data?.items?.length ? data.items : null;

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const handleClear = (e: MouseEvent<HTMLSpanElement>) => {
		setSearchTerm('');
	};

	return {
		users,
		isPending,
		searchTerm,
		deleteUser,
		setSearchTerm,
		setPage,
		isHasMore: data?.isHasMore,
		handleClear,
		handleSearch
	};
};

export default useUserListQuery;
