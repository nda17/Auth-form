import logoImage from '@/assets/images/logo.png'
import styles from '@/components/layout/footer/Footer.module.scss'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Footer: NextPage = () => {
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
