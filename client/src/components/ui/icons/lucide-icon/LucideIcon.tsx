import { ILucideIcon } from '@/components/ui/icons/lucide-icon/lucide-icon.interface';
import { icons } from 'lucide-react';
import { FC } from 'react';

const LucideIcon: FC<ILucideIcon> = ({
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
