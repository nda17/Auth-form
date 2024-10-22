'use client'
import styles from '@/components/layout/nav-menu/desktop/desktop-dynamic-menu/DesktopDynamicMenu.module.scss'
import LogoutButton from '@/components/layout/nav-menu/logout-button/LogoutButton'
import MaterialIcon from '@/components/ui/icons/MaterialIcon'
import useProfile from '@/hooks/useProfile'
import clsx from 'clsx'
import { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'

const DesktopDynamicMenu: NextPage = () => {
	const [navState, setNavState] = useState(true)
	const { user } = useProfile(navState)

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

			{user?.isLoggedIn && <LogoutButton setNavState={setNavState} />}
		</div>
	)
}

export default DesktopDynamicMenu
