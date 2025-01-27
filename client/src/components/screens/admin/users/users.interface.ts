import { IDashboardTableBaseData } from '@/components/ui/table/dashboard-table.types';
import { IUser } from '@/shared/types/user.types';

export interface IUsersTable
	extends Pick<
			IUser,
			| 'id'
			| 'createdAt'
			| 'verificationToken'
			| 'name'
			| 'email'
			| 'avatarPath'
			| 'rights'
		>,
		IDashboardTableBaseData {}
