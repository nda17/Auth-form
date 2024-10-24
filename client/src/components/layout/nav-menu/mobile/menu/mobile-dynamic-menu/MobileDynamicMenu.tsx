import AuthItems from '@/components/layout/nav-menu/mobile/menu/auth-items/AuthItems'
import styles from '@/components/layout/nav-menu/mobile/menu/mobile-dynamic-menu/MobileDynamicMenu.module.scss'
import { NextPage } from 'next'

const MobileDynamicMenu: NextPage = () => {
	return (
		<ul className={styles.wrapper}>
			<AuthItems />
		</ul>
	)
}

export default MobileDynamicMenu
