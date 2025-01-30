import { IUserEditInput } from '@/components/screens/admin/users/(form)/user-editing-form/user-editing-form.interface';
import { ADMIN_PAGES } from '@/config/pages/admin.config';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import UserService from '@/services/user/user.service';
import { IUser } from '@/shared/types/user.types';
import {
	useMutation,
	useQuery,
	useQueryClient
} from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';

export const useCreateUpdateUser = (
	id = '',
	isAdminCreate: boolean,
	isAdminEdit: boolean,
	isUserEdit: boolean
) => {
	const router = useRouter();
	const userId = id;
	const queryClient = useQueryClient();

	const { data, isLoading, isError } = useQuery({
		queryKey: ['get-user-by-id', userId],
		queryFn: () => UserService.getById(userId),
		select: ({ data }) => data,
		enabled: userId !== ''
	});

	if (isError) {
		toast.error('Error, try later');
	}

	const { mutate: adminCreateUser } = useMutation({
		mutationKey: ['create-user'],
		mutationFn: (data: IUserEditInput) => UserService.create(data),
		onSuccess() {
			toast.success('User successfully created');
			router.push(ADMIN_PAGES.USERS);
		},

		onError(error: AxiosError<AxiosError>) {
			if (axios.isAxiosError(error)) {
				toast.error(
					`Create user: ${error.message}, ${error.response?.data?.message}`
				);
			}
		}
	});

	const { mutateAsync: adminUpdateUser } = useMutation({
		mutationKey: ['update-user'],
		mutationFn: (data: IUserEditInput) => UserService.update(userId, {isAdminRequest: true, ...data}),
		onSuccess() {
			toast.success('Update user was successful');
			router.push(ADMIN_PAGES.USERS);
		},
		onError(error: AxiosError<AxiosError>) {
			if (axios.isAxiosError(error)) {
				toast.error(
					`Update user: ${error.message}, ${error.response?.data?.message}`
				);
			}
		}
	});

	const { mutateAsync: updateUser } = useMutation({
		mutationKey: ['editing-user-profile'],
		mutationFn: (data: IUserEditInput) => UserService.update(userId, data),
		onSuccess() {
			toast.success('Update user was successful');
			router.push(PUBLIC_PAGES.USER_PROFILE);
			queryClient.invalidateQueries({ queryKey: ['get-user-by-id'] });
		},
		onError(error: AxiosError<AxiosError>) {
			if (axios.isAxiosError(error)) {
				toast.error(
					`Update user: ${error.message}, ${error.response?.data?.message}`
				);
			}
		}
	});

	const onSubmit: SubmitHandler<IUser> = async data => {
		if (!userId && isAdminCreate) {
			adminCreateUser(data);
		} else if (userId && isAdminEdit) {
			adminUpdateUser(data);
		} else if (userId && isUserEdit) {
			updateUser(data);
		}
	};

	return { onSubmit, isLoading, data };
};
