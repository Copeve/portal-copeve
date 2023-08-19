'use client';
import { addHours } from 'date-fns';
import { PageTitle } from '../components/page-title';
import { Spacer } from '../components/spacer';
import { ContestBox, TContests } from '../components/contest-box';

const contestsData: TContests[] = [
	{
		titulo: 'Processo Seletivo Técnico em Linguagem de Sinais',
		periodoInscricao: {
			inicio: new Date('2023-05-23'),
			fim: addHours(new Date(), 4)
		},
		imagem: 'https://live.staticflickr.com/7099/7136201181_73d3a8926d_3k.jpg'
	},
	{
		titulo: 'Lorem ipsum - dolor sit (amet), consecteturadipisicing elit. Impedit obcaecati quibusdam reiciendis suscipit sunt libero iure vero ratione aliquid quidem nulla',
		periodoInscricao: {
			inicio: new Date('2023-05-23'),
			fim: addHours(new Date(), 4)
		},
		imagem: 'https://live.staticflickr.com/7059/6990116854_1c36116afa_b.jpg',
		imagemAlt: 'Imagem do concurso'
	},
	{
		titulo: 'Colégio Técnico 2024 - Cursos Subsequentes',
		periodoInscricao: {
			inicio: new Date('2023-05-23'),
			fim: addHours(new Date(), 4)
		},
		imagem: 'https://live.staticflickr.com/7101/6990120534_03ec7c28cb_b.jpg'
	},
	{
		titulo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit obcaecati quibusdam reiciendis suscipit sunt libero iure vero ratione aliquid quidem nulla velit repellat atque quod, totam minima fuga consequatur officiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit obcaecati quibusdam reiciendis suscipit sunt libero iure vero ratione aliquid quidem nulla velit repellat atque quod, totam minima fuga consequatur officiis!',
		periodoInscricao: {
			inicio: new Date('2023-05-23'),
			fim: addHours(new Date(), 4)
		}
	}
];

const Concursos = (): React.ReactElement => {
	return (
		<main>
			<PageTitle title="Concursos em Andamento" className="mb-14" />

			<ContestBox type={'1'} data={contestsData} />

			<Spacer />

			<ContestBox type={'2'} data={contestsData} />

			<Spacer />

			<div className="flex w-full justify-center">
				<button className="mouse-over bg-primary p-4 text-xl text-white">
					Carregar Mais
				</button>
			</div>

			<Spacer />
		</main>
	);
};

export default Concursos;
