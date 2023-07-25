import { useEffect, useState } from 'react';
import * as ToggleUI from '@radix-ui/react-toggle';
import { IoMdContrast } from 'react-icons/io';

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
			className={`${className} aspect-square h-full transition-all`}
		>
			<IoMdContrast
				className="darK:fill-black m-auto fill-icon_blue md:fill-white"
				style={{ width: '35px', height: '35px' }}
			/>
		</ToggleUI.Root>
	);
};

export { ThemeSwitcher };
