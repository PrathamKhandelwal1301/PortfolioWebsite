import HeroText from './HeroText';
import Quote from './Quote';

export default function Hero() {
	return (
		<div className="w-[80%] h-[80%] mx-auto justify-center grid grid-cols-2">
			<HeroText />
			<Quote />
		</div>
	);
}
