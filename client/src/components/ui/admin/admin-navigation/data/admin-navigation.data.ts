import { INavItem } from '@/components/ui/admin/admin-navigation/admin-navigation.interface'
import { ADMIN_PAGES } from '@/config/pages/admin.config'

export const navItems: INavItem[] = [
	{
		title: 'Statistics',
		link: ADMIN_PAGES.HOME
	},
	{
		title: 'User-list',
		link: ADMIN_PAGES.USER_LIST
	}
]
