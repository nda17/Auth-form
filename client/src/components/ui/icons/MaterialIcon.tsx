import { IMaterialIcon } from '@/components/ui/icons/material-icon.interface'
import { NextPage } from 'next'
import * as MaterialIcons from 'react-icons/md'

const MaterialIcon: NextPage<IMaterialIcon> = ({ name, fill = 'red' }) => {
	const IconComponent = MaterialIcons[name]

	return MaterialIcons[name] ? (
		<IconComponent fill={fill} className="w-5 h-5" />
	) : (
		<MaterialIcons.MdDragIndicator />
	)
}

export default MaterialIcon
