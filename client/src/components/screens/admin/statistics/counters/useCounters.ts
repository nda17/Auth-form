import StatisticsService from '@/services/statistics/statistics.service';
import { useQuery } from '@tanstack/react-query';

export const useCounters = () => {
	const { data, isPending } = useQuery({
		queryKey: ['get-counters'],
		queryFn: () => StatisticsService.getCounters(),
		select: ({ data }) => data
	});

	return {
		data,
		isPending
	};
};
