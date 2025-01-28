import ShowMoreButton from '@/components/ui/form-elements/show-more-button/ShowMoreButton';
import { Dispatch, SetStateAction } from 'react';

interface IManageUsersShowMore {
	loading: boolean;
	setPage: Dispatch<SetStateAction<number>>;
}

const ManageUsersShowMore = ({
	setPage,
	loading
}: IManageUsersShowMore) => {
	return (
		<ShowMoreButton
			isLoading={loading}
			onLoadMore={() => setPage(prev => prev + 1)}
		/>
	);
};

export default ManageUsersShowMore;
