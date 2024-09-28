'use client'
import CirclesLoader from '@/components/ui/circles-loader/CirclesLoader'
import { saveTokenStorage } from '@/services/auth/auth.helper'
import { NextPage } from 'next'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const SocialAuthPage: NextPage = () => {
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
