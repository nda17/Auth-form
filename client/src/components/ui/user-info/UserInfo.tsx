import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader';
import styles from '@/components/ui/user-info/UserInfo.module.scss';
import { IUserInfo } from '@/components/ui/user-info/user-info.interface';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import Image from 'next/image';
import { FC } from 'react';

const UserInfo: FC<IUserInfo> = ({
	avatarPath,
	name,
	isLoading
}: IUserInfo) => {
	return (
		<div className={styles.wrapper}>
			{isLoading ? (
				<div className="w-[5rem] h-[5rem] rounded-full">
					<SkeletonLoader count={1} circle className="w-full h-full" />
				</div>
			) : avatarPath ? (
				<Image
					className={styles.image}
					src={avatarPath}
					alt="Avatar"
					width={70}
					height={70}
				/>
			) : (
				<Image
					className={styles.image}
					src={PUBLIC_PAGES.USER_AVATAR_DEFAULT}
					alt="Avatar"
					width={70}
					height={70}
				/>
			)}

			{isLoading ? (
				<div className="w-[10rem] h-5">
					<SkeletonLoader count={1} className="w-full h-full" />
				</div>
			) : (
				<h2 className={styles.subtitle}>{name || 'User'}</h2>
			)}
		</div>
	);
};

export default UserInfo;
