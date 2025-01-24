import { IShowMoreButton } from '@/components/ui/form-elements/universal-elements/show-more-button/show-more-button.interface';
import styles from '@/components/ui/form-elements/universal-elements/show-more-button/ShowMoreButton.module.scss';
import { NextPage } from 'next';

const ShowMoreButton: NextPage<IShowMoreButton> = ({
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
