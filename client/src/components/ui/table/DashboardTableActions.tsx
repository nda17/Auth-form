import LucideIcon from '@/components/ui/icons/lucide-icon/LucideIcon';
import type { IDashboardTableBaseData } from '@/components/ui/table/dashboard-table.types';
import styles from '@/components/ui/table/DashboardTable.module.scss';
import Link from 'next/link';

const DashboardTableActions = <TData extends IDashboardTableBaseData>({
	baseRecord
}: {
	baseRecord: TData;
}) => {
	const { deleteHandler, editUrl } = baseRecord;

	return (
		<>
			{editUrl && (
				<td className={styles.actions}>
					<Link href={editUrl} aria-label="Open edit page">
						<LucideIcon name="SquarePen" color="orange" />
					</Link>
				</td>
			)}
			{deleteHandler && (
				<td className={styles.actions}>
					<button onClick={deleteHandler} aria-label="Delete">
						<LucideIcon name="Trash2" color="firebrick" />
					</button>
				</td>
			)}
		</>
	);
};

export default DashboardTableActions;
