import ActionButton from '@/components/layout/nav-menu/desktop/menu/auth-items/action-auth-button/ActionAuthButton';
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

			<ActionButton isLoggedIn={user?.isLoggedIn} />
		</>
	);
};

export default AuthItems;
