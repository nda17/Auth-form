import { IFontAwesomeIcon } from '@/components/ui/icons/font-awesome-icon.interface';
import { NextPage } from 'next';
import * as FontAwesomeIcons from 'react-icons/fa';

const FontAwesomeIcon: NextPage<IFontAwesomeIcon> = ({
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
