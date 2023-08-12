'use client'
import { useEffect } from 'react'

type Props = {
	error: Error
	reset: () => void
};

export default function Error({ error, reset }: Props) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div className='flex justify-center flex-col mt-10'>
			<h2 className='text-5xl text-center'>Parece que algo deu errado!</h2>

			<p className='text-center text-xl mt-4'>
				Tente carregar a página novamente{' '}
				<button className='text-title_blue underline underline-offset-2' onClick={() => reset()}>
					clicando aqui
				</button>
			</p>
		</div>
	)
}