import { Link } from 'react-router-dom';

import SvgI from '../Homepage/svg/Svg-I';
import SvgT from '../Homepage/svg/Svg-T';
import SvgG from '../Homepage/svg/Svg-G';
import SvgL from '../Homepage/svg/Svg-L';
import SvgIn from '../Homepage/svg/Svg-In';

export default function Socials() {
	return (
		<div className="w-100 h-[5vh] bg-green-300 flex justify-center items-center space-x-7">
			<Link
				to="https://www.instagram.com/_.pratham1301._/"
				target="_blank"
				className="hover:-translate-y-1 ease-in-out duration-300">
				<SvgI />
			</Link>
			<Link
				to="https://x.com/Pratham_k1301"
				target="_blank"
				className="hover:-translate-y-1 ease-in-out duration-300">
				<SvgT />
			</Link>
			<Link
				to="https://github.com/PrathamKhandelwal1301"
				target="_blank"
				className="hover:-translate-y-1 ease-in-out duration-300">
				<SvgG />
			</Link>
			<Link
				to="https://leetcode.com/u/pratham1320/"
				target="_blank"
				className="hover:-translate-y-1 ease-in-out duration-300">
				<SvgL />
			</Link>
			<Link
				to="https://www.linkedin.com/in/pratham-khandelwal-b7b139222/"
				target="_blank"
				className="hover:-translate-y-1 ease-in-out duration-300">
				<SvgIn />
			</Link>
		</div>
	);
}
