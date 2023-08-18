import Link from 'next/link';
import React from 'react';

type GalleryButtonProps = {
	href: string;
	children: React.ReactElement;
	title: string;
	color?: 'stroke' | 'fill';
};

export function GalleryButton({
	href,
	children,
	title,
	color = 'fill'
}: GalleryButtonProps) {
	return (
		<div className="flex w-full flex-1 flex-col items-center gap-4">
			<Link
				prefetch={false}
				href={href}
				className="group flex aspect-square w-36 max-w-full flex-1 items-center justify-center rounded-full border-4 border-yellow_1 transition-colors duration-500 hover:bg-yellow_1"
			>
				{React.cloneElement(children, {
					className: `transition-color h-16 w-16 duration-500 ${
						color === 'fill'
							? 'fill-icon_blue dark:fill-white group-hover:fill-white'
							: 'stroke-icon_blue dark:stroke-white group-hover:stroke-white'
					}`
				})}
			</Link>

			<h2 className="mx-auto text-lg text-gray_text dark:text-white lg:text-xl">
				{title}
			</h2>
		</div>
	);
}
