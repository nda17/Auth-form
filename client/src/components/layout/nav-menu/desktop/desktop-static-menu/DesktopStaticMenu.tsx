import styles from '@/components/layout/nav-menu/desktop/desktop-static-menu/DesktopStaticMenu.module.scss'
import MaterialIcon from '@/components/ui/icons/MaterialIcon'
import clsx from 'clsx'
import { NextPage } from 'next'
import Link from 'next/link'

const NavStaticMenu: NextPage = () => {
	return (
		<div className={styles.wrapper}>
			<Link href="/" className={clsx(styles['link-button'])}>
				<MaterialIcon name="MdHomeWork" fill="orange" />
				Home
			</Link>
			<Link href="/free-content" className={clsx(styles['link-button'])}>
				<MaterialIcon name="MdCheckCircle" fill="green" />
				Free content
			</Link>
			<Link
				href="/premium-content"
				className={clsx(styles['link-button'])}
			>
				<MaterialIcon name="MdPaid" fill="red" />
				Premium content
			</Link>
		</div>
	)
}

export default NavStaticMenu
