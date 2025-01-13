import styles from '@/components/layout/nav-menu/desktop/DesktopNavBar.module.scss';
import Menu from '@/components/layout/nav-menu/desktop/menu/Menu';
import LogoImage from '@/components/ui/logo-image/LogoImage';
import clsx from 'clsx';
import { NextPage } from 'next';

const DesktopNavBar: NextPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className={clsx(styles['layout-container'])}>
				<LogoImage />
				<Menu />
			</div>
		</div>
	);
};

export default DesktopNavBar;
