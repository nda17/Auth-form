import { IUserEditInput } from '@/components/screens/admin/user/edit/user-edit.interface';
import UserService from '@/services/user/user.service';
import {
	useMutation,
	useQuery,
	useQueryClient
} from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import toast from 'react-hot-toast';

export const useUserEdit = (
	setValue: UseFormSetValue<IUserEditInput>,
	params: { id: string }
) => {
	const router = useRouter();
	const userId = params.id;
	const queryClient = useQueryClient();

	const { data, isLoading, isError } = useQuery({
		queryKey: ['get-user-by-id', userId],
		queryFn: () => UserService.fetchUserById(userId),
		select: ({ data }) => data
	});

	if (isError) {
		toast.error('Error, try later');
	}

	const { mutateAsync } = useMutation({
		mutationKey: ['update-user'],
		mutationFn: (data: IUserEditInput) =>
			UserService.updateUser(userId, data),
		onSuccess() {
			toast.success('Update user was successful');
			router.push('/admin/user-list');
			queryClient.invalidateQueries({ queryKey: ['get-user-by-id'] });
		},
		onError(error) {
			toast.error(`Update user: ${error.message}`);
		}
	});

	const onSubmit: SubmitHandler<IUserEditInput> = async data => {
		await mutateAsync(data);
	};

	return { onSubmit, isLoading, data };
};
