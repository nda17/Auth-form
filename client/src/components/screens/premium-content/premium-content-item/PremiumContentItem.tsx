'use client'
import styles from '@/components/screens/premium-content/premium-content-item/PremiumContentItem.module.scss'
import CirclesLoader from '@/components/ui/circles-loader/CirclesLoader'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import usePremium from '@/hooks/usePremium'
import useProfile from '@/hooks/useProfile'
import { NextPage } from 'next'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const PremiumContentItem: NextPage = () => {
	const searchParams = useSearchParams()
	const id = searchParams.get('id') || undefined
	const { user, isLoading: isLoadingProfile } = useProfile()
	const { data, isLoading: isLoadingPremium } = usePremium()

	return (
		<div className={styles.wrapper}>
			<Heading text={`Premium content item # ${id}`} />
			{isLoadingProfile || isLoadingPremium ? (
				<CirclesLoader />
			) : (
				user?.isLoggedIn &&
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
				))
			)}

			{!user?.isLoggedIn && (
				<Link href="/login" className={styles.link}>
					Please login
				</Link>
			)}
		</div>
	)
}

export default PremiumContentItem
