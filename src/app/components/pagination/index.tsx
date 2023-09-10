'use client';
import { useCallback, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import {
	Pagination as PaginationRoot,
	NextButton,
	PrevButton,
	PageButton
} from 'react-headless-pagination';
import { ChevronLeft, ChevronRight } from '../Icons';

type Props = {
	length: number;
};

export function Pagination({ length }: Props) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const pageParam = searchParams.get('pagina');
	const initialPage = typeof pageParam === 'string' ? Number(pageParam) : 1;

	const [page, setPage] = useState<number>(initialPage - 1);

	const handlePageChange = useCallback(
		(page: number) => {
			console.log(pathname, page);
			setPage(page);
			if (pathname) {
				router.push(`${pathname}?pagina=${page + 1}`);
			}
		},
		[pathname, router]
	);

	return (
		<PaginationRoot
			totalPages={length}
			currentPage={page}
			middlePagesSiblingCount={1}
			edgePageCount={1}
			setCurrentPage={handlePageChange}
			className="flex h-10 select-none items-center gap-4"
			truncableClassName="w-5 px-0.5 text-center"
			truncableText="..."
		>
			<PrevButton
				aria-label="Anterior"
				className={`flex cursor-pointer items-center rounded p-2 ${page === 0 && 'cursor-default opacity-50'
					}`}
			>
				<ChevronLeft className="h-6 w-6" />
			</PrevButton>

			<nav className="flex flex-grow justify-center">
				<ul className="flex items-center">
					<PageButton
						className="flex h-10 w-10 cursor-pointer items-center justify-center rounded "
						activeClassName="bg-zinc-200 dark:bg-white dark:text-black"
						inactiveClassName="hover:bg-zinc-100 dark:hover:text-black"
					/>
				</ul>
			</nav>

			<NextButton
				aria-label="Próximo"
				className={`${page === length - 1 && 'cursor-default opacity-50'
					} flex cursor-pointer items-center rounded p-2`}
			>
				<ChevronRight className="h-5 w-5" />
			</NextButton>
		</PaginationRoot>
	);
}
