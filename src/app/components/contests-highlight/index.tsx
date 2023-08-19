'use-client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { CustomArrowProps as ArrowProps } from 'react-slick';

import { Slider } from '../slider';
import { SeeMoreButton } from '../see-more-button';

type Concurso = {
	id: string;
	title: string;
	url: string;
	links: { id: string; url: string; title: string }[];
};

export function ContestsHighlight() {
	const [concursos, setConcursos] = useState<Concurso[]>([]);

	useEffect(() => {
		loadData();
	});

	const loadData = async () => {
		try {
			const concursosData = await axios.get<Concurso[]>('/api/concursos');
			setConcursos(concursosData.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Slider
			{...{
				speed: 600,
				autoplaySpeed: 2000,
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: true,
				autoplay: true,
				pauseOnHover: true,
				accessibility: true,
				prevArrow: <CustomArrow dir="prev" />,
				nextArrow: <CustomArrow dir="next" />,
				responsive: [
					{
						breakpoint: 1050,
						settings: { arrows: false, dots: true }
					},
					{
						breakpoint: 768,
						settings: {
							arrows: false,
							slidesToShow: 2,
							dots: true
						}
					},
					{
						breakpoint: 500,
						settings: {
							arrows: false,
							slidesToShow: 1,
							dots: true
						}
					}
				]
			}}
			className="max-w-[900px]"
		>
			{concursos.map((item) => (
				<div key={item.id} className="p-2">
					<div className="flex min-h-[380px] flex-1 flex-col gap-1 overflow-hidden border border-b-[12px] border-yellow_1 p-4 transition-colors duration-500 hover:border-title_blue">
						<Link
							prefetch={false}
							href={`/concursos/${item.url}`}
							className="mb-5 line-clamp-3 h-20 text-lg font-bold"
							title={item.title}
						>
							<h2>{item.title}</h2>
						</Link>

						<ol className="flex list-disc flex-col gap-6 pl-4">
							{item.links.slice(0, 2).map((itemLink) => (
								<li key={itemLink.id}>
									<Link
										prefetch={false}
										href={`/concursos/${itemLink.url}`}
										className="line-clamp-3 text-justify hover:underline"
									>
										{itemLink.title}
									</Link>
								</li>
							))}
						</ol>

						<SeeMoreButton
							href={`/concursos/${item.url}`}
							className="ml-auto mt-auto w-max pt-8 align-bottom"
						/>
					</div>
				</div>
			))}
		</Slider>
	);
}

type CustomArrowProps = { dir?: 'next' | 'prev' } & ArrowProps;

function CustomArrow({ dir = 'next', onClick }: CustomArrowProps) {
	return (
		<button
			onClick={onClick}
			className={`absolute ${
				dir === 'next' ? '-right-8' : '-left-8'
			} top-[45%]`}
		>
			{dir === 'next' ? (
				<MdChevronRight className={'h-10 w-10'} />
			) : (
				<MdChevronLeft className="h-10 w-10" />
			)}
		</button>
	);
}
