'use client'
import { useProfile } from '@/app/hooks/useProfile'
import styles from '@/components/screens/profile/Profile.module.scss'
import CirclesLoader from '@/components/ui/circles-loader/CirclesLoader'
import { PUBLIC_PAGES } from '@/config/pages/public.config'
import authService from '@/services/auth/auth.service'
import { useMutation } from '@tanstack/react-query'
import { clsx } from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC, useTransition } from 'react'

const Profile: FC = () => {
	const { push } = useRouter()

	const { user, isLoading } = useProfile()

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

	if (isLoading) {
		return <CirclesLoader />
	}

	return (
		<div className={styles.wrapper}>
			{user.avatarPath ? (
				<Image
					className={styles.image}
					src={user.avatarPath}
					alt="Avatar"
					width={70}
					height={70}
				/>
			) : (
				<Image
					className={styles.image}
					src={'/avatar-default.png'}
					alt="Avatar"
					width={70}
					height={70}
				/>
			)}
			<h2 className={styles.subtitle}>Hello, {user.name || 'user'}</h2>
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
		</div>
	)
}

export default Profile
