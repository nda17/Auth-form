import LogoutButton from '@/components/layout/nav-menu/desktop/menu/logout-button/LogoutButton';
import MenuItem from '@/components/layout/nav-menu/desktop/menu/menu-item/MenuItem';
import { useUser } from '@/components/screens/profile/useUser';
import { ADMIN_PAGES } from '@/config/pages/admin.config';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import { FC } from 'react';

const AuthItems: FC = () => {
	const { user } = useUser();

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

			{!user?.isLoggedIn && (
				<MenuItem
					item={{
						icon: 'MdLogout',
						link: PUBLIC_PAGES.LOGIN,
						title: 'Login'
					}}
				/>
			)}

			{user?.isLoggedIn && <LogoutButton />}
		</>
	);
};

export default AuthItems;
