import styles from '@/components/layout/nav-menu/mobile/navigation/Navigation.module.scss';
import Hamburger from '@/components/ui/hamburger/Hamburger';
import LogoImage from '@/components/ui/logo-image/LogoImage';
import clsx from 'clsx';
import { FC } from 'react';

const Navigation: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={clsx(styles['layout-container'])}>
				<LogoImage />
				<Hamburger />
			</div>
		</div>
	);
};

export default Navigation;
