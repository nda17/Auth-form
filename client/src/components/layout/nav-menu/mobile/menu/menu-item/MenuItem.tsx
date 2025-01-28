import styles from '@/components/layout/nav-menu/mobile/menu/menu-item/MenuItem.module.scss';
import { IMenuItem } from '@/components/layout/nav-menu/mobile/menu/menu-item/menu-item.interface';
import MaterialIcon from '@/components/ui/icons/MaterialIcon';
import { useHamburgerStore } from '@/store/hamburger-store/hamburger-store';
import { useVeilBackgroundStore } from '@/store/veil-background-store/veil-background-store';
import clsx from 'clsx';
import { NextPage } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuItem: NextPage<{ item: IMenuItem }> = ({ item }) => {
	const pathname = usePathname();
	const changeVisibleVeilBackground = useVeilBackgroundStore(
		state => state.setVisible
	);
	const changeVisibleHamburger = useHamburgerStore(
		state => state.setVisible
	);

	const changeStateMenu = () => {
		changeVisibleVeilBackground();
		changeVisibleHamburger();
	};

	return (
		<li
			onClick={changeStateMenu}
			className={clsx([styles.wrapper], {
				[styles.active]: pathname === item.link
			})}
		>
			<Link href={item.link} className={clsx(styles['link-button'])}>
				<MaterialIcon name={item.icon} />
				{item.title}
			</Link>
		</li>
	);
};

export default MenuItem;
