import Link from "next/link";

export default function NotFound() {
	return (
		<main className="flex flex-col items-center">
			<h2 className="text-4xl font-semibold text-center mt-14">{'Página não Encontrada :('}</h2>
			<p className="text-center text-lg mt-2">Não foi possível encontrar a página solicitada</p>

			<Link className={'text-center mt-6 text-title_blue underline'} href={'/'}>Voltar para página inicial</Link>
		</main>
	)
}