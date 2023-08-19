'use client';
import Image from 'next/image';
import { Slider } from '../slider';

export function LadingSlider() {
	return (
		<Slider
			{...{
				dots: true,
				infinite: true,
				speed: 600,
				autoplaySpeed: 3000,
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				autoplay: true,
				pauseOnHover: true,
				accessibility: true,
				focusOnSelect: true,
				appendDots: (dots) => (
					<div>
						<ul className="-translate-y-12">{dots}</ul>
					</div>
				),
				customPaging: (i) => (
					<button>
						<div
							className="h-4 w-4 rounded-full border-2 border-yellow_1 transition-colors duration-300 hover:bg-yellow_1"
							aria-label={`Imagem Slide ${i + 1} m-0`}
						/>
					</button>
				)
			}}
			className="max-w-full"
		>
			{ladingImages.map((item) => (
				<div key={item.id}>
					<Image
						src={item.link}
						width={1920}
						height={564}
						alt={'Reitoria UFMG'}
						className="h-[564px] w-full min-w-[1080px] object-cover sm:min-w-[1920px]"
					/>
				</div>
			))}
		</Slider>
	);
}

const ladingImages = [
	{
		id: '1',
		link: 'https://live.staticflickr.com/7050/6990116376_e68aa898f3_k.jpg'
	},
	{
		id: '2',
		link: 'https://live.staticflickr.com/7102/7136201683_29e038f48d_b.jpg'
	},
	{
		id: '3',
		link: 'https://live.staticflickr.com/8165/7136205487_c02a251e51_b.jpg'
	}
];
