import Tech from './Tech';

export default function Stacks() {
	return (
		<div className="grid grid-cols-12 h-fit mx-auto pt-40 drop-shadow-lg">
			<div className="col-span-8">
				<Tech />
			</div>
			<div className="col-span-4 text-8xl font-teko font-bold text-right h-fit my-auto">
				Explore My <br />{' '}
				<span className="text-green-400 text-9xl">Tech Stack</span>
			</div>
		</div>
	);
}
