import { NavButton } from './NavButton';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as Dialog from '@radix-ui/react-dialog';
import { navButtons } from '../../../configs/main-nav-menu';

const SideMenu = (): React.ReactElement => {
	return (
		<div>
			<Dialog.Root modal>
				<Dialog.Trigger asChild>
					<button
						className="group flex h-18 w-18 flex-col items-center justify-center gap-1 bg-white data-[state=open]:bg-secondary md:bg-secondary md:data-[state=closed]:opacity-[0.92] md:dark:bg-black"
						aria-label="Menu de navegação"
					>
						<Burger />
					</button>
				</Dialog.Trigger>

				<Dialog.Portal>
					<Dialog.Overlay className="fixed inset-0 top-36 bg-black opacity-0 transition-opacity data-[state=open]:opacity-50 md:top-18" />

					<Dialog.Content className="fixed bottom-0 left-0 top-36 bg-secondary focus:outline-none data-[state=closed]:animate-slideOut data-[state=open]:animate-slideIn md:top-18">
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
													className={
														'mouse-over p flex gap-1 border-b-2 border-white border-opacity-10 p-3 py-3 pl-5 pr-12 text-lg font-bold text-white'
													}
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
					'h-1 w-[26px] bg-icon_blue transition-transform duration-300 group-data-[state=open]:scale-x-0 md:bg-white'
				}
			/>
			<div
				className={
					'h-1 w-[26px] bg-icon_blue transition-transform duration-300 group-data-[state=open]:scale-x-0 md:bg-white'
				}
			/>
			<div
				className={
					'h-1 w-[26px] bg-icon_blue transition-transform duration-300 group-data-[state=open]:scale-x-0 md:bg-white'
				}
			/>
			<div
				className={
					'absolute h-1 w-[26px] bg-icon_blue transition-transform duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-white md:bg-white'
				}
			/>
			<div
				className={
					'absolute h-1 w-[26px] bg-icon_blue transition-transform duration-300 group-data-[state=open]:-rotate-45 group-data-[state=open]:bg-white md:bg-white'
				}
			/>
		</>
	);
};

export { SideMenu };
