import logoImage from '@/assets/images/logo.png'
import styles from '@/components/ui/logo-image/LogoImage.module.scss'
import { PUBLIC_PAGES } from '@/config/pages/public.config'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const LogoImage: NextPage = () => {
	return (
		<Link href={PUBLIC_PAGES.HOME} className={styles.logo}>
			<Image
				src={logoImage}
				alt="Auth-form"
				draggable={false}
				priority={true}
			/>
		</Link>
	)
}

export default LogoImage
