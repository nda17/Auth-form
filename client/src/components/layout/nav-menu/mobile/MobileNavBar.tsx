import styles from '@/components/layout/nav-menu/mobile/MobileNavbar.module.scss'
import Menu from '@/components/layout/nav-menu/mobile/menu/Menu'
import Hamburger from '@/components/ui/hamburger/Hamburger'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useHamburgerStore } from '@/store/hamburger-store/hamburger-store'
import { useVeilBackgroundStore } from '@/store/veil-background-store/veil-background-store'
import { NextPage } from 'next'
import { useRef } from 'react'

const MobileNavbar: NextPage = () => {
	const visibleHamburger = useHamburgerStore((state) => state.visible)
	const changeVisibleHamburger = useHamburgerStore(
		(state) => state.setVisible
	)
	const changeVisibleVeilBackground = useVeilBackgroundStore(
		(state) => state.setVisible
	)

	const closeMenu = () => {
		changeVisibleHamburger()
		changeVisibleVeilBackground()
	}

	const menuRef = useRef(null)
	useClickOutside(menuRef, closeMenu)

	return (
		<div className={styles.wrapper}>
			<Hamburger />
			{visibleHamburger && (
				<div ref={menuRef}>
					<Menu />
				</div>
			)}
		</div>
	)
}

export default MobileNavbar
