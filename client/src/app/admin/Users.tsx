'use client'
import CirclesLoader from '@/components/ui/circles-loader/CirclesLoader'
import UserService from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

export const Users = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['users'],
		queryFn: () => UserService.fetchList()
	})

	return (
		<div>
			<h1>Users</h1>
			{isLoading ? (
				<CirclesLoader />
			) : data?.data?.length ? (
				data.data.map((user) => <div key={user.id}>{user.email}</div>)
			) : (
				<p>Not found!</p>
			)}
		</div>
	)
}
