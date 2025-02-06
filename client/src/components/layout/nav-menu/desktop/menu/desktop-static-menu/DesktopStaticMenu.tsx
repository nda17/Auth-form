import { staticMenu } from '@/components/layout/nav-menu/data/menu.data';
import styles from '@/components/layout/nav-menu/desktop/menu/desktop-static-menu/DesktopStaticMenu.module.scss';
import MenuItem from '@/components/layout/nav-menu/desktop/menu/menu-item/MenuItem';
import { IMenuItem } from '@/components/layout/nav-menu/desktop/menu/menu-item/menu-item.interface';
import { FC } from 'react';

const DesktopStaticMenu: FC = () => {
	return (
		<ul className={styles.wrapper}>
			{staticMenu.items?.map((item: IMenuItem) => (
				<MenuItem item={item} key={item.link} />
			))}
		</ul>
	);
};

export default DesktopStaticMenu;
