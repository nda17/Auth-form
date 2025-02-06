import AuthItems from '@/components/layout/nav-menu/mobile/menu/auth-items/AuthItems';
import styles from '@/components/layout/nav-menu/mobile/menu/mobile-dynamic-menu/MobileDynamicMenu.module.scss';
import { FC } from 'react';

const MobileDynamicMenu: FC = () => {
	return (
		<ul className={styles.wrapper}>
			<AuthItems />
		</ul>
	);
};

export default MobileDynamicMenu;
