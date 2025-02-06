import { IShowMoreButton } from '@/components/ui/form-elements/show-more-button/show-more-button.interface';
import styles from '@/components/ui/form-elements/show-more-button/ShowMoreButton.module.scss';
import { FC } from 'react';

const ShowMoreButton: FC<IShowMoreButton> = ({
	isLoading,
	onLoadMore
}) => {
	return (
		<button
			aria-label="Show more"
			onClick={onLoadMore}
			disabled={isLoading}
			className={styles.button}
		>
			{isLoading ? 'Wait...' : 'Show more'}
		</button>
	);
};

export default ShowMoreButton;
