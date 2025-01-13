import { ChangeEvent, MouseEvent } from 'react';

export interface IAdminHeader {
	onClick?: () => void;
	searchTerm: string;
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
	handleClear: (event: MouseEvent<HTMLSpanElement>) => void;
}
