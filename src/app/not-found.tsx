import Link from 'next/link';

export default function NotFound() {
	return (
		<main className="flex flex-col items-center">
			<h2 className="mt-14 text-center text-4xl font-semibold">
				{'Página não Encontrada :('}
			</h2>
			<p className="mt-2 text-center text-lg">
				Não foi possível encontrar a página solicitada
			</p>

			<Link
				className={'mt-6 text-center text-title_blue underline'}
				href={'/'}
			>
				Voltar para página inicial
			</Link>
		</main>
	);
}
