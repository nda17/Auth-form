import '@/assets/styles/globals.scss'
import Layout from '@/components/layout/Layout'
import MainProvider from '@/providers/main-provider/MainProvider'
import type { Metadata } from 'next'
import { Fira_Mono } from 'next/font/google'
import { PropsWithChildren } from 'react'

const inter = Fira_Mono({ subsets: ['latin', 'cyrillic'], weight: '400' })

export const metadata: Metadata = {
	title: 'Auth-form',
	description: 'Auth-form'
}

const RootLayout = ({ children }: PropsWithChildren<unknown>) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				<MainProvider>
					<Layout>{children}</Layout>
				</MainProvider>
			</body>
		</html>
	)
}

export default RootLayout
