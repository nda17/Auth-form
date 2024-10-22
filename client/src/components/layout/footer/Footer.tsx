import logoImage from '@/assets/images/logo.png'
import styles from '@/components/layout/footer/Footer.module.scss'
import { PUBLIC_PAGES } from '@/config/pages/public.config'
import clsx from 'clsx'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Footer: NextPage = () => {
	const year = 2023
	const currentYear = new Date().getFullYear()

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
				<div className={clsx(styles['legal-wrapper'])}>
					<Link
						href={PUBLIC_PAGES.PRIVACY_POLICY}
						className={clsx(styles['link-legal'])}
					>
						Privacy policy
					</Link>
					<Link
						href={PUBLIC_PAGES.COOKIE_NOTICE}
						className={clsx(styles['link-legal'])}
					>
						Cookie notice
					</Link>
				</div>

				<div className={clsx(styles['inform-wrapper'])}>
					<p className={clsx(styles['text-inform'])}>
						All rights reserved ©
					</p>
					<p className={clsx(styles['date-inform'])}>
						{year === currentYear
							? currentYear
							: `${year} - ${currentYear}`}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
