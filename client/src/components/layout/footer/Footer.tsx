import logoImage from '@/assets/images/logo.png'
import styles from '@/components/layout/footer/Footer.module.scss'
import clsx from 'clsx'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Footer: NextPage = () => {
	return (
		<div className={styles.footer}>
			<div className={clsx(styles['layout-container'])}>
				<Link href="/" className={styles.logo}>
					<Image
						src={logoImage}
						alt="Auth-form"
						draggable={false}
						priority={true}
					/>
				</Link>
			</div>
		</div>
	)
}

export default Footer
