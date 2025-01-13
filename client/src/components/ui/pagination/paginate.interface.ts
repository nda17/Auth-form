export interface IPagination {
	prevPage: () => void;
	listPage: number[];
	currentPage: number;
	nextPage: () => void;
	changeActivePage(page: number): void;
}
