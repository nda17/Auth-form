import styles from '@/components/layout/nav-menu/desktop/desktop-dynamic-menu/DesktopDynamicMenu.module.scss'
import { IDesktopDynamicMenu } from '@/components/layout/nav-menu/desktop/desktop-dynamic-menu/desktop-dynamic-menu.interface'
import MaterialIcon from '@/components/ui/icons/MaterialIcon'
import clsx from 'clsx'
import { NextPage } from 'next'
import Link from 'next/link'

const DesktopDynamicMenu: NextPage<IDesktopDynamicMenu> = ({
	isLoggedIn,
	isManager,
	isAdmin
}) => {
	return (
		<div className={styles.wrapper}>
			{isLoggedIn && isLoggedIn && (
				<Link href="/profile" className={clsx(styles['link-button'])}>
					<MaterialIcon name="MdSettings" fill="blue" />
					Profile
				</Link>
			)}

			{isLoggedIn && isManager && (
				<Link href="/manager" className={clsx(styles['link-button'])}>
					<MaterialIcon name="MdGroup" fill="green" />
					Manager
				</Link>
			)}

			{isLoggedIn && isAdmin && (
				<Link href="/admin" className={clsx(styles['link-button'])}>
					<MaterialIcon name="MdOutlineLock" fill="green" />
					Admin
				</Link>
			)}
		</div>
	)
}

export default DesktopDynamicMenu
