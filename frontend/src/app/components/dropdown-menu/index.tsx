'use client';
import * as DropdownMenuUI from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react';

type Props = {
	children?: React.ReactNode;
	title?: string;
	align?: DropdownMenuUI.MenuContentProps['align'];
};

const DropdownMenu = ({ children, title, align = 'start' }: Props) => {
	return (
		<DropdownMenuUI.Root>
			<DropdownMenuUI.Trigger className="flex h-full items-center gap-4 rounded-md border px-4 ">
				{title}
				<ChevronDown className="h-5 w-5" />
			</DropdownMenuUI.Trigger>

			<DropdownMenuUI.Portal>
				<DropdownMenuUI.Content
					sideOffset={5}
					align={align}
					className="min-w-[150px] rounded-lg border-2"
				>
					{children}
				</DropdownMenuUI.Content>
			</DropdownMenuUI.Portal>
		</DropdownMenuUI.Root>
	);
};

export { DropdownMenu, DropdownMenuUI };
