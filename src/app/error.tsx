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
		<div className="my-16 flex flex-col justify-center">
			<h2 className="text-center text-3xl">
				Parece que algo deu errado!
			</h2>

			<p className="mt-4 text-center text-lg">
				Tente recarregar a página{' '}
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
