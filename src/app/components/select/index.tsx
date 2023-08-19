import React from 'react';
import * as SelectUI from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';

import { ChevronDown, ChevronUp } from '../Icons';

type Props = SelectUI.SelectProps & {
	children: React.ReactNode;
	triggerProps?: SelectUI.SelectTriggerProps & {
		placeholder?: string;
	};
};

const Select = ({ children, triggerProps, ...rootProps }: Props) => {
	return (
		<SelectUI.Root {...rootProps}>
			<SelectUI.Trigger
				className="flex w-full items-center justify-between gap-2 rounded border px-4 py-2"
				{...triggerProps}
			>
				<SelectUI.Value placeholder={triggerProps?.placeholder} />

				<SelectUI.Icon>
					<ChevronDown />
				</SelectUI.Icon>
			</SelectUI.Trigger>

			<SelectUI.Portal>
				<SelectUI.Content
					className="w-selectTrigger overflow-hidden bg-white py-2 drop-shadow-md"
					position="popper"
					align="center"
					side="bottom"
				>
					<SelectUI.ScrollUpButton className="mx-auto py-1">
						<ChevronUp />
					</SelectUI.ScrollUpButton>

					<SelectUI.Viewport>{children}</SelectUI.Viewport>

					<SelectUI.ScrollDownButton className="mx-auto py-1">
						<ChevronDown />
					</SelectUI.ScrollDownButton>
				</SelectUI.Content>
			</SelectUI.Portal>
		</SelectUI.Root>
	);
};

type SelectItemProps = SelectUI.SelectItemProps & {
	children: React.ReactNode;
	className?: string;
};
const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
	function SelectItem({ children, className, ...props }, forwardedRef) {
		return (
			<SelectUI.Item
				className={twMerge(
					'cursor-pointer bg-white px-4 py-1 outline-none data-[highlighted]:bg-slate-200 data-[state=checked]:bg-primary data-[state=checked]:text-white',
					className
				)}
				{...props}
				ref={forwardedRef}
			>
				<SelectUI.ItemText asChild>
					<span className="text-inherit">{children}</span>
				</SelectUI.ItemText>
			</SelectUI.Item>
		);
	}
);

export { Select, SelectItem };
