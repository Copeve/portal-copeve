import Image from 'next/image';
import { Separator } from '../separator';
import { RawToMarkdown } from '../react-markdown';
import { api } from '../../../api/api';
import Link from 'next/link';

type TFooterData = {
	id: 1;
	attributes: {
		nome: string;
		endereco: string;
		telefone: string;
		atendimento: string;
		direitos_autorais: string;
	};
};

export async function Footer() {
	const { data: footerData } = await api<{ data: TFooterData }>({
		url: '/rodape',
		fetchOptions: {
			next: {
				revalidate: 60 * 60 // atualiza os dados a cada 1 hora
			}
		}
	});

	return (
		<div className="flex flex-col items-center justify-center bg-gray_1 px-2 text-white">
			<div className="w-[1080px] max-w-full text-white">
				<div className="mb-8 flex flex-wrap items-center justify-center gap-14 px-4 pb-6 pt-12 text-inherit md:justify-between">
					<Image
						src={'/logo/logo-ufmg.svg'}
						width={431}
						height={185}
						alt={'Lôgo da UFMG'}
						className="w-36"
					/>

					<h2 className="text-center text-xl text-white">
						{footerData.attributes.nome}
					</h2>
				</div>

				<Separator
					orientation="horizontal"
					className="bg-white opacity-80"
				/>

				<div className="flex flex-col justify-center gap-5 pb-6 pt-5 text-inherit">
					<address
						aria-label="Endereço UFMG"
						className="mb-2 text-center text-lg not-italic text-inherit"
					>
						{footerData.attributes.endereco}
					</address>

					<p className="text-center text-sm text-inherit">
						{footerData.attributes.atendimento}
						{' · '}
						{footerData.attributes.telefone}
					</p>

					<Link
						className={'self-center underline'}
						href={'/politica_de_privacidade'}
					>
						política de privacidade
					</Link>

					<div className="mb-6 text-center text-sm">
						<RawToMarkdown
							text={footerData.attributes.direitos_autorais}
							className="text-white"
							components={{
								a({ children, ...props }) {
									return (
										<a
											className="font-semibold underline underline-offset-2"
											{...props}
										>
											{children}
										</a>
									);
								}
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
