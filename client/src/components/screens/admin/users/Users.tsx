'use client';
import ManageUsersShowMore from '@/components/screens/admin/users/ManageUsersShowMore';
import { IUsersTable } from '@/components/screens/admin/users/users.interface';
import styles from '@/components/screens/admin/users/Users.module.scss';
import useUsersQuery from '@/components/screens/admin/users/useUsersQuery';
import AdminNavigation from '@/components/ui/admin/admin-navigation/AdminNavigation';
import AlertPopup from '@/components/ui/alert-popup/AlertPopup';
import Heading from '@/components/ui/heading/Heading';
import LucideIcon from '@/components/ui/icons/lucide-icon/LucideIcon';
import SearchField from '@/components/ui/search-field/SearchField';
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader';
import SubHeading from '@/components/ui/sub-heading/SubHeading';
import DashboardTable from '@/components/ui/table/DashboardTable';
import { ADMIN_PAGES } from '@/config/pages/admin.config';
import { useAlertPopupStore } from '@/store/alert-popup-store/alert-popup-store';
import { useVeilBackgroundStore } from '@/store/veil-background-store/veil-background-store';
import { formatDate } from '@/utils/format.date';
import clsx from 'clsx';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Users: NextPage = () => {
	const changeVisibleVeilBackground = useVeilBackgroundStore(
		state => state.setVisible
	);
	const changeVisiblePopup = useAlertPopupStore(state => state.setVisible);
	const addIdInPopup = useAlertPopupStore(state => state.addId);

	const changeStatePopup = () => {
		changeVisibleVeilBackground();
		changeVisiblePopup();
	};

	const {
		users,
		isPending,
		searchTerm,
		deleteUser,
		setPage,
		isHasMore,
		handleClear,
		handleSearch
	} = useUsersQuery();

	const textPopup =
		'The data will be deleted without the possibility of recovery.';

	return (
		<div className={styles.wrapper}>
			<Heading text="Admin page" />
			<AlertPopup removeHandler={deleteUser} text={textPopup} />
			<AdminNavigation />
			<SubHeading text="A list of users" />
			<div className={clsx(styles['header-wrapper'])}>
				{isPending ? (
					<div className={clsx(styles['skeleton-wrapper-create'])}>
						<SkeletonLoader count={1} className="w-full h-full" />
					</div>
				) : (
					<Link
						href={`${ADMIN_PAGES.USERS}/create`}
						className={clsx(styles['create-link'])}
						aria-label='Create a new user'
					>
						Create a new user
					</Link>
				)}

				{isPending ? (
					<div className={clsx(styles['skeleton-wrapper-search'])}>
						<SkeletonLoader count={1} className="w-full h-full" />
					</div>
				) : (
					<SearchField
						searchTerm={searchTerm}
						handleSearch={handleSearch}
						handleClear={handleClear}
					/>
				)}
			</div>
			{isPending ? (
				<SkeletonLoader count={10} className="w-full h-6 mb-3" />
			) : (
				<DashboardTable<IUsersTable>
					headerActions={['Edit', 'Delete']}
					columns={[
						{
							title: 'ID',
							dataIndex: 'id',
							render: record => record.id
						},
						{
							title: 'Creation date',
							dataIndex: 'createdAt',
							render: record => {
								return formatDate(record.createdAt) || 'No data';
							}
						},
						{
							title: 'Verified',
							dataIndex: 'verificationToken',
							render: record =>
								(record.verificationToken && (
									<LucideIcon name="UserRoundX" color="firebrick" />
								)) || <LucideIcon name="UserRoundCheck" color="green" />
						},
						{
							title: 'Avatar',
							dataIndex: 'avatarPath',
							render: record => (
								<Image
									alt="Avatar"
									src={
										record.avatarPath ||
										'/uploads/user-avatar/avatar-default.png'
									}
									width={50}
									height={50}
									objectFit="cover"
									className="w-[50px] h-[50px] object-cover rounded-full"
								/>
							)
						},
						{
							title: 'Name',
							dataIndex: 'name',
							render: record => record.name || 'No data'
						},
						{
							title: 'Email',
							dataIndex: 'email',
							render: record => record.email || 'No data'
						},
						{
							title: 'Role',
							dataIndex: 'rights',
							render: record =>
								record.rights.length > 1
									? record.rights?.join(', ')
									: record.rights || 'No data'
						}
					]}
					data={
						users?.map(({ id, ...user }) => ({
							id,
							createdAt: user.createdAt,
							verificationToken: user.verificationToken,
							name: user.name,
							email: user.email,
							avatarPath: user.avatarPath,
							rights: user.rights,
							editUrl: `${ADMIN_PAGES.USERS}/edit/${id}`,
							deleteHandler: () => {
								changeStatePopup();
								addIdInPopup(id);
							}
						})) || []
					}
				/>
			)}
			{isHasMore && (
				<ManageUsersShowMore setPage={setPage} loading={isPending} />
			)}
		</div>
	);
};

export default Users;
