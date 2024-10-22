'use client'
import { usePreviousRoute } from '@/hooks/usePreviousRoute'
import { INavigationProvider } from '@/providers/navigation-provider/navigation-provider.interface'
import { NextPage } from 'next'
import { createContext, useContext } from 'react'

export const useNavigationContext = () => useContext(NavigationContext)

export const NavigationProvider: NextPage<INavigationProvider> = ({
	children
}) => {
	const navigation = usePreviousRoute()

	return (
		<NavigationContext.Provider value={navigation}>
			{children}
		</NavigationContext.Provider>
	)
}

const NavigationContext = createContext<
	ReturnType<typeof usePreviousRoute>
>({
	previousRoute: null
})
