import AdminNavItem from '@/components/screens/admin/admin-navigation/AdminNavItem'
import styles from '@/components/screens/admin/admin-navigation/AdminNavigation.module.scss'
import { navItems } from '@/components/screens/admin/data/admin-navigation.data'
import clsx from 'clsx'
import { NextPage } from 'next'

const AdminNavigation: NextPage = () => {
	return (
		<ul className={clsx(styles['nav-list'])}>
			{navItems?.map((item) => (
				<AdminNavItem key={item.link} item={item} />
			))}
		</ul>
	)
}

export default AdminNavigation
