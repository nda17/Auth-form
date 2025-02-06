import AdminNavItem from '@/components/ui/admin/admin-navigation/AdminNavItem';
import styles from '@/components/ui/admin/admin-navigation/AdminNavigation.module.scss';
import { navItems } from '@/components/ui/admin/admin-navigation/data/admin-navigation.data';
import clsx from 'clsx';
import { FC } from 'react';

const AdminNavigation: FC = () => {
	return (
		<ul className={clsx(styles['nav-list'])}>
			{navItems?.map(item => <AdminNavItem key={item.link} item={item} />)}
		</ul>
	);
};

export default AdminNavigation;
