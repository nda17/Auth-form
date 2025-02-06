import RegistrationByMonthChart from '@/components/screens/admin/statistics/charts/RegistrationByMonthChart/RegistrationByMonthChart';
import Counters from '@/components/screens/admin/statistics/counters/Counters';
import { FC } from 'react';

const Statistics: FC = () => {
	return (
		<>
			<Counters />
			<RegistrationByMonthChart />
		</>
	);
};

export default Statistics;
