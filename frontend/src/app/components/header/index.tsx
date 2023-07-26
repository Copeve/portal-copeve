'use client';
import Image from 'next/image';
import { ThemeSwitcher } from '../theme-switcher';
import { SideMenu } from '../side-menu';
import { HiSearch } from 'react-icons/hi';
import { Separator } from '../separator';

export function Header() {
	return (
		<header className="sticky top-0 z-40 flex w-full flex-wrap-reverse bg-white md:bg-primary md:dark:bg-black">
			<SideMenu />

			<div className="min-h-18 flex h-18 w-full flex-wrap items-center md:flex-1">
				<a
					href={'/'}
					className="flex h-full w-full items-center bg-primary py-3 dark:bg-black md:w-auto"
				>
					<div className="flex h-full w-18 items-center justify-center">
						<Image
							src="/logo/logo-ufmg.png"
							width={48}
							height={48}
							className="h-[35px] w-[36.52px]"
							alt="Lôgo UFMG"
						/>
					</div>

					<Separator
						className="bg-white opacity-40"
						decorative
						orientation="vertical"
					/>

					<h1 className="pl-5 font-bold text-white">
						Comissão Permanente do Vestibular
					</h1>
				</a>

				<ThemeSwitcher className="ml-auto bg-white md:bg-primary md:hover:brightness-75 md:dark:bg-black" />

				<div className="h-full bg-white py-3 md:bg-primary md:dark:bg-black">
					<Separator
						className="bg-white opacity-40"
						decorative
						orientation="vertical"
					/>
				</div>

				<button className="aspect-square h-full bg-white transition-all md:bg-primary md:hover:brightness-75 md:dark:bg-black">
					<HiSearch
						className="darK:fill-black m-auto fill-icon_blue md:fill-white"
						style={{ width: '35px', height: '35px' }}
					/>
				</button>
			</div>
		</header>
	);
}
