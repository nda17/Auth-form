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
			baseColor="#1F2125"
			highlightColor="#292A2E"
			className={clsx(['rounded-lg'], className)}
		/>
	)
}

export default SkeletonLoader
