'use client';
import ManageUsersShowMore from '@/components/screens/admin/user-list/ManageUsersShowMore';
import styles from '@/components/screens/admin/user-list/UserList.module.scss';
import useUserListQuery from '@/components/screens/admin/user-list/useUserListQuery';
import AdminActions from '@/components/ui/admin/admin-actions/AdminActions';
import AdminHeader from '@/components/ui/admin/admin-header/AdminHeader';
import AdminNavigation from '@/components/ui/admin/admin-navigation/AdminNavigation';
import AlertPopup from '@/components/ui/alert-popup/AlertPopup';
import CirclesLoader from '@/components/ui/circles-loader/CirclesLoader';
import Heading from '@/components/ui/heading/Heading';
import SubHeading from '@/components/ui/sub-heading/SubHeading';
import { ADMIN_PAGES } from '@/config/pages/admin.config';
import clsx from 'clsx';
import { NextPage } from 'next';

const UserList: NextPage = () => {
	const {
		users,
		isPending,
		searchTerm,
		deleteUser,
		setPage,
		isHasMore,
		handleClear,
		handleSearch
	} = useUserListQuery();

	const textPopup =
		'The data will be deleted without the possibility of recovery.';

	return (
		<div className={styles.wrapper}>
			<Heading text="Admin page" />
			<AlertPopup removeHandler={deleteUser} text={textPopup} />
			<AdminNavigation />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				handleClear={handleClear}
			/>
			<SubHeading text="A list of users" />
			{isPending ? (
				<CirclesLoader />
			) : users ? (
				<div className={clsx(styles['wrapper-table'])}>
					<div className={clsx(styles['row-table'])}>
						<p
							className={clsx(
								styles['column-item'],
								styles['column-item-title'],
								'border-t',
								'border-l',
								'border-b'
							)}
						>
							ID:
						</p>
						<p
							className={clsx(
								styles['column-item'],
								styles['column-item-title'],
								'border-t',
								'border-l',
								'border-b'
							)}
						>
							Name:
						</p>
						<p
							className={clsx(
								styles['column-item'],
								styles['column-item-title'],
								'border-t',
								'border-l',
								'border-b'
							)}
						>
							Email:
						</p>
						<p
							className={clsx(
								styles['column-item'],
								styles['column-item-title'],
								'border-t',
								'border-l',
								'border-b'
							)}
						>
							Verified:
						</p>
						<p
							className={clsx(
								styles['column-item'],
								styles['column-item-title'],
								'border-t',
								'border-l',
								'border-b'
							)}
						>
							Role:
						</p>
						<p
							className={clsx(
								styles['column-item'],
								styles['column-item-title'],
								'border-t',
								'border-l',
								'border-b'
							)}
						>
							Registration date:
						</p>
						<p
							className={clsx(
								styles['column-item'],
								styles['column-item-title'],
								'border-t',
								'border-r',
								'border-l',
								'border-b'
							)}
						>
							Actions:
						</p>
					</div>

					{users.map(user => (
						<div key={user.id} className={clsx(styles['row-table'])}>
							<p
								className={clsx(
									styles['column-item'],
									'border-l',
									'border-b'
								)}
							>
								{user.id || 'No data available'}
							</p>
							<p
								className={clsx(
									styles['column-item'],
									'border-l',
									'border-b'
								)}
							>
								{user.name || 'No data available'}
							</p>
							<p
								className={clsx(
									styles['column-item'],
									'border-l',
									'border-b'
								)}
							>
								{user.email || 'No data available'}
							</p>
							<p
								className={clsx(
									styles['column-item'],
									'border-l',
									'border-b'
								)}
							>
								{!user.verificationToken ? 'verified' : 'not verified'}
							</p>

							<p
								className={clsx(
									styles['column-item'],
									'border-l',
									'border-b'
								)}
							>
								{user.rights.length > 1
									? user.rights?.join(', ')
									: user.rights || 'No data available'}
							</p>
							<p
								className={clsx(
									styles['column-item'],
									'border-l',
									'border-b'
								)}
							>
								{user.createdAt.replace(/\T.*/, '') || 'No data available'}
							</p>
							<div
								className={clsx(
									styles['column-item'],
									styles['column-item-title'],
									'border-l',
									'border-r',
									'border-b',
									'flex',
									'justify-center',
									'items-center'
								)}
							>
								<AdminActions
									editUrl={`${ADMIN_PAGES.USER}/edit/${user.id}`}
									userId={user.id}
								/>
							</div>
						</div>
					))}
				</div>
			) : (
				<p>Not found!</p>
			)}

			{isHasMore && (
				<ManageUsersShowMore setPage={setPage} loading={isPending} />
			)}
		</div>
	);
};

export default UserList;
