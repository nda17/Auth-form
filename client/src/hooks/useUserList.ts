import { useDebounce } from '@/hooks/useDebounce'
import UserService from '@/services/user/user.service'
import {
	useMutation,
	useQuery,
	useQueryClient
} from '@tanstack/react-query'
import axios from 'axios'
import { ChangeEvent, MouseEvent, useState } from 'react'
import toast from 'react-hot-toast'

const useUserList = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const queryClient = useQueryClient()
	const debouncedSearch = useDebounce(searchTerm, 500)

	const { data, isLoading } = useQuery({
		queryKey: ['get-user-list', debouncedSearch],
		queryFn: () => UserService.fetchUserList(debouncedSearch),
		select: ({ data }) => data
	})

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['delete-user'],
		mutationFn: (userId: string) => UserService.deleteUser(userId),
		onSuccess() {
			toast.success('Delete user was successful')
			queryClient.invalidateQueries({ queryKey: ['get-user-list']})
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data?.message)
			}
		}
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const handleClear = (e: MouseEvent<HTMLSpanElement>) => {
		setSearchTerm('')
	}

	return {
		data,
		isLoading,
		searchTerm,
		handleClear,
		handleSearch,
		deleteAsync
	}
}

export default useUserList
