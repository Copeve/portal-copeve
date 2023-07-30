'use client';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { navButtons } from '../../../configs/main-nav-menu';
import { NavButton } from './NavButton';

export const SideBar = () => {
	return (
		<NavigationMenu.Root>
			<NavigationMenu.List className='w-64 flex-col h-min gap-2 hidden lg:flex'>
				{navButtons.map((item) => (
					<NavigationMenu.Item key={item.id}>
						<NavButton
							key={item.id}
							href={item.link}
							text={item.title}
							className='bg-primary border-b-0'
						/>
					</NavigationMenu.Item>
				))}
			</NavigationMenu.List>
		</NavigationMenu.Root>
	)
}