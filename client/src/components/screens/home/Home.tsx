import styles from '@/components/screens/home/Home.module.scss'
import Heading from '@/components/ui/heading/Heading'
import { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<div className={styles.wrapper}>
			<Heading text="Home page" />
		</div>
	)
}

export default Home
