import styles from '@/components/layout/nav-menu/logout-button/LogoutButton.module.scss'
import { ILogoutButton } from '@/components/layout/nav-menu/logout-button/logout-button.interface'
import MaterialIcon from '@/components/ui/icons/MaterialIcon'
import { PUBLIC_PAGES } from '@/config/pages/public.config'
import authService from '@/services/auth/auth.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import clsx from 'clsx'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { MouseEvent } from 'react'
import toast from 'react-hot-toast'

const LogoutButton: NextPage<ILogoutButton> = ({ setNavState }) => {
	const { replace } = useRouter()
	const queryClient = useQueryClient()

	const { mutate: mutateLogout, isPending: isLogoutPending } = useMutation(
		{
			mutationKey: ['logout'],
			mutationFn: () => authService.logout(),
			onSuccess() {
				toast.success('Logout')
				queryClient.clear()
				setNavState(false)
			}
		}
	)

	const logoutHandler = (e: MouseEvent) => {
		e.preventDefault()
		mutateLogout()
		replace(PUBLIC_PAGES.LOGIN)
	}

	return (
		<button
			onClick={logoutHandler}
			disabled={isLogoutPending}
			className={clsx(styles['link-auth-button'])}
		>
			<MaterialIcon name="MdLogout" fill="red" />
			Logout
		</button>
	)
}

export default LogoutButton
