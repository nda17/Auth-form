import styles from '@/components/screens/admin/statistics/counters/Counters.module.scss';
import { useCounters } from '@/components/screens/admin/statistics/counters/useCounters';
import LucideIcon from '@/components/ui/icons/lucide-icon/LucideIcon';
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader';
import clsx from 'clsx';
import { NextPage } from 'next';

const Counters: NextPage = () => {
	const { data, isPending } = useCounters();

	return isPending ? (
		<div className="grid grid-cols-4 gap-5 mb-8">
			<SkeletonLoader count={1} className="p-12 " />
			<SkeletonLoader count={1} className="p-12 " />
			<SkeletonLoader count={1} className="p-12 " />
			<SkeletonLoader count={1} className="p-12 " />
		</div>
	) : data?.length ? (
		<div className={styles.wrapper}>
			{data.map((number, index) => (
				<div key={number.name} className={clsx(styles['wrapper-item'])}>
					<div className={styles.count}>
						<p>{number.name}</p>
						<p className={clsx(styles['value-count'])}>
							{number.value}
						</p>
					</div>
					<div className={styles.icon}>
						{index % 2 === 0 ? (
							<LucideIcon name="ChartLine" color="#E6A34D" size={45} />
						) : (
							<LucideIcon name="ChartColumn" color="#BE496B" size={45} />
						)}
					</div>
				</div>
			))}
		</div>
	) : null;
};

export default Counters;
