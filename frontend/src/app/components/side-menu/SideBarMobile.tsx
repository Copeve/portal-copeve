'use client';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as Dialog from '@radix-ui/react-dialog';
import { navButtons } from '../../../configs/main-nav-menu';
import { NavButton } from './NavButton';

const SideMenuMobile = (): React.ReactElement => {
	return (
		<div>
			<Dialog.Root modal>
				<Dialog.Trigger asChild>
					<button
						className="group flex h-12 w-14 flex-col items-center justify-center gap-1 data-[state=open]:bg-secondary md:data-[state=closed]:opacity-[0.92] lg:hidden lg:dark:bg-black"
						aria-label="Menu de navegação"
					>
						<Burger />
					</button>
				</Dialog.Trigger>

				<Dialog.Portal>
					<Dialog.Overlay className="fixed inset-0 top-0 bg-black opacity-0 transition-opacity data-[state=open]:opacity-50 lg:hidden" />

					<Dialog.Content className="fixed bottom-0 left-0 top-[100px] bg-secondary focus:outline-none data-[state=closed]:animate-slideOut data-[state=open]:animate-slideIn lg:hidden">
						<ScrollArea.Root
							scrollHideDelay={200}
							className="h-full w-full overflow-hidden"
						>
							<ScrollArea.Viewport className="h-full w-full">
								<NavigationMenu.Root>
									<NavigationMenu.List>
										{navButtons.map((item) => (
											<NavigationMenu.Item key={item.id}>
												<NavButton
													href={item.link}
													text={item.title}
													prefetch={false}
												/>
											</NavigationMenu.Item>
										))}
									</NavigationMenu.List>
								</NavigationMenu.Root>
							</ScrollArea.Viewport>

							<ScrollArea.Scrollbar
								className="group flex w-3 touch-none select-none p-0.5"
								orientation="vertical"
							>
								<ScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-[#666] opacity-70 transition-opacity duration-300 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] hover:opacity-100" />
							</ScrollArea.Scrollbar>
						</ScrollArea.Root>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</div>
	);
};

const Burger = () => {
	return (
		<>
			<div
				className={
					'h-1 w-[26px] bg-icon_blue transition-transform duration-300 group-data-[state=open]:scale-x-0'
				}
			/>
			<div
				className={
					'h-1 w-[26px] bg-icon_blue transition-transform duration-300 group-data-[state=open]:scale-x-0'
				}
			/>
			<div
				className={
					'h-1 w-[26px] bg-icon_blue transition-transform duration-300 group-data-[state=open]:scale-x-0'
				}
			/>
			<div
				className={
					'absolute h-1 w-[26px] bg-icon_blue transition-transform duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-white'
				}
			/>
			<div
				className={
					'absolute h-1 w-[26px] bg-icon_blue transition-transform duration-300 group-data-[state=open]:-rotate-45 group-data-[state=open]:bg-white'
				}
			/>
		</>
	);
};

export { SideMenuMobile };
