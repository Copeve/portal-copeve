type Props = {
	sectionLabel: string;
};

function EmptySectionMessage({ sectionLabel }: Props) {
	return <span>Não há {sectionLabel} para o concurso.</span>;
}

export { EmptySectionMessage };
