import styles from '@/components/layout/nav-menu/mobile/MobileNavbar.module.scss'
import Menu from '@/components/layout/nav-menu/mobile/menu/Menu'
import Navigation from '@/components/layout/nav-menu/mobile/navigation/Navigation'
import VeilBackground from '@/components/ui/veil-background/VeilBackground'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useHamburgerStore } from '@/store/hamburger-store/hamburger-store'
import { NextPage } from 'next'
import { useRef } from 'react'

const MobileNavbar: NextPage = () => {
	const visibleHamburger = useHamburgerStore((state) => state.visible)
	const changeVisibleHamburger = useHamburgerStore(
		(state) => state.setVisible
	)

	const closeMenu = () => {
		changeVisibleHamburger()
	}

	const menuRef = useRef(null)
	useClickOutside(menuRef, closeMenu)

	return (
		<div className={styles.wrapper} ref={menuRef}>
			<Navigation />
			{visibleHamburger && (
				<>
					<VeilBackground />
					<div>
						<Menu />
					</div>
				</>
			)}
		</div>
	)
}

export default MobileNavbar
