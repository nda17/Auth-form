import styles from '@/components/layout/Layout.module.scss'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import { ILayout } from '@/components/layout/layout.interface'
import VeilBackground from '@/components/ui/veil-background/VeilBackground'
import { NextPage } from 'next'

const Layout: NextPage<ILayout> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>
				{children}
				<VeilBackground />
			</main>
			<Footer />
		</div>
	)
}

export default Layout
