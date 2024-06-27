import AboutMe from './AboutMe';
import TechStack from './Stacks';

export default function AboutIndex() {
	return (
		<>
			<div name="about" className="w-[80%] mx-auto h-fit mt-16">
				<AboutMe />
				<TechStack />
			</div>
			<br />
			<br />
			<hr className="border-1 border-dashed border-black w-[90%] mx-auto" />
		</>
	);
}
