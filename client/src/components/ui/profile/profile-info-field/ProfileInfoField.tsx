import { IProfileInfoField } from '@/components/ui/profile/profile-info-field/profile-info-field.interface';
import styles from '@/components/ui/profile/profile-info-field/ProfileInfoField.module.scss';
import clsx from 'clsx';
import { FC } from 'react';

const ProfileInfoField: FC<IProfileInfoField> = ({ title, content }) => {
	return (
		<div className={clsx(styles['info-field-wrapper'])}>
			<p className={clsx(styles['info-field'])}>{title || 'No data'}</p>
			<p className={clsx(styles['info-field'])}>{content || 'No data'}</p>
		</div>
	);
};

export default ProfileInfoField;
