import * as SeparatorUI from '@radix-ui/react-separator';
import { twMerge } from 'tailwind-merge';
type Props = SeparatorUI.SeparatorProps;

const Separator = ({ className, ...props }: Props) => {
	return (
		<SeparatorUI.Root
			className={twMerge(
				'data-[orientation=horizontal]:h-[2px] data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-[2px]',
				className
			)}
			{...props}
		/>
	);
};

export { Separator };
