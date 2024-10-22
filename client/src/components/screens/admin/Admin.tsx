'use client'
import styles from '@/components/screens/admin/Admin.module.scss'
import CirclesLoader from '@/components/ui/circles-loader/CirclesLoader'
import Heading from '@/components/ui/heading/Heading'
import Pagination from '@/components/ui/pagination/Pagination'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import useUsersList from '@/hooks/useUsersList'
import { NextPage } from 'next'
import { useState } from 'react'

const Admin: NextPage = () => {
	const { data, isLoading } = useUsersList()

	//Pagination settings
	const [currentPage, setCurrentPage] = useState(1)
	const itemQuantity = 4
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
			<SubHeading text="List users:" />
			{isLoading ? (
				<CirclesLoader />
			) : data?.length ? (
				<div>
					{activePage.map((user) => (
						<div key={user.id} className={styles.user}>
							{user.email}
						</div>
					))}
					<Pagination
						listPage={listPage}
						currentPage={currentPage}
						prevPage={prevPage}
						nextPage={nextPage}
						changeActivePage={changeActivePage}
					/>
				</div>
			) : (
				<p>Not found!</p>
			)}
		</div>
	)
}

export default Admin
