'use client';
import { useEffect } from 'react';

type Props = {
	error: Error;
	reset: () => void;
};

export default function Error({ error, reset }: Props) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="mt-10 flex flex-col justify-center">
			<h2 className="text-center text-5xl">
				Parece que algo deu errado!
			</h2>

			<p className="mt-4 text-center text-xl">
				Tente carregar a página novamente{' '}
				<button
					className="text-title_blue underline underline-offset-2"
					onClick={() => reset()}
				>
					clicando aqui
				</button>
			</p>
		</div>
	);
}
