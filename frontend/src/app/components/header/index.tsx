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
		<header className="sticky top-0 z-40 flex w-full flex-wrap-reverse bg-white lg:bg-primary mG:dark:bg-black drop-shadow-lg lg:drop-shadow-none">
			<SideMenuMobile />

			<div className="max-w-web flex w-full flex-wrap items-center lg:flex-1 mx-auto md:px-4 bg-primary dark:bg-black ">
				<a
					href={'/'}
					className="flex py-[6px] h-full lg:py-[18px] w-full gap-x-4 items-center mG:w-auto md:px-0 px-4 mr-auto"
				>
					<div className="lg:h-11 lg:w-[46px] h-[25px] w-[25px]">
						<Image
							src="/logo/logo-ufmg.png"
							height={48}
							width={48}
							className="h-full w-full"
							alt="Lôgo UFMG"
						/>
					</div>

					<Separator
						className="bg-white h-full max-h-6 lg:max-h-11"
						decorative
						orientation="vertical"
					/>

					<h1 className="font-bold text-white text-sm whitespace-pre-line lg:text-lg max-w-[210px]">
						{'Comissão Permanente do Vestibular'}
					</h1>
				</a>

				<div className='flex mG:h-full gap-2 lg:gap-4 pr-8 lg:pr-4 mG:static absolute bottom-0 right-0'>
					<Link
						href={'/'}
						prefetch={false}
						className="text-[0px] lg:text-sm aspect-square mG:aspect-auto transition-all hover:brightness-75 h-12 mG:h-full text-white flex flex-col items-center justify-center gap-y-2"
					>
						<MdOutlineAccessibilityNew
							className="darK:fill-black fill-icon_blue mG:fill-white w-[25px] h-[25px] border-2 mG:border-white border-icon_blue rounded-full p-px"
						/>
						Acessibilidade
					</Link>

					<ThemeSwitcher className="hover:brightness-75 h-12 text-[0px] lg:text-sm mG:h-full aspect-square" />

					<Link
						href={'/'}
						prefetch={false}
						className="text-[0px] lg:text-sm aspect-square mG:aspect-auto transition-all hover:brightness-75 h-12 mG:h-full text-white lg:flex flex-col items-center justify-center gap-y-2 text-center hidden"
					>
						{'Mapa do site'}
					</Link>

					<div className='relative my-auto'>
						<input type="search" placeholder='Buscar por' className='w-80 rounded-full py-3 pr-16 pl-5 placeholder:text-lg text-sm hidden lg:block' />

						<button className='lg:absolute lg:right-4 lg:top-0 h-full'>
							<HiSearch
								className="fill-icon_blue mG:fill-white lg:fill-icon_blue w-[30px] h-[30px]"
							/>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
