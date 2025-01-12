import '@/assets/styles/globals.scss'
import Layout from '@/components/layout/Layout'
import CirclesLoader from '@/components/ui/circles-loader/CirclesLoader'
import MainProvider from '@/providers/main-provider/MainProvider'
import { Metadata, Viewport } from 'next'
import { Fira_Mono } from 'next/font/google'
import { PropsWithChildren, Suspense } from 'react'

const inter = Fira_Mono({ subsets: ['latin', 'cyrillic'], weight: '400' })

export const metadata: Metadata = {
	title: {
		absolute: 'User-auth-template',
		template: '%s | User-auth-template',
	},
	description: 'User-auth-template app.',
	icons: {
		icon: '/favicon.svg',
		shortcut: '/favicon.svg',
		apple: '/touch-icons/256x256.png',
		other: {
			rel: 'touch-icons',
			url: '/touch-icons/256x256.png',
			sizes: '256x256',
			type: 'image/png'
		}
	},
	metadataBase: new URL('http://localgost:3000'),
	formatDetection: {
		telephone: false
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		siteName: 'User-auth-template',
		images: [
			{
				url: '/your-image-for-demo',
				width: 1200,
				height: 630,
				alt: 'User-auth-template app.',
			},
		],
		emails: ['mail@mail.com'],
	},
	manifest: '/manifest.json',
	publisher: 'User-auth-template',
	authors: {
		name: 'User-auth-template',
		url: 'http://localhost:3000'
	},
	applicationName: 'User-auth-template app.'
}

export const viewport: Viewport = {
	themeColor: '#ffffff',
}

const RootLayout = ({ children }: PropsWithChildren<unknown>) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				<MainProvider>
					<Layout>
						<Suspense fallback={<CirclesLoader />}>
							{children}
						</Suspense>
					</Layout>
				</MainProvider>
			</body>
		</html>
	)
}

export default RootLayout
