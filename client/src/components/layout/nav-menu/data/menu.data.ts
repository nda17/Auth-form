import { IMenu } from '@/components/layout/nav-menu/desktop/menu/menu.interface';
import { PUBLIC_PAGES } from '@/config/pages/public.config';

export const staticMenu: IMenu = {
	items: [
		{
			icon: 'MdHomeWork',
			link: PUBLIC_PAGES.HOME,
			title: 'Home'
		},
		{
			icon: 'MdCheckCircle',
			link: PUBLIC_PAGES.FREE_CONTENT,
			title: 'Free content'
		},
		{
			icon: 'MdPaid',
			link: PUBLIC_PAGES.PREMIUM_CONTENT,
			title: 'Premium content'
		}
	]
};
