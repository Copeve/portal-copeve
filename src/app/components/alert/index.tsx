'use client';
import { useState, useEffect, useCallback } from 'react';
import Modal from 'react-modal';
import { api } from '../../../api/api';

export const Alert = () => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [message, setMessage] = useState('');

	useEffect(() => {
		const alertDismiss = sessionStorage.getItem('alert');

		if (alertDismiss === 'dismiss') {
			return;
		}

		api<{
			data: {
				id: number;
				attributes: {
					alerta: string;
				};
			};
		}>({
			url: '/alerta',
			fetchOptions: {
				cache: 'no-cache'
			}
		})
			.then(({ data }) => {
				if (data) {
					setIsOpen(true);
					setMessage(data.attributes.alerta);
				}
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	const closeAlert = useCallback(() => {
		sessionStorage.setItem('alert', 'dismiss');
		setIsOpen(false);
	}, []);

	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeAlert}
			preventScroll={true}
			shouldCloseOnOverlayClick={false}
			style={{
				overlay: {
					backgroundColor: '#00000050'
				},
				content: {
					top: '50%',
					left: '50%',
					right: 'auto',
					bottom: 'auto',
					marginRight: '-50%',
					transform: 'translate(-50%, -50%)',
					border: 0,
					backgroundColor: 'transparent'
				}
			}}
			contentLabel="Alerta!"
		>
			<div className="flex min-w-[400px] flex-col rounded border-2 border-yellow_1 bg-white p-2 pb-4">
				<div className="mb-4 flex justify-between border-b border-slate-500 px-4 py-4 pt-0">
					<h1 className="text-lg font-semibold">Aviso</h1>
					<button className="text-lg" onClick={closeAlert}>
						&#x00d7;
					</button>
				</div>

				<div className="p-4 pt-0">
					<span>{message}</span>
				</div>
			</div>
		</Modal>
	);
};
