import { ChangeEvent, MouseEvent } from 'react'

export interface ISearchField {
	searchTerm: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
	handleClear: (e: MouseEvent<HTMLSpanElement>) => void
}
