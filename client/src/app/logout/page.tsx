'use client';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import authService from '@/services/auth/auth.service';
import { useAuthStore } from '@/store/auth-store/auth-store';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

const LogoutPage = () => {
	const setAuth = useAuthStore(state => state.setAuth);
	const { replace } = useRouter();
	const queryClient = useQueryClient();

	const { mutate: mutateLogout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess() {
			queryClient.clear();
			setAuth();
		}
	});

	mutateLogout();
	replace(PUBLIC_PAGES.LOGIN);
};

export default LogoutPage;
