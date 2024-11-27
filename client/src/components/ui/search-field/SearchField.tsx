import MaterialIcon from '@/components/ui/icons/MaterialIcon'
import styles from '@/components/ui/search-field/SearchField.module.scss'
import { ISearchField } from '@/components/ui/search-field/search-field.interface'
import { FC } from 'react'

export const SearchField: FC<ISearchField> = ({
	searchTerm,
	handleSearch,
	handleClear
}) => {
	return (
		<div className={styles.searchField}>
			<MaterialIcon name="MdSearch" />
			<input
				placeholder="Search email"
				value={searchTerm}
				onChange={handleSearch}
			/>
			{!searchTerm ? null : (
				<span onClick={handleClear}>
					<MaterialIcon name="MdClose" />
				</span>
			)}
		</div>
	)
}