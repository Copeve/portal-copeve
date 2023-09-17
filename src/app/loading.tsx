export default function Loading() {
	return (
		<div
			role="status"
			className="flex min-h-[500px] w-full max-w-web items-center justify-center"
		>
			<div
				aria-hidden="true"
				className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-title_blue"
			/>

			<span className="sr-only">Carregando...</span>
		</div>
	);
}
