'use client';
import styles from '@/components/ui/table/DashboardTable.module.scss';
import DashboardTableActions from '@/components/ui/table/DashboardTableActions';
import type {
	IDashboardTable,
	IDashboardTableBaseData
} from '@/components/ui/table/dashboard-table.types';
import clsx from 'clsx';

const DashboardTable = <TData extends IDashboardTableBaseData>({
	columns,
	data,
	headerActions
}: IDashboardTable<TData>) => {
	return (
		<table className={styles.wrapper}>
			<thead>
				<tr>
					{columns.map(column => (
						<th key={column.title}>{column.title}</th>
					))}
					{headerActions.map(column => (
						<th key={column} className={styles.actions}>
							{column}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.length ? (
					data.map((record, rowIndex) => (
						<tr key={rowIndex}>
							{columns.map(column => {
								return (
									<td key={column.dataIndex.toString() + rowIndex}>
										{column.render(record, rowIndex)}
									</td>
								);
							})}
							<DashboardTableActions<TData> baseRecord={record} />
						</tr>
					))
				) : (
					<tr>
						<td className={clsx(styles['not-found'])}>Not found!</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};

export default DashboardTable;
