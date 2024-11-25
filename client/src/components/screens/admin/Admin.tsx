'use client'
import styles from '@/components/screens/admin/Admin.module.scss'
import Statistics from '@/components/screens/admin/statistics/Statistics'
import AdminNavigation from '@/components/ui/admin/admin-navigation/AdminNavigation'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import { NextPage } from 'next'

const Admin: NextPage = () => {
	return (
		<div className={styles.wrapper}>
			<Heading text="Admin page" />
			<AdminNavigation />
			<SubHeading text="Some statistics" />
			<Statistics />
		</div>
	)
}

export default Admin
