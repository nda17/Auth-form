import styles from '@/components/ui/sub-heading/SubHeading.module.scss';
import { ISubHeading } from '@/components/ui/sub-heading/sub-heading.interface';
import { NextPage } from 'next';

const SubHeading: NextPage<ISubHeading> = ({ text }) => {
	return <h2 className={styles.subHeading}>{text}</h2>;
};

export default SubHeading;
