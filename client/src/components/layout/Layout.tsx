'use client';
import VeilBackground from '@/components//ui/veil-background/VeilBackground';
import styles from '@/components/layout/Layout.module.scss';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import { ILayout } from '@/components/layout/layout.interface';
import { useVeilBackgroundStore } from '@/store/veil-background-store/veil-background-store';
import { NextPage } from 'next';

const Layout: NextPage<ILayout> = ({ children }) => {
	const visibleVeilBackground = useVeilBackgroundStore(
		state => state.visible
	);

	return (
		<div className={styles.layout}>
			<Header />
			{visibleVeilBackground && <VeilBackground />}
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
