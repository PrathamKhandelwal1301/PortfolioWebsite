import Navbar from '../components/Navbar';
import Hero from '../components/Homepage/Hero/Hero';
import Socials from '../components/Homepage/Socials';

export default function Homepage() {
	return (
		<div className="h-dvh">
			<Navbar />
			<Hero />
			<Socials />
		</div>
	);
}
