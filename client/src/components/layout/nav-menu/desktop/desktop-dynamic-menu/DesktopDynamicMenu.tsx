'use client'
import styles from '@/components/layout/nav-menu/desktop/desktop-dynamic-menu/DesktopDynamicMenu.module.scss'
import MaterialIcon from '@/components/ui/icons/MaterialIcon'
import useUser from '@/hooks/useUser'
import clsx from 'clsx'
import { NextPage } from 'next'
import Link from 'next/link'
import LogoutButton from '../../logout-button/LogoutButton'

const DesktopDynamicMenu: NextPage = () => {
	const { user } = useUser()

	return (
		<div className={styles.wrapper}>
			{user?.isLoggedIn && (
				<Link href="/profile" className={clsx(styles['link-button'])}>
					<MaterialIcon name="MdSettings" fill="blue" />
					Profile
				</Link>
			)}
			{user?.isManager && (
				<Link href="/manager" className={clsx(styles['link-button'])}>
					<MaterialIcon name="MdGroup" fill="green" />
					Manager
				</Link>
			)}
			{user?.isAdmin && (
				<Link href="/admin" className={clsx(styles['link-button'])}>
					<MaterialIcon name="MdOutlineLock" fill="green" />
					Admin
				</Link>
			)}

			{!user?.isLoggedIn && (
				<Link href="/login" className={clsx(styles['link-auth-button'])}>
					<MaterialIcon name="MdLogout" fill="green" />
					Login
				</Link>
			)}

			{user?.isLoggedIn && <LogoutButton />}
		</div>
	)
}

export default DesktopDynamicMenu
