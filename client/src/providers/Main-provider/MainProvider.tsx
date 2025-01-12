'use client'
import CookieConsentProvider from '@/providers/cookie-consent-provider/CookieConsentProvider'
import { IMainProvider } from '@/providers/main-provider/main-provider.interface'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { NextPage } from 'next'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

const MainProvider: NextPage<IMainProvider> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Toaster />
			<CookieConsentProvider />
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default MainProvider
