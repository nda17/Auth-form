import logoImage from '@/assets/images/logo.png'
import styles from '@/components/layout/footer/Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Footer: FC = () => {
	return (
		<div className={styles.footer}>
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

export default Footer
