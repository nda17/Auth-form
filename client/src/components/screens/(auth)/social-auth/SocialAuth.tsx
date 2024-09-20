'use client'
import CirclesLoader from '@/components/ui/circles-loader/CirclesLoader'
import { saveTokenStorage } from '@/services/auth/auth.helper'
import { useRouter, useSearchParams } from 'next/navigation'
import { FC, useEffect } from 'react'

const SocialAuthPage: FC = () => {
	const searchParams = useSearchParams()
	const router = useRouter()

	useEffect(() => {
		const accessToken = searchParams.get('accessToken')
		if (accessToken) saveTokenStorage(accessToken)

		router.replace('/')
	}, [])

	return <CirclesLoader />
}

export default SocialAuthPage
