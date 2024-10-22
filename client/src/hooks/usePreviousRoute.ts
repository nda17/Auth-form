import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export const usePreviousRoute = () => {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const [currentRoute, setCurrentRoute] = useState<string | null>(null)
	const [previousRoute, setPreviousRoute] = useState<string | null>(null)

	useEffect(() => {
		const url = `${pathname}?${searchParams}`
		setPreviousRoute(currentRoute)
		setCurrentRoute(url)
	}, [pathname, searchParams])

	return { previousRoute }
}
