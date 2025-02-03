import { ILucideIcon } from '@/components/ui/icons/lucide-icon/lucide-icon.interface';
import { icons } from 'lucide-react';
import { NextPage } from 'next';

const LucideIcon: NextPage<ILucideIcon> = ({
	name,
	fill = 'transparent',
	color,
	className,
	size
}) => {
	const IconComponent = icons[name];
	const DefaultIcon = icons['GripVertical'];

	return icons[name] ? (
		<IconComponent
			fill={fill}
			color={color}
			className={className}
			size={size}
		/>
	) : (
		<DefaultIcon />
	);
};

export default LucideIcon;
