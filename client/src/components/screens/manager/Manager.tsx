'use client'
import UserService from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

const Manager = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['manager-content'],
		queryFn: () => UserService.fetchManager()
	})

	return (
		<div>
			<h1>Only for Managers:</h1>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<p>{data?.data.text || 'Not found!'}</p>
			)}
		</div>
	)
}

export default Manager
