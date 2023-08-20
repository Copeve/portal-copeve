'use client';
import { useCallback, useEffect, useState } from 'react';
import * as Label from '@radix-ui/react-label';

import { PageTitle } from '../components/page-title';
import { Select, SelectItem } from '../components/select';
import { Spacer } from '../components/spacer';
import { ContestBox, TContests } from '../components/contest-box';
import { api } from '../../api/api';

type ContestGroupData = {
	nome: string;
	descricao: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
};

type ContestGroupResponse = {
	data: {
		id: number;
		attributes: ContestGroupData;
	}[];
};

export default function PreviousContests() {
	const [group, setGroup] = useState<ContestGroupResponse['data']>([]);
	const [names, setName] = useState([]);

	const [selectedGroup, setSelectedGroup] = useState('');
	const [selectedName, setSelectedName] = useState('');

	useEffect(() => {
		loadInitialData();
	}, []);

	const loadInitialData = useCallback(async () => {
		const { data } = await api<ContestGroupResponse>('/tipo-concursos');

		setName(namesData);
		setGroup(data);
	}, []);

	const handleGroupSelection = useCallback((value: string) => {
		setSelectedGroup(value);
	}, []);

	const handleNameSelection = useCallback((value: string) => {
		setSelectedName(value);
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
					onValueChange={handleGroupSelection}
				>
					{group.map((item) => (
						<SelectItem
							key={String(item.id)}
							value={String(item.id)}
						>
							{item.attributes.descricao}
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

			{selectedName && selectedGroup ? (
				<ContestBox
					type={'2'}
					data={[
						{
							titulo: selectedName
						}
					]}
				/>
			) : (
				<>
					<Spacer />
					<Spacer />
					<Spacer />
				</>
			)}

			<Spacer />
		</main>
	);
}

const namesData = [
	'Centro Pedagógico',
	'COLTEC',
	'COLTEC - Cursos Subsequentes',
	'Concursos para Técnicos Administrativos UFMG',
	'Formação Intercultural para Educadores Indígenas',
	'Habilidades'
];
