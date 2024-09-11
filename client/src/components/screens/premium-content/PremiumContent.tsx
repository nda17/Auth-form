'use client'
import CirclesLoader from '@/components/ui/circles-loader/CirclesLoader'
import UserService from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

const PremiumContent = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['premium-content'],
		queryFn: () => UserService.fetchPremium()
	})

	return (
		<div>
			<h1>Only for premium users</h1>
			{isLoading ? (
				<CirclesLoader />
			) : (
				<p>{data?.data.text || 'Not found!'}</p>
			)}
		</div>
	)
}

export default PremiumContent
