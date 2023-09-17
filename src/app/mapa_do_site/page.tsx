import Link from 'next/link';
import { PageTitle } from '../components/page-title';
import { navButtons } from '../../configs/main-nav-menu';
import ScrollToTop from '../components/scroll-to-top';

export default function MapaDoSite() {
	return (
		<div>
			<ScrollToTop />
			<PageTitle title="Mapa do site" />

			<ul className="mt-8">
				{navButtons.map((item) => (
					<li key={item.id} className="list-inside list-disc">
						<Link
							href={item.link}
							prefetch={false}
							className="text-lg font-semibold underline hover:text-title_blue"
						>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
