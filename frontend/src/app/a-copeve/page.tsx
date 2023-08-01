import { Spacer } from "../components/spacer"

export default function Copeve() {
	return (
		<main className="flex flex-col gap-16">
			<h1 className="text-5xl">A COPEVE</h1>

			<Section
				title="História"
				text={'Em 1970, por determinação do Governo Federal, a UFMG instituiu o Vestibular Único, que uniformizava o Processo Seletivo para acesso aos cursos dessa Instituição. Durante alguns anos, esse Vestibular foi organizado por uma Comissão Técnica, até que, em 1988, se criou a Comissão Permanente do Vestibular (Copeve) da UFMG. Vinculada à Reitoria, a Copeve tornou-se, desde então, o órgão responsável pela determinação e execução de todas as atividades relativas ao Concurso Vestibular da UFMG, sempre em observância das diretrizes emanadas dos Órgãos de Deliberação Superior dessa Universidade.\n\nAtualmente, a Copeve é composta por um Conselho Acadêmico - constituído pelo Pró-Reitor de Graduação, que o preside, por um Coordenador Geral, por um Representante da Câmara de Graduação da Pró-Reitoria de Graduação da UFMG, por Representantes das Unidades Acadêmicas responsáveis pelas disciplinas cujas provas compõem o Concurso Vestibular da UFMG e por um representante da Faculdade de Educação, abrangendo, portanto, um total de 17 membros - e por um Conselho Curador - formado pelo Pró-Reitor de Graduação, que também o preside, pelo Coordenador Geral e por mais cinco membros.'} />

			<Section title={'Missão'}
				text={'A Copeve compete supervisionar a execução de todas as atividades relativas ao Concurso Vestibular da UFMG, em cumprimento às diretrizes emanadas dos Órgãos de Deliberação Superior dessa Universidade, bem como a quaisquer outros Concursos Públicos que lhe sejam confiados. Para tanto, essa Comissão disponibiliza uma estrutura constituída de mais de 10 mil pessoas - na maior parte, Professores, Funcionários ou Estudantes da UFMG.'}
			/>

			<Section
				title="Visão"
				text={'A Comissão Permanente do Vestibular (Copeve) constitui, no âmbito da UFMG, uma instância apta a atender, com presteza, competência e segurança às necessidades de realização de Concursos Públicos municipais, estaduais e federais.'}
			/>

			<Section
				title="O que faz"
				text={'Constituem competências da Copeve: a formação das equipes de trabalho necessárias - Elaboradores de Provas, Aplicadores, Seguranças e outras; a definição e discussão do Edital do Concurso e dos Programas para as provas; a realização do Programa de Isenção da Taxa do Vestibular (PITV); o processo de inscrição dos candidatos; a distribuição dos candidatos inscritos pelos locais - cidades e prédios - onde serão realizadas as provas; a emissão dos Comprovantes Definitivos de Inscrição; e a elaboração, diagramação e impressão das provas, entre outros procedimentos de igual importância. Além de atuar na composição da estrutura de pessoal requisitada, a Copeve responsabiliza-se, também, pela montagem da estrutura física que possibilite a realização do Vestibular da UFMG e de outros Concursos Públicos. Atualmente, para o Vestibular da UFMG, só em Belo Horizonte, são utilizados 29 prédios da Universidade e 83 prédios de outras Instituições de Ensino localizadas nessa cidade. No entanto as provas desse Concurso, na 1ª Etapa, são aplicadas, segundo o mesmo esquema, em outras 12 cidades do interior de Minas Gerais, o que, hoje, implica a utilização de mais 51 prédios situados nessas cidades.\n\nA par de todas essas atribuições, a Copeve ainda dá suporte à realização das atividades do Departamento de Registro e Controle Acadêmico (DRCA), quando do registro dos aprovados no Vestibular, bem como, depois de realizado o Concurso, se incumbe de proceder à análise dos resultados obtidos pelos candidatos em cada uma das provas feitas e pela elaboração de dados estatísticos a serem, posteriormente, analisados e discutidos, em especial, pelas Equipes Elaboradoras, para avaliação do trabalho por elas realizado; de providenciar a publicação de livros, por disciplina, com a resolução e comentários, elaborados por essas mesmas Equipes, das questões de todas as provas de cada ano; de proceder a uma avaliação ampla de todo o processo operacional - aplicação, segurança, processamento e serviços gerais - e de emitir um Relatório Final sobre o Concurso.\n\n Todas essas atividades constituem etapas de amplo processo, que, no caso específico do Vestibular da UFMG, começam a ser realizadas por volta do mês de abril e vão ser concluídas bem proximamente do mesmo mês do ano seguinte, quando tem início o processo do próximo Concurso.'}
			/>

			<Spacer />
		</main>
	)
}

function Section({ title, text }: { title: string, text: string }) {
	return (
		<section>
			<h2 className="text-2xl mb-4 font-medium">{title}</h2>
			<p className="whitespace-pre-line text-justify leading-7">
				{text}
			</p>
		</section>
	)
}