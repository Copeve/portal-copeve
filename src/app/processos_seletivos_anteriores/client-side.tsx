'use client';
import { useCallback, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import * as Label from '@radix-ui/react-label';

import { TContestData, TContestGroupResponse } from './page';
import { PageTitle } from '../components/page-title';
import { Select, SelectItem } from '../components/select';
import { Spacer } from '../components/spacer';
import { ContestBox } from '../components/contest-box';

type Props = {
	groups: TContestGroupResponse[];
	contests: TContestData[];
};

export function PreviousContestsClientSide({ groups, contests }: Props) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const [selectedGroup, setSelectedGroup] = useState(
		searchParams.get('grupo')
	);
	const [selectedName, setSelectedName] = useState(searchParams.get('nome'));
	const [selectedContest, setSelectedContest] = useState<TContestData>(
		contests?.find((e) => String(e.id) === searchParams.get('nome'))
	);

	const handleGroupSelection = useCallback(
		(id: string) => {
			const current = new URLSearchParams(
				Array.from(searchParams.entries())
			);

			current.set('grupo', id);
			current.delete('nome');
			const search = current.toString();
			const query = search ? `?${search}` : '';

			setSelectedContest(undefined);
			setSelectedName('');
			setSelectedGroup(id);
			router.push(`${pathname}${query}`);
		},
		[router, searchParams, pathname]
	);

	const handleNameSelection = useCallback(
		(id: string) => {
			const current = new URLSearchParams(
				Array.from(searchParams.entries())
			);
			current.set('nome', id);
			const search = current.toString();
			const query = search ? `?${search}` : '';

			setSelectedName(id);
			setSelectedContest(contests.find((e) => String(e.id) === id));
			router.push(`${pathname}${query}`);
		},
		[contests, router, searchParams, pathname]
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
					defaultValue={selectedGroup}
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
					defaultValue={selectedName}
				>
					{contests.map(({ id, attributes }) => (
						<SelectItem key={String(id)} value={String(id)}>
							{attributes.nome}
						</SelectItem>
					))}
				</Select>
			</div>

			{selectedContest && selectedGroup && (
				<ContestBox
					layout={'2'}
					data={[selectedContest]}
					defaultValue={`item-${selectedContest.id}`}
				/>
			)}

			<Spacer />
			<Spacer />
			<Spacer />
		</main>
	);
}
