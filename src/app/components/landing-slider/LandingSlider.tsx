'use client';
import Image from 'next/image';
import { Slider } from '../slider';
import { CarouselData } from '.';

type Props = {
	content?: CarouselData[];
};

export function LadingSliderClient({ content }: Props) {
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
			{content.map((item) => {
				const image = item.attributes.imagem.data[0].attributes;

				return (
					<div key={item.id}>
						<Image
							src={`https://copeve-backend-f46d9526ce84.herokuapp.com${image.url}`}
							width={1920}
							height={564}
							alt={image.alternativeText}
							className="h-[564px] w-full min-w-[1080px] object-cover sm:min-w-[1920px]"
						/>
					</div>
				);
			})}
		</Slider>
	);
}
