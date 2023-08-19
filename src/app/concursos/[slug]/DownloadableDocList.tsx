import React from 'react';

export function DownloadableDocList({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<ol className="space-y-4 text-lg">
			{React.Children.toArray(children).map((child, index) => (
				<li key={String(index)}>
					{React.cloneElement(
						child as React.ReactElement<
							any,
							string | React.JSXElementConstructor<any>
						>,
						{
							className:
								'mouse-over flex items-center gap-2 hover:underline underline-offset-4'
						}
					)}
				</li>
			))}
		</ol>
	);
}
