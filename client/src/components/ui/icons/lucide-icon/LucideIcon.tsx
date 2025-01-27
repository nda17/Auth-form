import { ILucideIcon } from '@/components/ui/icons/lucide-icon/lucide-icon.interface';
import { icons } from 'lucide-react';
import { NextPage } from 'next';

const LucideIcon: NextPage<ILucideIcon> = ({
	name,
	fill = 'transparent',
	className
}) => {
	const IconComponent = icons[name];
	const DefaultIcon = icons['GripVertical'];

	return icons[name] ? (
		<IconComponent fill={fill} className={className} />
	) : (
		<DefaultIcon />
	);
};

export default LucideIcon;
