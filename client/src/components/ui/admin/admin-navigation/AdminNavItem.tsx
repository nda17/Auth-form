import styles from '@/components/ui/admin/admin-navigation/AdminNavigation.module.scss';
import { INavItem } from '@/components/ui/admin/admin-navigation/admin-navigation.interface';
import clsx from 'clsx';
import { NextPage } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AdminNavItem: NextPage<{ item: INavItem }> = ({
	item: { link, title, option }
}) => {
	const pathname = usePathname();

	const isMatch = (pathname: string, option: string[]) => {
		return option?.some(el => pathname.includes(el));
	};

	return (
		<li>
			<Link href={link}>
				<span
					className={clsx({
						[styles.active]: isMatch(pathname, option) || pathname === link
					})}
				>
					{title}
				</span>
			</Link>
		</li>
	);
};

export default AdminNavItem;
