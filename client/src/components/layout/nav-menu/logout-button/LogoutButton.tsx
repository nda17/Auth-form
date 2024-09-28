import styles from '@/components/layout/nav-menu/logout-button/LogoutButton.module.scss'
import MaterialIcon from '@/components/ui/icons/MaterialIcon'
import authService from '@/services/auth/auth.service'
import { setAuthStatus } from '@/store/auth-status/auth-status.slice'
import { useMutation } from '@tanstack/react-query'
import clsx from 'clsx'
import { NextPage } from 'next'
import { MouseEvent } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

const LogoutButton: NextPage = () => {
	const { mutate: mutateLogout, isPending } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess() {
			toast.success('Logout')
		}
	})

	const isLogoutLoading = isPending

	const dispatch = useDispatch()

	const changeStateAuth = () => {
		dispatch(setAuthStatus(false))
	}

	const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		changeStateAuth()
		mutateLogout()
	}

	return (
		<button
			onClick={(e: any) => logoutHandler(e)}
			disabled={isLogoutLoading}
			className={clsx(styles['link-auth-button'])}
		>
			<MaterialIcon name="MdLogout" fill="red" />
			Logout
		</button>
	)
}

export default LogoutButton
