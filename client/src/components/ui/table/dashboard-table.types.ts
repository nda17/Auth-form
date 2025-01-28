import type { ReactNode } from 'react';

export interface IDashboardTableBaseData {
	editUrl?: string;
	deleteHandler?: () => void;
}

type TableColumn<TData> = {
	title: string;
	dataIndex: keyof TData;
	render: (record: TData, index: number) => ReactNode;
};

export type TActions = 'Edit' | 'Delete';

export interface IDashboardTable<TData extends IDashboardTableBaseData> {
	columns: TableColumn<TData>[];
	data: TData[];
	headerActions: TActions[];
}
