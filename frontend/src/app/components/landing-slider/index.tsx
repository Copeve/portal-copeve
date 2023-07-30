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
			{new Array(3).fill('').map((_, index) => (
				<div key={String(index)}>
					<Image
						src={'/banner.jpg'}
						width={1920}
						height={410}
						alt={'Reitoria UFMG'}
						className="h-[564px] w-full min-w-[1080px] object-cover sm:min-w-[1920px]"
					/>
				</div>
			))}
		</Slider>
	)
}