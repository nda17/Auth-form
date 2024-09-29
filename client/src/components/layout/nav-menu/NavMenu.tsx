import styles from '@/components/layout/nav-menu/NavMenu.module.scss'
import DesktopDynamicMenu from '@/components/layout/nav-menu/desktop/desktop-dynamic-menu/DesktopDynamicMenu'
import DesktopStaticMenu from '@/components/layout/nav-menu/desktop/desktop-static-menu/DesktopStaticMenu'
import LogoutButton from '@/components/layout/nav-menu/logout-button/LogoutButton'
import MaterialIcon from '@/components/ui/icons/MaterialIcon'
import useAuth from '@/hooks/useAuth'
import { setAuthStatus } from '@/store/auth-status/auth-status.slice'
import clsx from 'clsx'
import { NextPage } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const NavMenu: NextPage = () => {
	const { statusAuth } = useAuth()

	const isLoggedIn = useSelector(
		(state: any) => state.authStatus.isLoggedIn
	)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setAuthStatus(statusAuth ? true : false))
	}, [statusAuth])

	return (
		<div className={styles.wrapper}>
			<DesktopStaticMenu />
			{isLoggedIn && <DesktopDynamicMenu />}
			<div className={styles.wrapper}>
				{!isLoggedIn ? (
					<Link href="/login" className={clsx(styles['link-auth-button'])}>
						<MaterialIcon name="MdLogout" fill="green" />
						Login
					</Link>
				) : (
					<LogoutButton />
				)}
			</div>
		</div>
	)
}

export default NavMenu
