import React from 'react';
import { twMerge } from 'tailwind-merge';
import * as AccordionUI from '@radix-ui/react-accordion';
import { HiPlusSmall, HiMinusSmall } from 'react-icons/hi2';
import { IconBaseProps } from 'react-icons';

type Props = {
	children: React.ReactNode;
	type: 'single' | 'multiple';
} & (
	| ({ type: 'single' } & AccordionUI.AccordionSingleProps)
	| ({ type: 'multiple' } & AccordionUI.AccordionMultipleProps)
);

const Accordion = ({ children, ...rootProps }: Props) => (
	<AccordionUI.Root className="w-full rounded-md" {...rootProps}>
		{children}
	</AccordionUI.Root>
);

const AccordionItem = React.forwardRef<
	HTMLDivElement,
	AccordionUI.AccordionItemProps
>(function AccordionItem({ children, className, ...props }, forwardedRef) {
	return (
		<AccordionUI.Item
			className={twMerge(
				'mt-5 overflow-hidden rounded-lg border border-zinc-300 first:mt-0',
				className
			)}
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
					'mouse-over group flex flex-1 items-center justify-between gap-2 px-8 py-5 text-xl font-semibold leading-none text-title_blue outline-none ring-gray_text ring-offset-2 focus-visible:ring-2 dark:bg-black dark:text-white',
					className
				)}
				{...props}
				ref={forwardedRef}
			>
				{children}
				<div className="relative h-6 w-6">
					<HiPlusSmall
						className={twMerge(
							'absolute h-6 w-6 transition-transform duration-300 group-data-[state=open]:scale-y-0 dark:fill-white',
							iconProps?.className
						)}
						aria-hidden
						{...iconProps}
					/>
					<HiMinusSmall
						className={twMerge(
							'absolute h-6 w-6 scale-y-0 transition-transform duration-300 group-data-[state=open]:scale-y-100 dark:fill-white',
							iconProps?.className
						)}
						aria-hidden
						{...iconProps}
					/>
				</div>
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
