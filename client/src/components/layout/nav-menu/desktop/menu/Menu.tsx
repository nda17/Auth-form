'use client';
import styles from '@/components/layout/nav-menu/desktop/menu/Menu.module.scss';
import DesktopDynamicMenu from '@/components/layout/nav-menu/desktop/menu/desktop-dynamic-menu/DesktopDynamicMenu';
import DesktopStaticMenu from '@/components/layout/nav-menu/desktop/menu/desktop-static-menu/DesktopStaticMenu';
import { FC } from 'react';

const Menu: FC = () => {
	return (
		<div className={styles.wrapper}>
			<DesktopStaticMenu />
			<DesktopDynamicMenu />
		</div>
	);
};

export default Menu;
