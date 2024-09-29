import styles from '@/components/screens/free-content/FreeContent.module.scss'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import { NextPage } from 'next'

const FreeContent: NextPage = () => {
	return (
		<div className={styles.wrapper}>
			<Heading text="Free content page for all users" />
			<SubHeading text="This Free content page" />
		</div>
	)
}

export default FreeContent
