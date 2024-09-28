import styles from '@/components/ui/circles-loader/CirclesLoader.module.scss'
import clsx from 'clsx'
import { NextPage } from 'next'

const CirclesLoader: NextPage = () => {
	return (
		<div className={clsx(styles['circles-loader'])}>
			<div className={clsx(styles['circle-green'])}></div>
			<div className={clsx(styles['circle-red'])}></div>
		</div>
	)
}

export default CirclesLoader
