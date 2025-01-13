import { staticMenu } from '@/components/layout/nav-menu/data/menu.data';
import MenuItem from '@/components/layout/nav-menu/mobile/menu/menu-item/MenuItem';
import { IMenuItem } from '@/components/layout/nav-menu/mobile/menu/menu-item/menu-item.interface';
import styles from '@/components/layout/nav-menu/mobile/menu/mobile-static-menu/MobileStaticMenu.module.scss';
import { NextPage } from 'next';

const MobileStaticMenu: NextPage = () => {
	return (
		<ul className={styles.wrapper}>
			{staticMenu.items?.map((item: IMenuItem) => (
				<MenuItem item={item} key={item.link} />
			))}
		</ul>
	);
};

export default MobileStaticMenu;
