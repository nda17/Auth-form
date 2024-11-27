import { useDebounce } from '@/hooks/useDebounce'
import UserService from '@/services/user/user.service'
import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, MouseEvent, useState } from 'react'

const useUserList = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const { data, isLoading } = useQuery({
		queryKey: ['get-user-list', debouncedSearch],
		queryFn: () => UserService.fetchUserList(debouncedSearch),
		select: ({ data }) => data
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const handleClear = (e: MouseEvent<HTMLSpanElement>) => {
		setSearchTerm('')
	}

	return { data, isLoading, searchTerm, handleClear, handleSearch }
}

export default useUserList
