import styles from '@/components/layout/nav-menu/mobile/menu/Menu.module.scss'
import MobileDynamicMenu from '@/components/layout/nav-menu/mobile/menu/mobile-dynamic-menu/MobileDynamicMenu'
import MobileStaticMenu from '@/components/layout/nav-menu/mobile/menu/mobile-static-menu/MobileStaticMenu'
import clsx from 'clsx'
import { NextPage } from 'next'

const Menu: NextPage = () => {
	return (
		<div className={clsx(styles['wrapper'])}>
			<MobileStaticMenu />
			<MobileDynamicMenu />
		</div>
	)
}

export default Menu
