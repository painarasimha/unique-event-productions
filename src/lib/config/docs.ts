import type { NavItem } from '$lib/types/nav.ts';

type DocsConfig = {
	mainNav: NavItem[];
};

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: 'Home',
			href: '/'
		},
		{
			title: 'About Us',
			href: '/about-us'
		},
		{
			title: 'Services',
			href: '/services'
		},
		{
			title: 'Portfolio',
			href: '/portfolio'
		},
		{
			title: 'Contact Us',
			href: '/contact-us'
		}
	]
};
