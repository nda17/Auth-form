import styles from '@/components/ui/heading/Heading.module.scss'
import { IHeading } from '@/components/ui/heading/heading.interface'
import { NextPage } from 'next'

const Heading: NextPage<IHeading> = ({ text }) => {
	return <h1 className={styles.heading}>{text}</h1>
}

export default Heading
