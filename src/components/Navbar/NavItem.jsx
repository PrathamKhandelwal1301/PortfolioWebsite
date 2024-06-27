import { NavLink } from 'react-router-dom';

export default function NavItem({ children, route }) {
	return (
		<NavLink
			to={route}
			className="group font-neuton font-extrabold text-2xl hover:text-green-400">
			{children}
			<span className="block max-w-0 transition-all ease-out duration-300 group-hover:max-w-full h-1 bg-green-400"></span>
		</NavLink>
	);
}
