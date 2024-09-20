'use client'
import styles from '@/components/screens/premium-content/PremiumContent.module.scss'
import CirclesLoader from '@/components/ui/circles-loader/CirclesLoader'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import UserService from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

const PremiumContent: FC = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['premium-content'],
		queryFn: () => UserService.fetchPremium()
	})

	return (
		<div className={styles.wrapper}>
			<Heading text="Page for users with a purchased Premium subscription" />
			{isLoading ? (
				<CirclesLoader />
			) : (
				<SubHeading text={`${data?.data.text || 'Not found!'}`} />
			)}
		</div>
	)
}

export default PremiumContent
