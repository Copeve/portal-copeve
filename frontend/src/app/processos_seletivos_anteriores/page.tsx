'use client';
import * as Label from '@radix-ui/react-label';
import { PageTitle } from '../components/page-title';
import { Select, SelectItem } from '../components/select';

export default function PreviousContests() {
	return (
		<main>
			<PageTitle title="Processos Seletivos Anteriores" />

			<h2 className="mt-12 text-2xl">
				Selecione o grupo e o nome do processo seletivo
			</h2>

			<div className='mt-6 flex flex-col gap-1'>
				<Label.Root className="ml-1" htmlFor="selectContestGroup">
					Selecione o grupo
				</Label.Root>

				<Select
					triggerProps={{
						'aria-label': "Selecionar Grupo do Concurso",
						id: 'selectContestGroup',
						placeholder: "Selecione o grupo..."
					}}
				>
					{
						groups.map((item, idx) => (
							<SelectItem
								key={String(idx)}
								value={`${idx}-${item}`}
							>
								{item}
							</SelectItem>
						))
					}
				</Select>
			</div>

			<div className='mt-6 flex flex-col gap-1'>
				<Label.Root className="ml-1" htmlFor="selectContestName">
					Selecione o nome
				</Label.Root>

				<Select
					triggerProps={{
						'aria-label': "Selecionar Grupo do Concurso",
						id: 'selectContestName',
						placeholder: "Selecione o nome..."
					}}
				>
					{
						names.map((item, idx) => (
							<SelectItem
								key={String(idx)}
								value={`${idx}-${item}`}
							>
								{item}
							</SelectItem>
						))
					}
				</Select>
			</div>
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
]

const names = [
	'Centro Pedagógico',
	'COLTEC',
	'COLTEC - Cursos Subsequentes',
	'Concursos para Técnicos Administrativos UFMG',
	'Formação Intercultural para Educadores Indígenas',
	'Habilidades'
]