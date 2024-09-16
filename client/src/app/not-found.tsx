import styles from '@/assets/styles/not-found.module.scss'
import Heading from '@/components/ui/heading/Heading'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Not found',
	description: 'Not found page'
}

const Error404 = () => {
	return (
		<div className={styles.wrapper}>
			<Heading text="404 - Page Not Found" />
		</div>
	)
}

export default Error404
