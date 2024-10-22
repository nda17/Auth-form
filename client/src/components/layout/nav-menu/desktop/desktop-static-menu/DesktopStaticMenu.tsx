import styles from '@/components/layout/nav-menu/desktop/desktop-static-menu/DesktopStaticMenu.module.scss'
import MaterialIcon from '@/components/ui/icons/MaterialIcon'
import { PUBLIC_PAGES } from '@/config/pages/public.config'
import clsx from 'clsx'
import { NextPage } from 'next'
import Link from 'next/link'

const DesktopStaticMenu: NextPage = () => {
	return (
		<div className={styles.wrapper}>
			<Link
				href={PUBLIC_PAGES.HOME}
				className={clsx(styles['link-button'])}
			>
				<MaterialIcon name="MdHomeWork" fill="orange" />
				Home
			</Link>
			<Link
				href={PUBLIC_PAGES.FREE_CONTENT}
				className={clsx(styles['link-button'])}
			>
				<MaterialIcon name="MdCheckCircle" fill="green" />
				Free content
			</Link>
			<Link
				href={PUBLIC_PAGES.PREMIUM_CONTENT}
				className={clsx(styles['link-button'])}
			>
				<MaterialIcon name="MdPaid" fill="red" />
				Premium content
			</Link>
		</div>
	)
}

export default DesktopStaticMenu
