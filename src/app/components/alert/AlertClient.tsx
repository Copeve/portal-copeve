'use client';
import { useEffect, useState, useCallback } from 'react';
import Modal from 'react-modal';
import { RawToMarkdown } from '../react-markdown';
import { TAlert } from './index';
import Link from 'next/link';

type Props = {
	alertData: TAlert;
};

export const AlertClient = ({ alertData }: Props) => {
	const [modalIsOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (sessionStorage.getItem(`alert-${alertData.id}`) !== 'dismiss') {
			setIsOpen(true);
		}
	}, [alertData]);

	const closeAlert = useCallback(() => {
		sessionStorage.setItem(`alert-${alertData.id}`, 'dismiss');
		setIsOpen(false);
	}, [alertData]);

	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeAlert}
			preventScroll={true}
			shouldCloseOnOverlayClick={false}
			overlayClassName={
				'bg-black bg-opacity-50 dark:bg-opacity-50 dark:bg-white fixed inset-0'
			}
			className={
				'absolute bottom-auto left-[50%] right-auto top-1/2 -mr-[50%] max-w-[95%] -translate-x-1/2 -translate-y-1/2 border-0 bg-transparent md:min-w-[400px] md:max-w-[760px]'
			}
			contentLabel="Alerta!"
		>
			<div className="flex w-full flex-col rounded border-2 border-yellow_1 bg-white p-2 pb-4 opacity-100 dark:border-white dark:bg-black">
				<div className="flex justify-between border-b border-slate-500 px-4 pb-2">
					<h1 className="text-lg font-semibold">Aviso</h1>
					<button
						className="aspect-square h-10 w-10 rounded text-3xl transition-colors hover:bg-zinc-100"
						onClick={closeAlert}
						aria-label="Fechar alerta"
					>
						&#x00d7;
					</button>
				</div>

				<div className="p-4 pt-0">
					<RawToMarkdown
						text={alertData.attributes.alerta}
						components={{
							a({ children, ...props }) {
								return (
									<a onClick={closeAlert} {...props}>
										{children}
									</a>
								);
							}
						}}
					/>
				</div>

				<div className="flex justify-center">
					{alertData.attributes.url_saiba_mais && (
						<Link
							prefetch={false}
							href={alertData.attributes.url_saiba_mais}
							onClick={closeAlert}
							className="py-4 text-title_blue underline transition-all hover:brightness-90"
						>
							Saiba Mais
						</Link>
					)}
				</div>
			</div>
		</Modal>
	);
};
