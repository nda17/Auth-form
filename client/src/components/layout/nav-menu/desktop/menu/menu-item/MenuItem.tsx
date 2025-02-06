import styles from '@/components/layout/nav-menu/desktop/menu/menu-item/MenuItem.module.scss';
import { IMenuItem } from '@/components/layout/nav-menu/desktop/menu/menu-item/menu-item.interface';
import MaterialIcon from '@/components/ui/icons/MaterialIcon';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const pathname = usePathname();

	return (
		<li
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
