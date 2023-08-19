import { NextResponse } from 'next/server';

export async function GET() {
	return NextResponse.json([
		{
			id: '1',
			title: 'Processo Seletivo Técnico em Linguagem de Sinais',
			url: '/processo-seletivo-tecnico-em-linguagem-de-sinais',
			links: [
				{
					id: '1',
					url: '/processo-seletivo-tecnico-em-linguagem-de-sinais',
					title: 'Resultado do Processo de Isenção (publicado em 11/07/2023 às 21:22)'
				},
				{
					id: '2',
					url: '/processo-seletivo-tecnico-em-linguagem-de-sinais',
					title: 'Edital do Processo (publicado em 22/06/2023 às 15:47)'
				}
			]
		},
		{
			id: '2',
			title: 'Letras-Libras 2023',
			url: '/letras-libras-2023',
			links: [
				{
					id: '1',
					url: '/letras-libras-2023',
					title: 'Resultado Final (publicado em 07/07/2023 às 16:42)'
				},
				{
					id: '2',
					url: '/letras-libras-2023',
					title: 'Cadernos de Prova e Gabaritos (publicado em 26/06/2023 às 00:08)'
				}
			]
		},
		{
			id: '3',
			title: 'Letras-Libras 2023 - Transferência e Obtenção de Novo Título',
			url: '/letras-libras-2023-transferencia-e-obtencao-de-novo-titulo',
			links: [
				{
					id: '1',
					url: '/letras-libras-2023-transferencia-e-obtencao-de-novo-titulo',
					title: 'Resultado Final (publicado em 07/07/2023 às 16:42)'
				},
				{
					id: '2',
					url: '/letras-libras-2023-transferencia-e-obtencao-de-novo-titulo',
					title: 'Cadernos de Prova e Gabaritos (publicado em 26/06/2023 às 00:08)'
				},
				{
					id: '3',
					url: '/letras-libras-2023-transferencia-e-obtencao-de-novo-titulo',
					title: 'Comprovante Definitivo de Inscrição (publicado em 21/06/2023 às 15:56)'
				},
				{
					id: '4',
					url: '/letras-libras-2023-transferencia-e-obtencao-de-novo-titulo',
					title: 'Classificação da Primeira Etapa (publicado em 20/06/2023 às 21:32)'
				}
			]
		},
		{
			id: '4',
			title: 'Letras-Libras 2023',
			url: '/letras-libras-2023',
			links: [
				{
					id: '1',
					url: '/letras-libras-2023',
					title: 'Resultado Final'
				},
				{
					id: '2',
					url: '/letras-libras-2023',
					title: 'Cadernos de Prova'
				}
			]
		}
	]);
}
