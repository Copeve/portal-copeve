'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';

export function CookiesBanner() {
	const [showBanner, setShowBanner] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('cookies-consent') !== 'true') {
			setShowBanner(true);
		}
	}, []);

	function onAccept() {
		setShowBanner(false);
		localStorage.setItem('cookies-consent', 'true');
	}

	return (
		<Modal
			isOpen={showBanner}
			onRequestClose={() => setShowBanner(false)}
			shouldCloseOnOverlayClick={false}
			overlayClassName={'fixed bottom-0 left-0 right-0 bg-black z-50'}
			className={
				'absolute bottom-0 left-0 right-0 top-auto border-0 bg-transparent'
			}
			contentLabel="Aviso de Cookies"
		>
			<div
				className={
					'flex w-full flex-col items-center justify-center bg-white p-4 pb-6 pt-8 shadow-[0_35px_60px_15px_rgba(0,0,0,0.7)]'
				}
			>
				<span className={'text whitespace-pre-line text-center'}>
					{
						'Utilizamos apenas cookies essenciais para o funcionamento do site, sem eles o site não funcionará adequadamente.\nPara saber mais acesse nossa '
					}
					<Link
						className={'underline'}
						href={'/politica_de_privacidade'}
					>
						política de privacidade
					</Link>
					{'.'}
				</span>

				<button
					autoFocus
					className={
						'mouse-over mt-6 rounded bg-primary p-2 px-4 text-white outline-offset-4 outline-title_blue'
					}
					onClick={onAccept}
				>
					Entendi
				</button>
			</div>
		</Modal>
	);
}
