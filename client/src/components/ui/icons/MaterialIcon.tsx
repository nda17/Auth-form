import { IMaterialIcon } from '@/components/ui/icons/material-icon.interface'
import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

const MaterialIcon: FC<IMaterialIcon> = ({ name, fill = 'gray' }) => {
	const IconComponent = MaterialIcons[name]

	return MaterialIcons[name] ? (
		<IconComponent fill={fill} />
	) : (
		<MaterialIcons.MdDragIndicator />
	)
}

export default MaterialIcon
