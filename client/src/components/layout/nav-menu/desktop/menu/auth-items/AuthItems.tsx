import MenuItem from '@/components/layout/nav-menu/desktop/menu/menu-item/MenuItem';
import { useUser } from '@/components/screens/profile/useUser';
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader';
import { ADMIN_PAGES } from '@/config/pages/admin.config';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import dynamic from 'next/dynamic';
import { FC } from 'react';

const DynamicActionAuthButton = dynamic(
	() =>
		import(
			'@/components/layout/nav-menu/desktop/menu/auth-items/action-auth-button/ActionAuthButton'
		),
	{
		loading: () => (
			<div className="w-[78.453px] h-full flex flex-col justify-center">
				<SkeletonLoader count={1} className="w-full h-4" />
			</div>
		),
		ssr: false
	}
);

const AuthItems: FC = () => {
	const { user, isLoading } = useUser();

	return (
		<>
			{user?.isLoggedIn && (
				<MenuItem
					item={{
						icon: 'MdSettings',
						link: PUBLIC_PAGES.USER_PROFILE,
						title: 'Profile'
					}}
				/>
			)}

			{user?.isManager && (
				<MenuItem
					item={{
						icon: 'MdGroup',
						link: PUBLIC_PAGES.MANAGER,
						title: 'Manager'
					}}
				/>
			)}

			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: ADMIN_PAGES.HOME,
						title: 'Admin'
					}}
				/>
			)}

			<DynamicActionAuthButton
				isLoggedIn={user?.isLoggedIn}
				isLoading={isLoading}
			/>
		</>
	);
};

export default AuthItems;
