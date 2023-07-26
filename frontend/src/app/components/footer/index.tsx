'use client';
import Image from 'next/image';
import { Separator } from '../separator';
import { FacebookButton } from '../social-medias/facebook';
import { TwitterButton } from '../social-medias/twitter';
import { TiktokButton } from '../social-medias/tiktok';
import { InstagramButton } from '../social-medias/instagram';

export function Footer() {
	return (
		<div className="flex flex-col items-center justify-center bg-gray_1 px-2 text-white">
			<div className="w-[1080px] max-w-full text-white">
				<div className="mb-8 flex flex-wrap items-center justify-center gap-14 px-4 pb-6 pt-12 text-inherit md:justify-between">
					<Image
						src={'https://ufmg.br/static/logo-ufmg.svg'}
						width={431}
						height={185}
						alt={'Lôgo da UFMG'}
						className="w-36"
					/>

					<section
						className="flex flex-col flex-wrap gap-2 text-inherit"
						aria-label="Redes Sociais"
					>
						<p className="text-2xl text-inherit">Redes Sociais</p>
						<div className="flex gap-2">
							<InstagramButton />

							<TwitterButton />

							<FacebookButton />

							<TiktokButton />
						</div>
					</section>
				</div>

				<Separator
					orientation="horizontal"
					className="bg-white opacity-80"
				/>

				<div className="flex flex-wrap justify-center gap-3 pb-6 pt-5 text-inherit md:justify-between">
					<address
						aria-label="Endereço UFMG"
						className="w-full text-center text-lg not-italic text-inherit"
					>
						Av. Antônio Carlos, 6627, Pampulha - Belo Horizonte - MG
						- CEP 31270-901
					</address>
					<p className="mb-6 text-center text-sm text-inherit">
						© 2023 Universidade Federal de Minas Gerais. Todos os
						direitos reservados.
					</p>
					<p className="text-center text-sm text-inherit">
						31270-901 · Fones: +55 (31) 3409-4408/4409
					</p>
				</div>
			</div>
		</div>
	);
}
