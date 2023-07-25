import React from 'react';
import { twMerge } from 'tailwind-merge';
import * as AccordionUI from '@radix-ui/react-accordion';
import { MdOutlineArrowDropDownCircle } from 'react-icons/md';
import { IconBaseProps } from 'react-icons';

type Props = {
	children: React.ReactNode;
	type: 'single' | 'multiple';
} & (
	| ({ type: 'single' } & AccordionUI.AccordionSingleProps)
	| ({ type: 'multiple' } & AccordionUI.AccordionMultipleProps)
);

const Accordion = ({ children, ...rootProps }: Props) => (
	<AccordionUI.Root
		className="w-full rounded-md shadow-[0_2px_10px] shadow-black/5"
		{...rootProps}
	>
		{children}
	</AccordionUI.Root>
);

const AccordionItem = React.forwardRef<
	HTMLDivElement,
	AccordionUI.AccordionItemProps
>(function AccordionItem({ children, className, ...props }, forwardedRef) {
	return (
		<AccordionUI.Item
			className={twMerge('mt-4 first:mt-0', className)}
			{...props}
			ref={forwardedRef}
		>
			{children}
		</AccordionUI.Item>
	);
});

const AccordionTrigger = React.forwardRef<
	HTMLButtonElement,
	AccordionUI.AccordionTriggerProps & { iconProps?: IconBaseProps }
>(function AccordionTrigger(
	{ children, className, iconProps, ...props },
	forwardedRef
) {
	return (
		<AccordionUI.Header className="flex">
			<AccordionUI.Trigger
				className={twMerge(
					'mouse-over group flex flex-1 items-center justify-between bg-primary px-5 py-3 text-xl leading-none text-white outline-none ring-gray_text ring-offset-2 focus-visible:ring-2 dark:bg-white dark:text-gray_text',
					className
				)}
				{...props}
				ref={forwardedRef}
			>
				{children}

				<MdOutlineArrowDropDownCircle
					className={twMerge(
						'h-6 w-6 fill-white transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180 dark:fill-gray_text',
						iconProps?.className
					)}
					aria-hidden
					{...iconProps}
				/>
			</AccordionUI.Trigger>
		</AccordionUI.Header>
	);
});

const AccordionContent = React.forwardRef<
	HTMLDivElement,
	AccordionUI.AccordionContentProps
>(function AccordionContent({ children, className, ...props }, forwardedRef) {
	return (
		<AccordionUI.Content
			className={twMerge(
				'overflow-hidden text-[15px] data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown',
				className
			)}
			{...props}
			ref={forwardedRef}
		>
			<div className="px-5 py-[15px]">{children}</div>
		</AccordionUI.Content>
	);
});

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
