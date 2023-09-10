'use client';
import { useCallback, useEffect, useState } from 'react';
import * as Label from '@radix-ui/react-label';

import { PageTitle } from '../components/page-title';
import { Select, SelectItem } from '../components/select';
import { Spacer } from '../components/spacer';
import { ContestBox } from '../components/contest-box';
import { api } from '../../api/api';
import { TStrapiImage } from '../../dto/strapi.dto';

type TContestGroupData = {
	nome: string;
	descricao: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
};

type TContestGroupResponse = {
	data: {
		id: number;
		attributes: TContestGroupData;
	}[];
};

type TContestData = {
	id: number;
	attributes: {
		nome: string;
		data_inicio: string;
		data_fim: string;
		logo: TStrapiImage;
	};
};

export default function PreviousContests() {
	const [groups, setGroups] = useState<TContestGroupResponse['data']>([]);
	const [contests, setContests] = useState<TContestData[]>([]);

	const [selectedGroup, setSelectedGroup] = useState('');
	const [selectedContest, setSelectedContest] = useState<TContestData>();

	useEffect(() => {
		loadInitialData();
	}, []);

	const loadInitialData = useCallback(async () => {
		const { data } = await api<TContestGroupResponse>({
			url: '/tipo-concursos'
		});

		setGroups(data);
	}, []);

	const loadContests = useCallback(async (groupId: string) => {
		const { data } = await api<{ data: TContestData[] }>({
			url: '/concursos',
			strapiQueryParams: [
				'populate[0]=logo',
				`filters[tipo_concurso][id][$eq]=${groupId}`
			]
		});

		setContests(data);
	}, []);

	const handleGroupSelection = useCallback(
		(id: string) => {
			setContests([]);
			setSelectedContest(undefined);
			setSelectedGroup(id);
			loadContests(id);
		},
		[loadContests]
	);

	const handleNameSelection = useCallback(
		(id: string) => {
			setSelectedContest(contests.find((e) => String(e.id) === id));
		},
		[contests]
	);

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
					{groups.map((item) => (
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
					{contests.map(({ id, attributes }) => (
						<SelectItem key={String(id)} value={String(id)}>
							{attributes.nome}
						</SelectItem>
					))}
				</Select>
			</div>

			{selectedContest && selectedGroup && (
				<ContestBox type={'2'} data={[selectedContest]} />
			)}

			<Spacer />
			<Spacer />
			<Spacer />
		</main>
	);
}
