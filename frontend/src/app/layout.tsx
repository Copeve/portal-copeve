import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const inter = Open_Sans({ subsets: ['latin'] });

import { Footer } from './components/footer';
import { Header } from './components/header';

export const metadata: Metadata = {
	title: 'Copeve: Comissão permanente do vestibular',
	description: 'Comissão permanente do vestibular'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					rel="stylesheet"
					type="text/css"
					charSet="UTF-8"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
				/>
			</head>
			<body className={inter.className}>
				<div className="flex h-full min-h-screen flex-col bg-white dark:bg-black">
					{/* Header */}
					<Header />

					{/* Main */}
					<div className="flex flex-1">{children}</div>

					<div className="h-18 bg-[#f2f2f2]"></div>
					{/* Footer */}
					<Footer />
				</div>
			</body>
		</html>
	);
}
