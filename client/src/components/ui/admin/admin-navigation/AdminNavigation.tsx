import AdminNavItem from '@/components/ui/admin/admin-navigation/AdminNavItem';
import styles from '@/components/ui/admin/admin-navigation/AdminNavigation.module.scss';
import { navItems } from '@/components/ui/admin/admin-navigation/data/admin-navigation.data';
import clsx from 'clsx';
import { NextPage } from 'next';

const AdminNavigation: NextPage = () => {
	return (
		<ul className={clsx(styles['nav-list'])}>
			{navItems?.map(item => <AdminNavItem key={item.link} item={item} />)}
		</ul>
	);
};

export default AdminNavigation;
