import styles from '@/components/screens/home/Home.module.scss'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<div className={styles.wrapper}>
			<Heading text="Home page" />
			<SubHeading text={'This Home page content'} />
		</div>
	)
}

export default Home
