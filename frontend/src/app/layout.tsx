import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const inter = Open_Sans({ subsets: ['latin'] });

import { Footer } from './components/footer';
import { Header } from './components/header';
import { LadingSlider } from './components/landing-slider';
import { Spacer } from './components/spacer';
import { SideBar } from './components/side-menu/SideBar';
import { InstagramButton } from './components/social-medias/instagram';
import { TwitterButton } from './components/social-medias/twitter';
import { FacebookButton } from './components/social-medias/facebook';
import { TiktokButton } from './components/social-medias/tiktok';
import { twMerge } from 'tailwind-merge';
import { Breadcrumbs } from './components/breadcrumbs';

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
					<Header />

					<LadingSlider />

					<Spacer />

					<div className="px-4">
						<div className="mx-auto flex max-w-web flex-1 gap-x-9">
							<div className="hidden lg:block">
								<SideBar />
								<SocialMediasSection />

								<Spacer />
							</div>
							<div className="flex flex-1 flex-col relative">
								<div className='h-0 w-0 absolute -top-32' id={'content-page-focus'} />
								<Breadcrumbs />
								{children}
							</div>
						</div>
					</div>

					<SocialMediasSection className="flex max-w-full flex-wrap justify-around gap-10 border-0 bg-[#f2f2f2] px-14 py-14 lg:hidden" />

					<Footer />
				</div>
			</body>
		</html>
	);
}

function SocialMediasSection({ className }: { className?: string }) {
	return (
		<div
			className={twMerge(
				'mt-10 flex justify-between gap-4 border-t border-icon_blue px-2 pt-8 dark:border-white',
				className
			)}
		>
			<InstagramButton
				className="h-10 w-10 border-icon_blue dark:border-white"
				iconColor="fill-icon_blue dark:fill-white"
			/>

			<TwitterButton
				className="h-10 w-10 border-icon_blue dark:border-white"
				iconColor="fill-icon_blue dark:fill-white"
			/>

			<FacebookButton
				className="h-10 w-10 border-icon_blue dark:border-white"
				iconColor="fill-icon_blue dark:fill-white"
			/>

			<TiktokButton
				className="h-10 w-10 border-icon_blue dark:border-white"
				iconColor="fill-icon_blue dark:fill-white"
			/>
		</div>
	);
}
