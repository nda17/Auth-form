'use client'
import styles from '@/components/screens/admin/Admin.module.scss'
import CirclesLoader from '@/components/ui/circles-loader/CirclesLoader'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import useAdmin from '@/hooks/useAdmin'
import { NextPage } from 'next'

const Admin: NextPage = () => {
	const { data, isLoading } = useAdmin()

	return (
		<div className={styles.wrapper}>
			<Heading text="Admin page" />
			<SubHeading text="List users:" />
			{isLoading ? (
				<CirclesLoader />
			) : data ? (
				data.map((user) => (
					<div key={user.id} className={styles.user}>
						{user.email}
					</div>
				))
			) : (
				<p>Not found!</p>
			)}
		</div>
	)
}

export default Admin
