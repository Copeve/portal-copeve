'use client';
import React from 'react';
import { Spacer } from '../components/spacer';
import * as Form from '@radix-ui/react-form';
import { twMerge } from 'tailwind-merge';
import { PageTitle } from '../components/page-title';

export default function Copeve() {
	return (
		<main className="w-full">
			<PageTitle title="Contato" />

			<Form.Root className="mt-10 flex flex-col gap-y-1 px-0 md:px-8">
				<FormField
					name="nome"
					label="Nome"
					type="text"
					required
					errors={[
						{
							id: 'error_nome',
							match: 'valueMissing',
							message: 'Por favor, preencha o campo "Nome"'
						}
					]}
				/>

				<FormField
					name="email"
					label="Email"
					type="email"
					required
					errors={[
						{
							id: 'error_email',
							match: 'valueMissing',
							message: 'Por favor, preencha o campo "Email"'
						}
					]}
				/>

				<FormField
					name="assunto"
					label="Assunto"
					type="text"
					required
					errors={[
						{
							id: 'error_subject',
							match: 'valueMissing',
							message: 'Por favor, preencha o campo "Assunto"'
						}
					]}
				/>

				<FormField
					name="mensagem"
					label="Mensagem"
					type="text"
					elementType="textarea"
					className="min-h-[200px]"
					required
					errors={[
						{
							id: 'error_message',
							match: 'valueMissing',
							message: 'Por favor, preencha o campo "Mensagem"'
						}
					]}
				/>

				<Form.Submit asChild>
					<button className="mouse-over mx-auto mt-2 w-min bg-primary px-7 py-2 text-lg font-semibold text-white">
						Enviar
					</button>
				</Form.Submit>
			</Form.Root>

			<Spacer />
		</main>
	);
}

type FormFieldProps = {
	name: string;
	label: string;
	type: string;
	elementType?: string;
	className?: string;
	required?: boolean;
	errors?: {
		id: string;
		match: Form.FormMessageProps['match'];
		message: string;
	}[];
};

function FormField({
	name,
	label,
	type,
	elementType = 'input',
	className,
	required,
	errors
}: FormFieldProps) {
	return (
		<Form.Field className={'relative flex flex-col'} name={name}>
			<Form.Label className="text-lg">{label}</Form.Label>
			<Form.Control asChild>
				{React.createElement(elementType, {
					className: twMerge(
						'border data-[invalid]:border-red-500 mb-6 h-10 w-full rounded-md py-2 px-4',
						className
					),
					type,
					required
				})}
			</Form.Control>
			{errors?.map((error) => (
				<Form.Message
					key={error.id}
					className="absolute bottom-0 text-sm text-red-500"
					match={error.match}
				>
					{error.message}
				</Form.Message>
			))}
		</Form.Field>
	);
}
