'use client';
import Link from 'next/link';
import { IoIosArrowDropright } from 'react-icons/io';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { LuClipboardSignature } from 'react-icons/lu';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';

import { TwitterButton } from '../../components/social-medias/twitter';
import { FacebookButton } from '../../components/social-medias/facebook';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '../../components/accordion';
import { Spacer } from '../../components/spacer';

type Props = {
	params: { slug: string };
};

export default function Concursos({ params }: Props) {
	return (
		<main className="mx-auto w-full max-w-web">
			<h1 className="text-4xl ">
				{'Processo Seletivo Técnico em Linguagem de Sinais'}
			</h1>

			<ul className="my-8 mt-18 space-y-5">
				<li className="flex items-center gap-2 text-lg">
					<IoIosArrowDropright className="h-8 w-8 fill-title_blue" />{' '}
					<h2 className="flex items-center gap-2 text-xl">
						Período de inscrição:{' '}
						<strong className='font-semibold'>05 a 24 de julho de 2023</strong>
					</h2>
				</li>

				<li className="flex items-center gap-2 text-xl">
					<LiaExternalLinkAltSolid className="h-8 w-8 fill-title_blue" />{' '}
					<Link href={'/'} className="mouse-over underline underline-offset-2">
						Área do Candidato
					</Link>
				</li>
			</ul>

			<div className="mb-20 flex gap-2 mt-10">
				<TwitterButton
					className="flex gap-4 border-icon_blue dark:border-white"
					iconColor="fill-icon_blue dark:fill-white"
				/>
				<FacebookButton
					className="flex gap-4 border-icon_blue dark:border-white"
					iconColor="fill-icon_blue dark:fill-white"
				/>
			</div>

			<Accordion type="single" collapsible defaultValue="item-2">
				<AccordionItem value="item-1">
					<AccordionTrigger>Comunicados</AccordionTrigger>
					<AccordionContent>
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-2">
					<AccordionTrigger>Documentos e Editais</AccordionTrigger>
					<AccordionContent>
						<ol className="space-y-4 text-lg">
							{Array(5)
								.fill(1)
								.map((_, i) => (
									<li key={String(i)}>
										<Link
											href={'#'}
											prefetch={false}
											className="mouse-over flex items-center gap-2 underline underline-offset-4"
										>
											<AiOutlineFilePdf className="h-8 w-8 fill-yellow_1" />
											{i % 2 === 0
												? 'Edital do Processo (publicado em 22/06/2023 às 15:47)'
												: 'Resultado do Processo de Isenção (publicado em 11/07/2023 às 21:22)'}
										</Link>
									</li>
								))}
						</ol>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-3">
					<AccordionTrigger>Estatísticas</AccordionTrigger>
					<AccordionContent>
						Yes! You can animate the Accordion with CSS or
						JavaScript.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-4">
					<AccordionTrigger>Gabaritos</AccordionTrigger>
					<AccordionContent>
						Yes! You can animate the Accordion with CSS or
						JavaScript.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-5">
					<AccordionTrigger>Inscrições</AccordionTrigger>
					<AccordionContent>
						<Link
							href={'/'}
							className="ml-6 mt-2 flex items-center gap-2 underline"
						>
							<LuClipboardSignature className="h-5 w-5 stroke-yellow_1" />{' '}
							Clique aqui para se inscrever
						</Link>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-6">
					<AccordionTrigger>Resultados</AccordionTrigger>
					<AccordionContent>
						Yes! You can animate the Accordion with CSS or
						JavaScript.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-7">
					<AccordionTrigger>
						Textos e Livros Indicados
					</AccordionTrigger>
					<AccordionContent>
						Yes! You can animate the Accordion with CSS or
						JavaScript.
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<Spacer />
		</main>
	);
}
