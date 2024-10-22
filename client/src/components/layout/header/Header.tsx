'use client'
import logoImage from '@/assets/images/logo.png'
import styles from '@/components/layout/header/Header.module.scss'
import DesktopNavBar from '@/components/layout/nav-menu/desktop/DesktopNavBar'
import MobileNavBar from '@/components/layout/nav-menu/mobile/MobileNavBar'
import { PUBLIC_PAGES } from '@/config/pages/public.config'
import clsx from 'clsx'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Header: NextPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className={clsx(styles['layout-container'])}>
				<Link href={PUBLIC_PAGES.HOME} className={styles.logo}>
					<Image
						src={logoImage}
						alt="Auth-form"
						draggable={false}
						priority={true}
					/>
				</Link>
				<DesktopNavBar />
				<MobileNavBar />
			</div>
		</div>
	)
}

export default Header
