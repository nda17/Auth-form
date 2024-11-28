import styles from '@/components/layout/nav-menu/mobile/MobileNavbar.module.scss'
import Menu from '@/components/layout/nav-menu/mobile/menu/Menu'
import Navigation from '@/components/layout/nav-menu/mobile/navigation/Navigation'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useHamburgerStore } from '@/store/hamburger-store/hamburger-store'
import { useVeilBackgroundStore } from '@/store/veil-background-store/veil-background-store'
import { NextPage } from 'next'
import { useRef } from 'react'

const MobileNavbar: NextPage = () => {
	const visibleVeilBackground = useVeilBackgroundStore(
		(state) => state.visible
	)
	const changeVisibleVeilBackground = useVeilBackgroundStore(
		(state) => state.setVisible
	)
	const visibleHamburger = useHamburgerStore((state) => state.visible)
	const changeVisibleHamburger = useHamburgerStore(
		(state) => state.setVisible
	)

	const changeStateMenu = () => {
		changeVisibleVeilBackground()
		changeVisibleHamburger()
	}

	const menuRef = useRef(null)
	useClickOutside(menuRef, changeStateMenu)

	return (
		<div className={styles.wrapper}>
			<Navigation />
			{visibleVeilBackground && visibleHamburger && (
				<>
					<div ref={menuRef}>
						<Menu />
					</div>
				</>
			)}
		</div>
	)
}

export default MobileNavbar
