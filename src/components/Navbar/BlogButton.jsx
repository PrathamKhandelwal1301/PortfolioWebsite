import { NavLink } from 'react-router-dom';

export default function BlogButton({ children, to }) {
	return (
		<NavLink
			to={to}
			className=" font-neuton font-extrabold text-2xl h-20 flex items-center">
			<button className="group w-40 h-14 border-dashed border-2 border-slate-800 rounded-full space-x-2 flex justify-center items-center hover:bg-green-400  hover:shadow-hoverShadow hover:border-solid hover:translate-x-3 hover:-translate-y-3 duration-300">
				<h1 className="group-hover:-translate-x-1 duration-300 ease-out">
					{children}
				</h1>
				<h1 className="group-hover:translate-x-2 duration-300 ease-out">
					&rarr;
				</h1>
			</button>
		</NavLink>
	);
}
