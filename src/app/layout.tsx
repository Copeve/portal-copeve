import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import './globals.css';

import { Footer } from './components/footer';
import { Header } from './components/header';
import { LandingSlider } from './components/landing-slider';
import { Spacer } from './components/spacer';
import { SideBar } from './components/side-menu/SideBar';
import { InstagramButton } from './components/social-medias/instagram';
import { TwitterButton } from './components/social-medias/twitter';
import { FacebookButton } from './components/social-medias/facebook';
import { TiktokButton } from './components/social-medias/tiktok';
import { Breadcrumbs } from './components/breadcrumbs';
import { TawkMessengerReact } from './components/tawk-messenger';
import { Alert } from './components/alert';
import { api } from '../api/api';
import { YoutubeButton } from './components/social-medias/youtube';

const inter = Open_Sans({ subsets: ['latin'] });

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
		<html lang="pt-BR">
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
				<Alert />

				<TawkMessengerReact
					propertyId="64dea69394cf5d49dc6b0dfe"
					widgetId="1h82rlcav"
				/>

				<div className="flex h-full min-h-screen flex-col bg-white dark:bg-black">
					<Header />
					<LandingSlider />

					<Spacer />

					<div className="px-4">
						<div className="mx-auto flex max-w-web flex-1 gap-x-9">
							<div className="hidden lg:block">
								<SideBar />
								<SocialMediasSection />

								<Spacer />
							</div>
							<div className="relative flex flex-1 flex-col">
								<div
									className="absolute -top-32 h-0 w-0"
									id={'content-page-focus'}
								/>
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

async function SocialMediasSection({ className }: { className?: string }) {
	const { data, error } = await api<{
		data: {
			id: string;
			attributes: {
				instagram: string | null;
				twitter: string | null;
				facebook: string | null;
				tiktok: string | null;
				site: string | null;
				youtube: string | null;
			};
		};
	}>({
		url: '/redes-social',
		fetchOptions: {
			next: {
				revalidate: 60 // revalida em 1 minuto
			}
		}
	});

	if (error) return <></>;

	const { attributes } = data;

	return (
		<div
			className={twMerge(
				'mt-10 flex justify-between gap-4 border-t border-icon_blue pt-4 dark:border-white',
				className
			)}
		>
			{attributes.youtube && (
				<YoutubeButton
					link={attributes.youtube}
					className="h-10 w-10 border-icon_blue dark:border-white"
					iconColor="fill-icon_blue dark:fill-white"
				/>
			)}

			{attributes.instagram && (
				<InstagramButton
					link={attributes.instagram}
					className="h-10 w-10 border-icon_blue dark:border-white"
					iconColor="fill-icon_blue dark:fill-white"
				/>
			)}

			{attributes.twitter && (
				<TwitterButton
					link={attributes.twitter}
					className="h-10 w-10 border-icon_blue dark:border-white"
					iconColor="fill-icon_blue dark:fill-white"
				/>
			)}

			{attributes.facebook && (
				<FacebookButton
					link={attributes.facebook}
					className="h-10 w-10 border-icon_blue dark:border-white"
					iconColor="fill-icon_blue dark:fill-white"
				/>
			)}

			{attributes.tiktok && (
				<TiktokButton
					link={attributes.tiktok}
					className="h-10 w-10 border-icon_blue dark:border-white"
					iconColor="fill-icon_blue dark:fill-white"
				/>
			)}
		</div>
	);
}
