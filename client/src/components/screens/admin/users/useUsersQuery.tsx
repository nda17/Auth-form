import { useDebounce } from '@/hooks/useDebounce';
import UserService from '@/services/user/user.service';
import {
	useMutation,
	useQuery,
	useQueryClient
} from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const useUsersQuery = () => {
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
		onError(error: AxiosError<AxiosError>) {
			if (axios.isAxiosError(error)) {
				toast.error(
					`Delete user: ${error.message}, ${error.response?.data?.message}`
				);
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
		setPage,
		isHasMore: data?.isHasMore,
		handleClear,
		handleSearch
	};
};
