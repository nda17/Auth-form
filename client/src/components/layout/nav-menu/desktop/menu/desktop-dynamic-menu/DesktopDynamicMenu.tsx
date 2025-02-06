import AuthItems from '@/components/layout/nav-menu/desktop/menu/auth-items/AuthItems';
import styles from '@/components/layout/nav-menu/desktop/menu/desktop-dynamic-menu/DesktopDynamicMenu.module.scss';
import { FC } from 'react';

const DesktopDynamicMenu: FC = () => {
	return (
		<ul className={styles.wrapper}>
			<AuthItems />
		</ul>
	);
};

export default DesktopDynamicMenu;
