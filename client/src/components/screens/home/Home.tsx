'use client'
import styles from '@/components/screens/home/Home.module.scss'
import { IHome } from '@/components/screens/home/home.interface'
import Heading from '@/components/ui/heading/Heading'
import MaterialIcon from '@/components/ui/icons/MaterialIcon'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import authService from '@/services/auth/auth.service'
import { useMutation } from '@tanstack/react-query'
import clsx from 'clsx'
import Link from 'next/link'
import { FC, MouseEvent, useState } from 'react'
import { toast } from 'react-hot-toast'

const Home: FC<IHome> = ({ isLoggedIn, isAdmin, isManager }) => {
	const [statusAuth, setStatusAuth] = useState(isLoggedIn)

	const { mutate: mutateLogout, isPending } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess() {
			toast.success('Logout')
			setStatusAuth(false)
		}
	})

	const isLogoutLoading = isPending

	const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		mutateLogout()
		setStatusAuth(isLoggedIn)
	}

	return (
		<div className={styles.wrapper}>
			<Heading text="Home page" />

			<SubHeading text="There are pages to check rights:" />

			<Link href="/free-content" className={clsx(styles['auth-button'])}>
				<MaterialIcon name="MdCheckCircle" fill="gray" />
				Free content
			</Link>

			<Link
				href="/premium-content"
				className={clsx(styles['auth-button'])}
			>
				<MaterialIcon name="MdPaid" fill="gray" />
				Premium content
			</Link>

			{!statusAuth ? (
				<Link href="/login" className={clsx(styles['auth-button'])}>
					<MaterialIcon name="MdLogout" fill="green" />
					Login
				</Link>
			) : (
				<>
					{isLoggedIn && (
						<Link href="/profile" className={clsx(styles['auth-button'])}>
							<MaterialIcon name="MdSettings" fill="blue" />
							Profile
						</Link>
					)}

					{isManager && (
						<Link href="/manager" className={clsx(styles['auth-button'])}>
							<MaterialIcon name="MdGroup" fill="green" />
							Manager
						</Link>
					)}

					{isAdmin && (
						<Link href="/admin" className={clsx(styles['auth-button'])}>
							<MaterialIcon name="MdOutlineLock" fill="green" />
							Admin
						</Link>
					)}

					<button
						onClick={(e: any) => logoutHandler(e)}
						disabled={isLogoutLoading}
						className={clsx(styles['auth-button'])}
					>
						<MaterialIcon name="MdLogout" fill="red" />
						Logout
					</button>
				</>
			)}
		</div>
	)
}

export default Home
