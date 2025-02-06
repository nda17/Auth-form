import { IActionAuthButton } from '@/components/layout/nav-menu/desktop/menu/auth-items/action-auth-button/action-auth-button.interface';
import LogoutButton from '@/components/layout/nav-menu/desktop/menu/logout-button/LogoutButton';
import MenuItem from '@/components/layout/nav-menu/desktop/menu/menu-item/MenuItem';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import { FC } from 'react';

const ActionAuthButton: FC<IActionAuthButton> = ({ isLoggedIn }) => {
	return isLoggedIn ? (
		<LogoutButton />
	) : (
		<MenuItem
			item={{
				icon: 'MdLogout',
				link: PUBLIC_PAGES.LOGIN,
				title: 'Login'
			}}
		/>
	);
};

export default ActionAuthButton;
