import styles from '@/components/ui/admin/admin-header/AdminHeader.module.scss'
import { IAdminHeader } from '@/components/ui/admin/admin-header/admin-header.interface'
import { SearchField } from '@/components/ui/search-field/SearchField'
import { FC } from 'react'

const AdminHeader: FC<IAdminHeader> = ({
	handleSearch,
	searchTerm,
	handleClear
}) => {
	return (
		<div className={styles.header}>
			<SearchField
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				handleClear={handleClear}
			/>
		</div>
	)
}

export default AdminHeader
