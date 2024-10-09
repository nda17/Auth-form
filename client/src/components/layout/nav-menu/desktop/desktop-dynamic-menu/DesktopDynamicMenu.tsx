import styles from '@/components/layout/nav-menu/desktop/desktop-dynamic-menu/DesktopDynamicMenu.module.scss'
import MaterialIcon from '@/components/ui/icons/MaterialIcon'
import useProfile from '@/hooks/useProfile'
import { UserRole } from '@/services/auth/auth.types'
import clsx from 'clsx'
import { NextPage } from 'next'
import Link from 'next/link'

const DesktopDynamicMenu: NextPage = () => {
	const { user } = useProfile()
	const isLoggedIn = user?.isLoggedIn
	const isManager =
		user?.isManager && user?.rights?.includes(UserRole.MANAGER)
	const isAdmin = user?.isAdmin && user?.rights?.includes(UserRole.ADMIN)

	return (
		<div className={styles.wrapper}>
			{isLoggedIn && (
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
