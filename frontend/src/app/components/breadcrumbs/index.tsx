'use client';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const Breadcrumbs = ({
	className
}: {
	className?: string;
}): React.ReactElement => {
	const path = usePathname();

	const breadcrumbs = useMemo(
		function generateBreadcrumbs() {
			const asPathWithoutQuery = path.split('?')[0];
			const asPathNestedRoutes = asPathWithoutQuery
				.split('/')
				.filter((v) => v.length > 0);

			const crumblist = asPathNestedRoutes.map((subpath, idx) => {
				const text = firstLetterToUppercase(
					decodeURI(subpath).replace(new RegExp('_', 'g'), ' ')
				);

				if (idx === asPathNestedRoutes.length - 1) {
					return { href: undefined, text };
				}

				const href = `/${asPathNestedRoutes
					.slice(0, idx + 1)
					.join('/')}`;

				return { href, text };
			});

			if (crumblist.length === 0) {
				return [];
			}

			return [{ href: '/', text: 'Início' }, ...crumblist];
		},
		[path]
	);

	return (
		<nav
			className={twMerge(
				'breadcrumbContainer',
				breadcrumbs.length > 0 && 'mb-12',
				className
			)}
			aria-label="Breadcrumb"
		>
			<ol>
				{breadcrumbs.map((item, idx) => {
					const isLastLink = idx === breadcrumbs.length - 1;

					return (
						<li key={`breadcrumb-link-${idx}`}>
							<a
								href={item.href}
								aria-current={isLastLink ? 'page' : undefined}
							>
								{item.text}
							</a>
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

function firstLetterToUppercase(str: string) {
	const parts = str.split(' ');

	const formattedStr = parts.map(
		(item) => item.at(0)?.toUpperCase() + item.substring(1)
	);

	return formattedStr.join(' ');
}

export { Breadcrumbs };
