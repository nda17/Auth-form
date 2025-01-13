import styles from '@/components/layout/nav-menu/mobile/navigation/Navigation.module.scss';
import Hamburger from '@/components/ui/hamburger/Hamburger';
import LogoImage from '@/components/ui/logo-image/LogoImage';
import clsx from 'clsx';
import { NextPage } from 'next';

const Navigation: NextPage = () => {
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
