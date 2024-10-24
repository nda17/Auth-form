import { INavItem } from '@/components/screens/admin/data/admin-navigation.interface'
import { ADMIN_PAGES } from '@/config/pages/admin.config'

export const navItems: INavItem[] = [
	{
		title: 'Statistics',
		link: ADMIN_PAGES.HOME
	},
	{
		title: 'Users',
		link: ADMIN_PAGES.USERS,
		option: ADMIN_PAGES.USER
	}
]
