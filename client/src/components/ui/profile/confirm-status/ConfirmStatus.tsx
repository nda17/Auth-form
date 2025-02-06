import { IConfirmStatus } from '@/components/ui/profile/confirm-status/confirm-status.interface';
import styles from '@/components/ui/profile/confirm-status/ConfirmStatus.module.scss';
import clsx from 'clsx';
import { FC } from 'react';

const ConfirmStatus: FC<IConfirmStatus> = ({ verificationToken }) => {
	return (
		<div className={styles.wrapper}>
			{verificationToken ? (
				<p className={clsx(styles['info-required'])}>
					Confirmation is required!
				</p>
			) : (
				<p className={clsx(styles['info-not-required'])}>
					The profile is confirmed
				</p>
			)}
		</div>
	);
};

export default ConfirmStatus;
