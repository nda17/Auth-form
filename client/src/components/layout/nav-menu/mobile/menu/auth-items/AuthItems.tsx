import LogoutButton from '@/components/layout/nav-menu/mobile/menu/logout-button/LogoutButton';
import MenuItem from '@/components/layout/nav-menu/mobile/menu/menu-item/MenuItem';
import { ADMIN_PAGES } from '@/config/pages/admin.config';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import useUser from '@/hooks/useUser';
import { NextPage } from 'next';

const AuthItems: NextPage = () => {
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
