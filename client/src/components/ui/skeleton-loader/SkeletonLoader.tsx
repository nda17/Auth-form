import clsx from 'clsx'
import { NextPage } from 'next'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader: NextPage<SkeletonProps> = ({
	className,
	...rest
}) => {
	return (
		<Skeleton
			{...rest}
			baseColor="#c2c2c2"
			highlightColor="#94938f"
			className={clsx(['rounded-lg', 'select-none'], className)}
		/>
	)
}

export default SkeletonLoader
