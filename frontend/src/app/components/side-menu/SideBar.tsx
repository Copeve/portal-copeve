'use client';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { usePathname } from 'next/navigation';
import { navButtons } from '../../../configs/main-nav-menu';
import { NavButton } from './NavButton';

export const SideBar = () => {
	const pathname = usePathname();

	return (
		<NavigationMenu.Root>
			<NavigationMenu.List className='w-64 flex-col h-min gap-2 hidden lg:flex'>
				{navButtons.map((item) => {
					return (
						<NavigationMenu.Item key={item.id}>
							<NavButton
								prefetch={false}
								key={item.id}
								href={item.link}
								text={item.title}
								className={`border-b-0 dark:bg-black dark:border dark:border-white ${new RegExp(`^${item.link}`).test(pathname) ? 'bg-secondary' : 'bg-primary'}`}
							/>
						</NavigationMenu.Item>
					)
				})}
			</NavigationMenu.List>
		</NavigationMenu.Root>
	)
}