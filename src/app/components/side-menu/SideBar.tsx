'use client';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { usePathname } from 'next/navigation';
import { navButtons } from '../../../configs/main-nav-menu';
import { NavButton } from './NavButton';

function getButtonHighlighted(pathname: string, link: string) {
	if (link === '/') {
		return pathname === '/';
	} else if (new RegExp(`^${link}`).test(pathname)) {
		return true;
	}

	return false;
}

export const SideBar = () => {
	const pathname = usePathname();

	return (
		<NavigationMenu.Root>
			<NavigationMenu.List className="hidden h-min w-64 flex-col gap-2 lg:flex">
				{navButtons.map((item) => {
					return (
						<NavigationMenu.Item key={item.id}>
							<NavButton
								prefetch={true}
								scroll={false}
								key={item.id}
								href={item.link}
								text={item.title}
								className={`border dark:border dark:border-white dark:bg-black ${getButtonHighlighted(pathname, item.link)
										? 'bg-secondary dark:bg-white dark:text-black'
										: 'bg-primary'
									}`}
							/>
						</NavigationMenu.Item>
					);
				})}
			</NavigationMenu.List>
		</NavigationMenu.Root>
	);
};
