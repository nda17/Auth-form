import { IFontAwesomeIcon } from '@/components/ui/icons/font-awesome-icon.interface';
import { FC } from 'react';
import * as FontAwesomeIcons from 'react-icons/fa';

const FontAwesomeIcon: FC<IFontAwesomeIcon> = ({
	name,
	fill = 'gray'
}) => {
	const IconComponent = FontAwesomeIcons[name];

	return FontAwesomeIcons[name] ? (
		<IconComponent fill={fill} />
	) : (
		<FontAwesomeIcons.FaEllipsisH />
	);
};

export default FontAwesomeIcon;
