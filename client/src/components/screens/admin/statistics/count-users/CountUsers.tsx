import styles from '@/components/screens/admin/statistics/count-users/CountUsers.module.scss';
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader';
import useCountUsers from '@/hooks/useCountUsers';
import { NextPage } from 'next';

const CountUsers: NextPage = () => {
	const { response, isLoading } = useCountUsers();

	return (
		<div className={styles.wrapper}>
			<p className={styles.title}>Registered users:</p>
			{isLoading ? (
				<div className="w-[19px] h-full flex flex-col justify-center mr-1">
					<SkeletonLoader count={1} className="w-full h-4" />
				</div>
			) : (
				<p className={styles.text}>{response?.data}</p>
			)}
			<p>users</p>
		</div>
	);
};

export default CountUsers;
