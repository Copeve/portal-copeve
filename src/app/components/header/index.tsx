'use client';
import Image from 'next/image';
import { HiSearch } from 'react-icons/hi';
import { MdOutlineAccessibilityNew } from 'react-icons/md';

import { ThemeSwitcher } from '../theme-switcher';
import { Separator } from '../separator';
import { SideMenuMobile } from '../side-menu/SideBarMobile';
import Link from 'next/link';

export function Header() {
	return (
		<header className="sticky top-0 z-40 flex w-full flex-wrap-reverse bg-white drop-shadow-lg mG:dark:bg-black lg:bg-primary lg:drop-shadow-none">
			<SideMenuMobile />

			<div className="mx-auto flex w-full max-w-web flex-wrap items-center bg-primary dark:bg-black md:px-4 lg:flex-1 ">
				<a
					href={'/'}
					className="mr-auto flex h-full w-full items-center gap-x-4 px-4 py-[6px] mG:w-auto md:px-0 lg:py-[18px]"
				>
					<div className="h-[25px] w-[25px] lg:h-11 lg:w-[46px]">
						<Image
							src="/logo/logo-ufmg.png"
							height={48}
							width={48}
							className="h-full w-full"
							alt="Lôgo UFMG"
						/>
					</div>

					<Separator
						className="h-full max-h-6 bg-white lg:max-h-11"
						decorative
						orientation="vertical"
					/>

					<h1 className="max-w-[210px] whitespace-pre-line text-sm font-bold text-white lg:text-lg">
						{'Comissão Permanente do Vestibular'}
					</h1>
				</a>

				<div className="absolute bottom-0 right-0 flex gap-2 pr-8 mG:static mG:h-full lg:gap-4 lg:pr-4">
					<Link
						href={'/acessibilidade'}
						prefetch={false}
						className="flex aspect-square h-12 flex-col items-center justify-center gap-y-2 text-[0px] text-white transition-all hover:brightness-75 mG:aspect-auto mG:h-full lg:text-sm"
					>
						<MdOutlineAccessibilityNew className="darK:fill-black h-[25px] w-[25px] rounded-full border-2 border-icon_blue fill-icon_blue p-px mG:border-white mG:fill-white" />
						Acessibilidade
					</Link>

					<ThemeSwitcher className="aspect-square h-12 text-[0px] hover:brightness-75 mG:h-full lg:text-sm" />

					<Link
						href={'/mapa_do_site'}
						prefetch={false}
						className="hidden aspect-square h-12 flex-col items-center justify-center gap-y-2 text-center text-[0px] text-white transition-all hover:brightness-75 mG:aspect-auto mG:h-full lg:flex lg:text-sm"
					>
						{'Mapa do site'}
					</Link>

					<div className="relative my-auto">
						<input
							type="search"
							placeholder="Buscar por"
							className="hidden w-80 rounded-full py-3 pl-5 pr-16 text-sm placeholder:text-lg lg:block"
						/>

						<button className="h-full lg:absolute lg:right-4 lg:top-0">
							<HiSearch className="h-[30px] w-[30px] fill-icon_blue mG:fill-white lg:fill-icon_blue" />
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
