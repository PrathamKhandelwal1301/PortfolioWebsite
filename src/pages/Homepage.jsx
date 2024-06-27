import Navbar from '../components/Navbar';
import Hero from '../components/Homepage/Hero/Hero';
import Socials from '../components/Homepage/Socials/Socials';
import TechStack from '../components/Homepage/About/Index';
import Projects from '../components/Homepage/Projects/Projects';

export default function Homepage() {
	return (
		<div className="h-dvh">
			<Navbar />
			<Hero />
			<Socials />
			<TechStack />
			<Projects />
		</div>
	);
}
