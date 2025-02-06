import styles from '@/components/screens/home/Home.module.scss';
import Heading from '@/components/ui/heading/Heading';
import SubHeading from '@/components/ui/sub-heading/SubHeading';
import { FC } from 'react';

const Home: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Heading text="Home page" />
			<SubHeading text={'This Home page content'} />
		</div>
	);
};

export default Home;
