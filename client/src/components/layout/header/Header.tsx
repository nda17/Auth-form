import logoImage from '@/assets/images/logo.png'
import styles from '@/components/layout/header/Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<Link href="/" className={styles.logo}>
				<Image
					src={logoImage}
					alt="Auth-form"
					draggable={false}
					priority={true}
				/>
			</Link>
		</div>
	)
}

export default Header
