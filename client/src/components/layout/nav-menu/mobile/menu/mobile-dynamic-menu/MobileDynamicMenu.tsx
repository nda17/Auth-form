import LogoutButton from '@/components/layout/nav-menu/mobile/menu/logout-button/LogoutButton'
import styles from '@/components/layout/nav-menu/mobile/menu/mobile-dynamic-menu/MobileDynamicMenu.module.scss'
import MaterialIcon from '@/components/ui/icons/MaterialIcon'
import { ADMIN_PAGES } from '@/config/pages/admin.config'
import { PUBLIC_PAGES } from '@/config/pages/public.config'
import useUser from '@/hooks/useUser'
import { useHamburgerStore } from '@/store/hamburger-store/hamburger-store'
import clsx from 'clsx'
import { NextPage } from 'next'
import Link from 'next/link'

const MobileDynamicMenu: NextPage = () => {
	const { user } = useUser()

	const changeVisibleHamburger = useHamburgerStore(
		(state) => state.setVisible
	)

	const closeMenu = () => {
		changeVisibleHamburger()
	}

	return (
		<div className={styles.wrapper}>
			{user?.isLoggedIn && (
				<Link
					onClick={closeMenu}
					href={PUBLIC_PAGES.USER_PROFILE}
					className={clsx(styles['link-button'])}
				>
					<MaterialIcon name="MdSettings" fill="blue" />
					Profile
				</Link>
			)}
			{user?.isManager && (
				<Link
					onClick={closeMenu}
					href={PUBLIC_PAGES.MANAGER}
					className={clsx(styles['link-button'])}
				>
					<MaterialIcon name="MdGroup" fill="green" />
					Manager
				</Link>
			)}
			{user?.isAdmin && (
				<Link
					onClick={closeMenu}
					href={ADMIN_PAGES.HOME}
					className={clsx(styles['link-button'])}
				>
					<MaterialIcon name="MdOutlineLock" fill="green" />
					Admin
				</Link>
			)}

			{!user?.isLoggedIn && (
				<Link
					onClick={closeMenu}
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

export default MobileDynamicMenu
