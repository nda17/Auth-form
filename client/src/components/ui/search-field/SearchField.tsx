import LucideIcon from '@/components/ui/icons/lucide-icon/LucideIcon';
import styles from '@/components/ui/search-field/SearchField.module.scss';
import { ISearchField } from '@/components/ui/search-field/search-field.interface';
import { FC } from 'react';

const SearchField: FC<ISearchField> = ({
	searchTerm,
	handleSearch,
	handleClear
}) => {
	return (
		<div className={styles.wrapper}>
			<LucideIcon name="Search" />
			<input
				placeholder="Email, id, name"
				value={searchTerm}
				onChange={handleSearch}
			/>
			{!searchTerm ? null : (
				<span onClick={handleClear}>
					<LucideIcon name="X" color="red" />
				</span>
			)}
		</div>
	);
};

export default SearchField;
