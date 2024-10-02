'use client'
import styles from '@/components/screens/premium-content/premium-content-item/PremiumContentItem.module.scss'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import usePremium from '@/hooks/usePremium'
import useProfile from '@/hooks/useProfile'
import { NextPage } from 'next'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const PremiumContentItem: NextPage = () => {
	const searchParams = useSearchParams()
	const id = searchParams.get('id') || undefined

	const { user } = useProfile()
	const isPremium = user?.isPremium

	const { data } = usePremium(isPremium)

	const isLoggedIn = useSelector(
		(state: any) => state.authStatus.isLoggedIn
	)

	useEffect(() => {}, [isLoggedIn, user])

	return (
		<div className={styles.wrapper}>
			<Heading text={`Premium content item # ${id}`} />

			{!isLoggedIn && !user && (
				<Link href="/login" className={styles.link}>
					Please login
				</Link>
			)}

			{isLoggedIn &&
				(data ? (
					<SubHeading
						text={`This is PREMIUM CONTENT # ${id}, you have access to this content.`}
					/>
				) : (
					<SubHeading
						text={
							'Sorry. To access PREMIUM CONTENT, please purchase a subscription.'
						}
					/>
				))}
		</div>
	)
}

export default PremiumContentItem
