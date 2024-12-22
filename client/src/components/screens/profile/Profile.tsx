'use client'
import styles from '@/components/screens/profile/Profile.module.scss'
import CirclesLoader from '@/components/ui/circles-loader/CirclesLoader'
import Heading from '@/components/ui/heading/Heading'
import UserInfo from '@/components/ui/user-info/UserInfo'
import { PUBLIC_PAGES } from '@/config/pages/public.config'
import useUser from '@/hooks/useUser'
import authService from '@/services/auth/auth.service'
import { useMutation } from '@tanstack/react-query'
import { clsx } from 'clsx'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

const Profile: NextPage = () => {
	const { push } = useRouter()

	const { user, isLoading } = useUser()

	const [isPending, startTransition] = useTransition()

	const { mutate: mutateLogout, isPending: isLogoutPending } = useMutation(
		{
			mutationKey: ['logout'],
			mutationFn: () => authService.logout(),
			onSuccess() {
				startTransition(() => {
					push(PUBLIC_PAGES.LOGIN)
				})
			}
		}
	)

	const isLogoutLoading = isLogoutPending || isPending

	return (
		<div className={styles.wrapper}>
			<Heading text="Profile" />

			{isLoading ? (
				<CirclesLoader />
			) : (
				<>
					<UserInfo
						avatarPath={user?.avatarPath}
						name={user?.name}
						isLoading={isLoading}
					/>
					<p className={clsx(styles['info-field'])}>
						Email: {user.email}{' '}
						<i>
							(
							{user.verificationToken
								? 'Confirmation is required'
								: 'Confirmed'}
							)
						</i>
					</p>
					<p className={clsx(styles['info-field'])}>
						Role: {user.rights?.join(', ')}
					</p>
					<button
						onClick={() => mutateLogout()}
						disabled={isLogoutLoading}
						className={clsx(styles['logout-button'])}
					>
						{isLogoutLoading ? 'Wait...' : 'Logout'}
					</button>
				</>
			)}
		</div>
	)
}

export default Profile
