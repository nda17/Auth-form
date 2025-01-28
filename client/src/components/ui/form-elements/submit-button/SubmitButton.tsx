import { ISubmitButton } from '@/components/ui/form-elements/submit-button/submit-button.interface';
import styles from '@/components/ui/form-elements/submit-button/SubmitButton.module.scss';
import { NextPage } from 'next';

const SubmitButton: NextPage<ISubmitButton> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button className={styles.button} {...rest}>
			{children}
		</button>
	);
};

export default SubmitButton;
