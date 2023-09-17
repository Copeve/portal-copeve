'use client';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { TCarouselData } from '.';
import { Carousel } from 'react-responsive-carousel';
import {
	AnimationHandler,
	AnimationHandlerResponse
} from 'react-responsive-carousel/lib/ts/components/Carousel/types';
import { twJoin } from 'tailwind-merge';
import { usePathname } from 'next/navigation';

type Props = {
	content?: TCarouselData[];
};

export function LadingSliderClient({ content }: Props) {
	const pathname = usePathname();

	return (
		<Carousel
			infiniteLoop
			showStatus={false}
			stopOnHover
			autoPlay
			interval={4000}
			animationHandler={fadeAnimationHandler}
			transitionTime={800}
			showThumbs={false}
			swipeable={false}
			showArrows={false}
			className={pathname !== '/' && 'hidden'}
			renderIndicator={(onClick, isSelected, index) => (
				<button
					onClick={onClick}
					aria-label={`Imagem do slide ${index + 1}`}
					className={twJoin(
						'mx-2 h-4 w-4 rounded-full border-2 border-yellow_1 text-[0px] transition-colors duration-300 hover:bg-yellow_1',
						isSelected && 'bg-yellow_1'
					)}
				>
					{index}
				</button>
			)}
		>
			{content.map((item) => {
				const image = item.attributes.imagem.data[0].attributes;
				const displayedImage = image.formats.large;

				return (
					<Image
						key={item.id}
						src={`${process.env.NEXT_PUBLIC_API_URL}${image.url}`}
						width={displayedImage.width}
						height={displayedImage.height}
						alt={image.alternativeText}
						className="max-h-[500px] w-full object-cover"
					/>
				);
			})}
		</Carousel>
	);
}

const fadeAnimationHandler: AnimationHandler = (
	props,
	state
): AnimationHandlerResponse => {
	const transitionTime = `${props.transitionTime}ms`;
	const transitionTimingFunction = 'ease-in-out';

	let slideStyle: React.CSSProperties = {
		position: 'absolute',
		display: 'block',
		zIndex: 0,
		minHeight: '100%',
		opacity: 0,
		top: 0,
		right: 0,
		left: 0,
		bottom: 0,
		transitionTimingFunction: transitionTimingFunction,
		msTransitionTimingFunction: transitionTimingFunction,
		MozTransitionTimingFunction: transitionTimingFunction,
		WebkitTransitionTimingFunction: transitionTimingFunction,
		OTransitionTimingFunction: transitionTimingFunction
	};

	if (!state.swiping) {
		slideStyle = {
			...slideStyle,
			WebkitTransitionDuration: transitionTime,
			MozTransitionDuration: transitionTime,
			OTransitionDuration: transitionTime,
			transitionDuration: transitionTime,
			msTransitionDuration: transitionTime
		};
	}

	return {
		slideStyle,
		selectedStyle: {
			...slideStyle,
			opacity: 1,
			position: 'relative'
		},
		prevStyle: { ...slideStyle }
	};
};
