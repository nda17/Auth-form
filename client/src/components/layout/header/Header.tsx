'use client';
import styles from '@/components/layout/header/Header.module.scss';
import DesktopNavBar from '@/components/layout/nav-menu/desktop/DesktopNavBar';
import MobileNavBar from '@/components/layout/nav-menu/mobile/MobileNavBar';
import { FC } from 'react';

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<MobileNavBar />
			<DesktopNavBar />
		</header>
	);
};

export default Header;
