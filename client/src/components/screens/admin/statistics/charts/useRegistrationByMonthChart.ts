import statisticsService from '@/services/statistics/statistics.service';
import { useQuery } from '@tanstack/react-query';
import { ChartData } from 'chart.js';

export const useRegistrationsByMonth = () => {
	const { data, isPending } = useQuery({
		queryKey: ['get-registration-by-month-chart'],
		queryFn: () => statisticsService.getRegistrationsByMonth(),
		select({ data }): ChartData<'line', number[], string> {
			return {
				labels: data.map(item => item.month),
				datasets: [
					{
						label: 'Number of registrations',
						data: data.map(item => item.count),
						borderColor: '#E6A34D',
						tension: 0.1
					}
				]
			};
		}
	});

	return {
		data,
		isPending
	};
};
