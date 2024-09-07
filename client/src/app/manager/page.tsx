import type { Metadata } from 'next'
import Manager from './Manager'

export const metadata: Metadata = {
	title: 'Manager'
}

const ManagerPage = () => {
	return <Manager />
}

export default ManagerPage
