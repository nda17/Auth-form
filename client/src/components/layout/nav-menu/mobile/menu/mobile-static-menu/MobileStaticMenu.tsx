import styles from '@/components/layout/nav-menu/mobile/menu/mobile-static-menu/MobileStaticMenu.module.scss'
import MaterialIcon from '@/components/ui/icons/MaterialIcon'
import { PUBLIC_PAGES } from '@/config/pages/public.config'
import { useHamburgerStore } from '@/store/hamburger-store/hamburger-store'
import clsx from 'clsx'
import { NextPage } from 'next'
import Link from 'next/link'

const MobileStaticMenu: NextPage = () => {
	const changeVisibleHamburger = useHamburgerStore(
		(state) => state.setVisible
	)

	const closeMenu = () => {
		changeVisibleHamburger()
	}

	return (
		<div className={styles.wrapper}>
			<Link
				onClick={closeMenu}
				href={PUBLIC_PAGES.HOME}
				className={clsx(styles['link-button'])}
			>
				<MaterialIcon name="MdHomeWork" fill="orange" />
				Home
			</Link>
			<Link
				onClick={closeMenu}
				href={PUBLIC_PAGES.FREE_CONTENT}
				className={clsx(styles['link-button'])}
			>
				<MaterialIcon name="MdCheckCircle" fill="green" />
				Free content
			</Link>
			<Link
				onClick={closeMenu}
				href={PUBLIC_PAGES.PREMIUM_CONTENT}
				className={clsx(styles['link-button'])}
			>
				<MaterialIcon name="MdPaid" fill="red" />
				Premium content
			</Link>
		</div>
	)
}

export default MobileStaticMenu
