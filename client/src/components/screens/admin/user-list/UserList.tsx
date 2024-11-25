'use client'
import AdminNavigation from '@/components/screens/admin/admin-navigation/AdminNavigation'
import styles from '@/components/screens/admin/user-list/UserList.module.scss'
import CirclesLoader from '@/components/ui/circles-loader/CirclesLoader'
import Heading from '@/components/ui/heading/Heading'
import Pagination from '@/components/ui/pagination/Pagination'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import useUsersList from '@/hooks/useUsersList'
import clsx from 'clsx'
import { NextPage } from 'next'
import { useState } from 'react'

const UserList: NextPage = () => {
	const { data, isLoading } = useUsersList()

	//Pagination settings
	const [currentPage, setCurrentPage] = useState(1)
	const itemQuantity = 10
	const lastCardIndex = currentPage * itemQuantity
	const firstCardIndex = lastCardIndex - itemQuantity
	const activePage = data?.slice(firstCardIndex, lastCardIndex)
	const listPage = []
	for (let i = 1; i <= Math.ceil(data?.length / itemQuantity); i++) {
		listPage.push(i)
	}

	const prevPage = () => {
		if (currentPage !== 1) {
			setCurrentPage((prev) => prev - 1)
		} else {
			return
		}
	}

	const changeActivePage = (activePage: number) =>
		setCurrentPage(activePage)

	const nextPage = () => {
		if (currentPage !== Math.ceil(data?.length / itemQuantity)) {
			setCurrentPage((prev) => prev + 1)
		} else {
			return
		}
	}

	return (
		<div className={styles.wrapper}>
			<Heading text="Admin page" />
			<AdminNavigation />
			<SubHeading text="A list of users" />
			{isLoading ? (
				<CirclesLoader />
			) : data?.length ? (
				<>
					<div className={clsx(styles['wrapper-table'])}>
						<p
							className={clsx(
								styles['table-item'],
								styles['table-item-title'],
								'border-t',
								'border-l',
								'border-b'
							)}
						>
							ID:
						</p>
						<p
							className={clsx(
								styles['table-item'],
								styles['table-item-title'],
								'border-t',
								'border-l',
								'border-b'
							)}
						>
							Name:
						</p>
						<p
							className={clsx(
								styles['table-item'],
								styles['table-item-title'],
								'border-t',
								'border-l',
								'border-b'
							)}
						>
							Email:
						</p>
						<p
							className={clsx(
								styles['table-item'],
								styles['table-item-title'],
								'border-t',
								'border-l',
								'border-b'
							)}
						>
							Role:
						</p>
						<p
							className={clsx(
								styles['table-item'],
								styles['table-item-title'],
								'border-t',
								'border-r',
								'border-l',
								'border-b'
							)}
						>
							Date registered:
						</p>
					</div>

					{activePage.map((user) => (
						<div key={user.id} className={clsx(styles['wrapper-table'])}>
							<p
								className={clsx(
									styles['table-item'],
									'border-l',
									'border-b'
								)}
							>
								{user.id || 'No data'}
							</p>
							<p
								className={clsx(
									styles['table-item'],
									'border-l',
									'border-b'
								)}
							>
								{user.name || 'No data'}
							</p>
							<p
								className={clsx(
									styles['table-item'],
									'border-l',
									'border-b'
								)}
							>
								{user.email || 'No data'}
							</p>
							<p
								className={clsx(
									styles['table-item'],
									'border-l',
									'border-b'
								)}
							>
								{user.rights || 'No data'}
							</p>
							<p
								className={clsx(
									styles['table-item'],
									'border-l',
									'border-r',
									'border-b'
								)}
							>
								{'Date register'}
							</p>
						</div>
					))}

					<Pagination
						listPage={listPage}
						currentPage={currentPage}
						prevPage={prevPage}
						nextPage={nextPage}
						changeActivePage={changeActivePage}
					/>
				</>
			) : (
				<p>Not found!</p>
			)}
		</div>
	)
}

export default UserList
