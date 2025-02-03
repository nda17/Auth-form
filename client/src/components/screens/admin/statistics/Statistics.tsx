import RegistrationByMonthChart from '@/components/screens/admin/statistics/charts/RegistrationByMonthChart/RegistrationByMonthChart';
import Counters from '@/components/screens/admin/statistics/counters/Counters';
import { NextPage } from 'next';

const Statistics: NextPage = () => {
	return (
		<>
			<Counters />
			<RegistrationByMonthChart />
		</>
	);
};

export default Statistics;
