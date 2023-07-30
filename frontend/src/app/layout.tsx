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

					<LadingSlider />

					<Spacer />

					{/* Main */}
					<div className='px-4'>
						<div className="flex flex-1 max-w-web mx-auto gap-x-9">
							<div>
								<SideBar />

								<div className='border-t border-icon_blue hidden lg:flex mt-10 pt-8 gap-4 justify-between px-2'>

									<InstagramButton className='border-icon_blue h-10 w-10' iconColor='fill-icon_blue' />

									<TwitterButton className='border-icon_blue h-10 w-10' iconColor='fill-icon_blue' />

									<FacebookButton className='border-icon_blue h-10 w-10' iconColor='fill-icon_blue' />

									<TiktokButton className='border-icon_blue h-10 w-10' iconColor='fill-icon_blue' />
								</div>

							</div>
							{children}
						</div>
					</div>


					<div className='bg-[#f2f2f2] border-icon_blue flex lg:hidden py-14 gap-28 justify-around px-10 max-w-full flex-wrap'>

						<InstagramButton className='border-icon_blue h-10 w-10' iconColor='fill-icon_blue' />

						<TwitterButton className='border-icon_blue h-10 w-10' iconColor='fill-icon_blue' />

						<FacebookButton className='border-icon_blue h-10 w-10' iconColor='fill-icon_blue' />

						<TiktokButton className='border-icon_blue h-10 w-10' iconColor='fill-icon_blue' />
					</div>

					{/* Footer */}
					<Footer />
				</div>
			</body>
		</html>
	);
}
