'use client';
import styles from '@/components/screens/profile/Profile.module.scss';
import { useUser } from '@/components/screens/profile/useUser';
import Heading from '@/components/ui/heading/Heading';
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import authService from '@/services/auth/auth.service';
import { formatDate } from '@/utils/format.date';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { clsx } from 'clsx';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useTransition } from 'react';
import toast from 'react-hot-toast';
const DynamicUserInfo = dynamic(
	() => import('@/components/ui/user-info/UserInfo'),
	{
		loading: () => (
			<div className="mb-[1.1rem] gap-4 flex items-center">
				<div className="w-[5rem] h-[5rem] rounded-full">
					<SkeletonLoader count={1} circle className="w-full h-full" />
				</div>
				<div className="w-[10rem] h-5">
					<SkeletonLoader count={1} className="w-full h-full" />
				</div>
			</div>
		),
		ssr: false
	}
);
const DynamicConfirmStatus = dynamic(
	() => import('@/components/ui/profile/confirm-status/ConfirmStatus'),
	{
		loading: () => (
			<SkeletonLoader count={1} className="w-full h-7 mb-5" />
		),
		ssr: false
	}
);
const DynamicProfileInfoDate = dynamic(
	() =>
		import('@/components/ui/profile/profile-info-field/ProfileInfoField'),
	{
		loading: () => (
			<SkeletonLoader count={1} className="w-full h-7 mb-5" />
		),
		ssr: false
	}
);
const DynamicProfileInfoEmail = dynamic(
	() =>
		import('@/components/ui/profile/profile-info-field/ProfileInfoField'),
	{
		loading: () => (
			<SkeletonLoader count={1} className="w-full h-7 mb-[2.4rem]" />
		),
		ssr: false
	}
);

const Profile: FC = () => {
	const { user, isLoading } = useUser();
	const { replace } = useRouter();
	const queryClient = useQueryClient();

	const [isPending, startTransition] = useTransition();

	const { mutate: mutateLogout, isPending: isLogoutPending } = useMutation(
		{
			mutationKey: ['logout'],
			mutationFn: () => authService.logout(),
			onSuccess() {
				startTransition(() => {
					toast.success('Logout');
					queryClient.clear();
					replace(PUBLIC_PAGES.LOGIN);
				});
			}
		}
	);

	const isLogoutLoading = isLogoutPending || isPending;

	return (
		<div className={styles.wrapper}>
			<Heading text="Profile" />
			<div className={clsx(styles['user-info-wrapper'])}>
				<DynamicUserInfo
					avatarPath={user?.avatarPath || null}
					name={user?.name || null}
					isLoading={isLoading}
				/>
				<Link
					href={`${PUBLIC_PAGES.USER_PROFILE_EDIT}/${user.id}`}
					className={clsx(styles['edit-link'])}
					aria-label="Edit profile"
				>
					Edit
				</Link>
			</div>
			<DynamicConfirmStatus verificationToken={user?.verificationToken} />
			<DynamicProfileInfoDate
				title="Date register:"
				content={formatDate(user?.createdAt)}
			/>
			<DynamicProfileInfoEmail title="Email:" content={user?.email} />

			<button
				aria-label="Logout"
				onClick={() => mutateLogout()}
				disabled={isLogoutLoading}
				className={clsx(styles['logout-button'])}
			>
				{isLogoutLoading ? 'Wait...' : 'Logout'}
			</button>
		</div>
	);
};

export default Profile;
