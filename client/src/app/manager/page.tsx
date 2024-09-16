import Manager from '@/components/screens/manager/Manager'
import type { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Manager content',
	description: 'Manager content page'
}

const ManagerPage: NextPage = () => {
	return <Manager />
}

export default ManagerPage
