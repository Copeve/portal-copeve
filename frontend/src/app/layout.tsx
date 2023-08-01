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

					<div className='px-4'>
						<div className="flex flex-1 max-w-web mx-auto gap-x-9">
							<div className='lg:block hidden'>
								<SideBar />
								<SocialMediasSection />

								<Spacer />
							</div>
							{children}
						</div>
					</div>

					<SocialMediasSection className='bg-[#f2f2f2] flex lg:hidden justify-around gap-10 py-14 px-14 max-w-full flex-wrap border-0' />

					<Footer />
				</div>
			</body>
		</html>
	);
}

function SocialMediasSection({ className }: { className?: string }) {
	return (
		<div className={twMerge('border-t border-icon_blue dark:border-white flex mt-10 pt-8 gap-4 justify-between px-2', className)}>

			<InstagramButton className='border-icon_blue dark:border-white h-10 w-10' iconColor='fill-icon_blue dark:fill-white' />

			<TwitterButton className='border-icon_blue dark:border-white h-10 w-10' iconColor='fill-icon_blue dark:fill-white' />

			<FacebookButton className='border-icon_blue dark:border-white h-10 w-10' iconColor='fill-icon_blue dark:fill-white' />

			<TiktokButton className='border-icon_blue dark:border-white h-10 w-10' iconColor='fill-icon_blue dark:fill-white' />
		</div>
	)
}
