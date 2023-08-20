'use client';
import dynamic from 'next/dynamic';

const TawkMessengerReact = dynamic(
	() => import('@tawk.to/tawk-messenger-react'),
	{ ssr: false }
);

export { TawkMessengerReact };
