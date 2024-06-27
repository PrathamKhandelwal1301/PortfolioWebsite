import { Link } from 'react-scroll';

export default function NavItem({ children, to }) {
	return (
		<Link
			to={to}
			smooth={true}
			offset={0}
			duration={500}
			className="group font-neuton font-extrabold text-2xl hover:text-green-400 cursor-pointer">
			{children}
			<span className="block max-w-0 transition-all ease-out duration-300 group-hover:max-w-full h-1 bg-green-400"></span>
		</Link>
	);
}
