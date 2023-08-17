import React from 'react';
import * as SelectUI from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';

import { ChevronDown, ChevronUp } from '../Icons';

type Props = SelectUI.SelectProps & {
	children: React.ReactNode;
	triggerProps?: SelectUI.SelectTriggerProps & {
		placeholder?: string;
	};
}

const Select = ({ children, triggerProps, ...rootProps }: Props) => {
	return (
		<SelectUI.Root {...rootProps} >
			<SelectUI.Trigger
				className="border rounded px-4 py-2 w-full flex gap-2 justify-between items-center"
				{...triggerProps}>

				<SelectUI.Value placeholder={triggerProps?.placeholder} />

				<SelectUI.Icon><ChevronDown /></SelectUI.Icon>
			</SelectUI.Trigger>

			<SelectUI.Portal>
				<SelectUI.Content
					className="bg-white overflow-hidden w-selectTrigger drop-shadow-md py-2"
					position='popper'
					align='center'
					side='bottom'>
					<SelectUI.ScrollUpButton className='py-1 mx-auto'>
						<ChevronUp />
					</SelectUI.ScrollUpButton>

					<SelectUI.Viewport>
						{children}
					</SelectUI.Viewport>

					<SelectUI.ScrollDownButton className='py-1 mx-auto'>
						<ChevronDown />
					</SelectUI.ScrollDownButton>
				</SelectUI.Content>
			</SelectUI.Portal>
		</SelectUI.Root>
	);
}

type SelectItemProps = SelectUI.SelectItemProps & {
	children: React.ReactNode;
	className?: string;
}
const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(({
	children,
	className,
	...props
}, forwardedRef) => {
	return (
		<SelectUI.Item
			className={twMerge('py-1 data-[highlighted]:bg-slate-200 px-4 bg-white outline-none data-[state=checked]:bg-primary data-[state=checked]:text-white cursor-pointer', className)}
			{...props}
			ref={forwardedRef}
		>
			<SelectUI.ItemText asChild>
				<span className='text-inherit'>{children}</span>
			</SelectUI.ItemText>
		</SelectUI.Item>
	);
});

export { Select, SelectItem };