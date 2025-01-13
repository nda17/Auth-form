import Home from '@/components/screens/home/Home';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Home',
	description: 'Home page'
};

const HomePage = async () => {
	return <Home />;
};

export default HomePage;
