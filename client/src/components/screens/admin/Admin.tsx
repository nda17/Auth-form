'use client'
import styles from '@/components/screens/admin/Admin.module.scss'
import CirclesLoader from '@/components/ui/circles-loader/CirclesLoader'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import UserService from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'

const Admin: NextPage = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['users'],
		queryFn: () => UserService.fetchList()
	})

	return (
		<div className={styles.wrapper}>
			<Heading text="Admin page" />
			<SubHeading text="List users:" />
			{isLoading ? (
				<CirclesLoader />
			) : data?.data?.length ? (
				data.data.map((user) => (
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
