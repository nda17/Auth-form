import styles from '@/components/ui/hamburger/Hamburger.module.scss'
import MaterialIcon from '@/components/ui/icons/MaterialIcon'
import { useHamburgerStore } from '@/store/hamburger-store/hamburger-store'
import { useVeilBackgroundStore } from '@/store/veil-background-store/veil-background-store'
import { NextPage } from 'next'

const Hamburger: NextPage = () => {
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

	return (
		<div className={styles.hamburger} onClick={closeMenu}>
			{visibleHamburger ? (
				<MaterialIcon name={'MdClose'} fill="#fc0303" />
			) : (
				<MaterialIcon name={'MdMenu'} />
			)}
		</div>
	)
}

export default Hamburger
