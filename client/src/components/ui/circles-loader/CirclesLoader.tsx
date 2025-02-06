import styles from '@/components/ui/circles-loader/CirclesLoader.module.scss';
import clsx from 'clsx';
import { FC } from 'react';

const CirclesLoader: FC = () => {
	return <div className={clsx(styles['circles-loader'])}></div>;
};

export default CirclesLoader;
