import dynamic from 'next/dynamic';

const Slider = dynamic(() => import('react-slick'), {
	ssr: false,
	loading: () => (
		<div className="flex h-[333px] items-center justify-center">
			<p>Loading...</p>
		</div>
	)
});

export { Slider };
