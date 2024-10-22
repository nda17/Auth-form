import CookieNotice from '@/components/screens/legal-documentation/cookie-notice/CookieNotice'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Cookie Notice',
	description: 'Cookie Notice page'
}

const CookieNoticePage = () => {
	return <CookieNotice />
}

export default CookieNoticePage
