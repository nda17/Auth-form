'use client'
import styles from '@/components/screens/manager/Manager.module.scss'
import CirclesLoader from '@/components/ui/circles-loader/CirclesLoader'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import UserService from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

const Manager: FC = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['manager-content'],
		queryFn: () => UserService.fetchManager()
	})

	return (
		<div className={styles.wrapper}>
			<Heading text="Page for only managers" />
			{isLoading ? (
				<CirclesLoader />
			) : (
				<SubHeading text={`${data?.data.text || 'Not found!'}`} />
			)}
		</div>
	)
}

export default Manager
