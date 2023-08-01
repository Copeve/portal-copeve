type NavButtons = {
	id: string;
	link: string;
	title: string;
};

export const navButtons: NavButtons[] = [
	{
		id: '1',
		link: '/',
		title: 'Início'
	},
	{
		id: '2',
		link: '/concursos/test-concurso',
		title: 'Concursos'
	},
	{
		id: '3',
		link: '/noticias',
		title: 'Calendário/Notícias'
	},
	{
		id: '4',
		link: '/contato',
		title: 'Contato'
	},
	{
		id: '5',
		link: '/processos-seletivos-anteriores',
		title: 'Processos Seletivos Anteriores'
	},
	{
		id: '6',
		link: '/a-copeve',
		title: 'A COPEVE'
	},
	{
		id: '7',
		link: 'https://ufmg.br/',
		title: 'A UFMG'
	}
];
