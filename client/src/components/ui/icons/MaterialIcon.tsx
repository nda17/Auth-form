import { IMaterialIcon } from '@/components/ui/icons/material-icon.interface'
import { NextPage } from 'next'
import * as MaterialIcons from 'react-icons/md'

const MaterialIcon: NextPage<IMaterialIcon> = ({
	name,
	fill = 'gray'
}) => {
	const IconComponent = MaterialIcons[name]

	return MaterialIcons[name] ? (
		<IconComponent fill={fill} />
	) : (
		<MaterialIcons.MdDragIndicator />
	)
}

export default MaterialIcon
