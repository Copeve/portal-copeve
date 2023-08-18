'use client';
import { useCallback, useState } from 'react';
import * as Label from '@radix-ui/react-label';
import { addHours } from 'date-fns';

import { PageTitle } from '../components/page-title';
import { Select, SelectItem } from '../components/select';
import { Spacer } from '../components/spacer';
import { ContestBox, TContests } from '../components/contest-box';

export default function PreviousContests() {
	const [group, setGroup] = useState('');
	const [name, setName] = useState<TContests>();

	const handleNameSelection = useCallback((titulo: string) => {
		setName({
			titulo: titulo.substring(2),
			periodoInscricao: {
				inicio: new Date('2023-05-23'),
				fim: addHours(new Date(), 4)
			},
			imagem: 'https://live.staticflickr.com/7059/6990116854_1c36116afa_b.jpg',
			imagemAlt: 'Imagem do concurso'
		});
	}, []);

	return (
		<main>
			<PageTitle title="Processos Seletivos Anteriores" />

			<h2 className="mt-12 text-2xl">
				Selecione o grupo e o nome do processo seletivo
			</h2>

			<div className="mt-6 flex flex-col gap-1">
				<Label.Root className="ml-1" htmlFor="selectContestGroup">
					Selecione o grupo
				</Label.Root>

				<Select
					triggerProps={{
						'aria-label': 'Selecionar Grupo do Concurso',
						id: 'selectContestGroup',
						placeholder: 'Selecione o grupo...'
					}}
					onValueChange={setGroup}
				>
					{groups.map((item, idx) => (
						<SelectItem key={String(idx)} value={`${idx}-${item}`}>
							{item}
						</SelectItem>
					))}
				</Select>
			</div>

			<div className="mb-16 mt-6 flex flex-col gap-1">
				<Label.Root className="ml-1" htmlFor="selectContestName">
					Selecione o nome
				</Label.Root>

				<Select
					triggerProps={{
						'aria-label': 'Selecionar Grupo do Concurso',
						id: 'selectContestName',
						placeholder: 'Selecione o nome...'
					}}
					onValueChange={handleNameSelection}
				>
					{names.map((item, idx) => (
						<SelectItem key={String(idx)} value={`${idx}-${item}`}>
							{item}
						</SelectItem>
					))}
				</Select>
			</div>

			{name && group && <ContestBox type={'2'} data={[name]} />}

			<Spacer />
		</main>
	);
}

const groups = [
	'Centro Pedagógico',
	'COLTEC',
	'COLTEC - Cursos Subsequentes',
	'Concursos para Técnicos Administrativos UFMG',
	'Formação Intercultural para Educadores Indígenas',
	'Habilidades'
];

const names = [
	'Centro Pedagógico',
	'COLTEC',
	'COLTEC - Cursos Subsequentes',
	'Concursos para Técnicos Administrativos UFMG',
	'Formação Intercultural para Educadores Indígenas',
	'Habilidades'
];
