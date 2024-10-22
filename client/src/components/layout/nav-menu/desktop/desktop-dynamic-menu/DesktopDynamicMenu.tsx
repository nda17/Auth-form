import styles from '@/components/layout/nav-menu/desktop/desktop-dynamic-menu/DesktopDynamicMenu.module.scss'
import LogoutButton from '@/components/layout/nav-menu/desktop/logout-button/LogoutButton'
import MaterialIcon from '@/components/ui/icons/MaterialIcon'
import { ADMIN_PAGES } from '@/config/pages/admin.config'
import { PUBLIC_PAGES } from '@/config/pages/public.config'
import useUser from '@/hooks/useUser'
import clsx from 'clsx'
import { NextPage } from 'next'
import Link from 'next/link'

const DesktopDynamicMenu: NextPage = () => {
	const { user } = useUser()

	return (
		<div className={styles.wrapper}>
			{user?.isLoggedIn && (
				<Link
					href={PUBLIC_PAGES.USER_PROFILE}
					className={clsx(styles['link-button'])}
				>
					<MaterialIcon name="MdSettings" fill="blue" />
					Profile
				</Link>
			)}
			{user?.isManager && (
				<Link
					href={PUBLIC_PAGES.MANAGER}
					className={clsx(styles['link-button'])}
				>
					<MaterialIcon name="MdGroup" fill="green" />
					Manager
				</Link>
			)}
			{user?.isAdmin && (
				<Link
					href={ADMIN_PAGES.HOME}
					className={clsx(styles['link-button'])}
				>
					<MaterialIcon name="MdOutlineLock" fill="green" />
					Admin
				</Link>
			)}

			{!user?.isLoggedIn && (
				<Link
					href={PUBLIC_PAGES.LOGIN}
					className={clsx(styles['link-auth-button'])}
				>
					<MaterialIcon name="MdLogout" fill="green" />
					Login
				</Link>
			)}

			{user?.isLoggedIn && <LogoutButton />}
		</div>
	)
}

export default DesktopDynamicMenu
