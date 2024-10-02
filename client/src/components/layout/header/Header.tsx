'use client'
import logoImage from '@/assets/images/logo.png'
import styles from '@/components/layout/header/Header.module.scss'
import NavMenu from '@/components/layout/nav-menu/NavMenu'
import clsx from 'clsx'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Header: NextPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className={clsx(styles['layout-container'])}>
				<Link href="/" className={styles.logo}>
					<Image
						src={logoImage}
						alt="Auth-form"
						draggable={false}
						priority={true}
					/>
				</Link>
				<NavMenu />
			</div>
		</div>
	)
}

export default Header
