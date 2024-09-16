import styles from '@/components/layout/Layout.module.scss'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import { ILayout } from '@/components/layout/layout.interface'
import { FC } from 'react'

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
