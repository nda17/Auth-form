import { IUserFormHeading } from '@/components/screens/admin/users/(form)/user-form-heading/user-form-heading.interface';
import styles from '@/components/screens/admin/users/(form)/user-form-heading/UserFormHeading.module.scss';
import clsx from 'clsx';
import { NextPage } from 'next';

const UserFormHeading: NextPage<IUserFormHeading> = ({
	type,
	email
}: {
	type: string;
	email?: string;
}) => {
	switch (type) {
		case 'admin-create':
			return (
				<h2 className={clsx(styles['user-form-heading'])}>
					Create a new user
				</h2>
			);

		case 'admin-edit':
			return (
				<h2 className={clsx(styles['user-form-heading'])}>
					Edit "{email}"
				</h2>
			);

		case 'user-edit-profile':
			return (
				<h2 className={clsx(styles['user-form-heading'])}>
					Edit "{email}"
				</h2>
			);

		default:
			return (
				<h2 className={clsx(styles['user-form-heading'])}>User edit</h2>
			);
	}
};

export default UserFormHeading;
