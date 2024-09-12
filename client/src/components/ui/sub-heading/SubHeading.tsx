import styles from '@/components/ui/sub-heading/SubHeading.module.scss'
import { ISubHeading } from '@/components/ui/sub-heading/sub-heading.interface'
import { FC } from 'react'

const SubHeading: FC<ISubHeading> = ({ text }) => {
	return <h2 className={styles.subHeading}>{text}</h2>
}

export default SubHeading