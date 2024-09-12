'use client'
import { IMainProvider } from '@/providers/Main-provider/main-provider.interface'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { FC } from 'react'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

const MainProvider: FC<IMainProvider> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<Toaster />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default MainProvider
