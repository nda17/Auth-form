import { useRegistrationsByMonth } from '@/components/screens/admin/statistics/charts/RegistrationByMonthChart/useRegistrationByMonthChart';
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader';
import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	Tooltip
} from 'chart.js';
import { FC } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend
);

const RegistrationByMonthChart: FC = () => {
	const { data, isPending } = useRegistrationsByMonth();

	return isPending ? (
		<SkeletonLoader count={1} className="w-full h-[278px]" />
	) : data ? (
		<Line data={data} />
	) : null;
};

export default RegistrationByMonthChart;
