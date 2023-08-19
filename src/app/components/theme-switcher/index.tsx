'use client';
import { useEffect, useState } from 'react';
import * as ToggleUI from '@radix-ui/react-toggle';
import { IoMdContrast } from 'react-icons/io';
import { twMerge } from 'tailwind-merge';

type Props = {
	className?: string;
};

const ThemeSwitcher = ({ className }: Props): React.ReactElement => {
	const [pressed, setPressed] = useState(false);

	useEffect(() => {
		if (pressed) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [pressed]);

	return (
		<ToggleUI.Root
			aria-label={'Habilitar modo escuro'}
			pressed={pressed}
			onPressedChange={setPressed}
			className={twMerge(
				'flex flex-col items-center justify-center gap-y-2 text-sm text-white',
				className
			)}
		>
			<IoMdContrast className="darK:fill-black h-[30px] w-[30px] fill-icon_blue mG:fill-white" />
			Contraste
		</ToggleUI.Root>
	);
};

export { ThemeSwitcher };
