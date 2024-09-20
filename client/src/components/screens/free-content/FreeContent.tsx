import styles from '@/components/screens/free-content/FreeContent.module.scss'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import { FC } from 'react'

const FreeContent: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Heading text="Free content page for all users" />
			<SubHeading text="Free content" />
		</div>
	)
}

export default FreeContent
