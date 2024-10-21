'use client'
import styles from '@/components/layout/nav-menu/NavMenu.module.scss'
import DesktopStaticMenu from '@/components/layout/nav-menu/desktop/desktop-static-menu/DesktopStaticMenu'
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
const DesktopDynamicMenu = dynamic(
	() =>
		import(
			'@/components/layout/nav-menu/desktop/desktop-dynamic-menu/DesktopDynamicMenu'
		),
	{
		loading: () => (
			<div className="w-[78.453px] h-full flex flex-col justify-center">
				<SkeletonLoader count={1} className="w-full h-4" />
			</div>
		),
		ssr: false
	}
)

const NavMenu: NextPage = () => {
	return (
		<div className={styles.wrapper}>
			<DesktopStaticMenu />
			<DesktopDynamicMenu />
		</div>
	)
}

export default NavMenu
