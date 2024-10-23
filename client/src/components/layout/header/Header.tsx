'use client'
import DesktopNavBar from '@/components/layout/nav-menu/desktop/DesktopNavBar'
import MobileNavBar from '@/components/layout/nav-menu/mobile/MobileNavBar'
import { NextPage } from 'next'

const Header: NextPage = () => {
	return (
		<header>
			<MobileNavBar />
			<DesktopNavBar />
		</header>
	)
}

export default Header
