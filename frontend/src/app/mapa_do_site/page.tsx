import Link from "next/link";
import { PageTitle } from "../components/page-title";
import { navButtons } from '../../configs/main-nav-menu';

export default function MapaDoSite() {
	return (
		<div>
			<PageTitle title="Mapa do site" />

			<ul className="mt-8">
				{navButtons.map((item) => (
					<li
						key={item.id}
						className="list-disc list-inside">
						<Link
							href={item.link}
							prefetch={false}
							className="text-lg underline font-semibold hover:text-title_blue">
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
