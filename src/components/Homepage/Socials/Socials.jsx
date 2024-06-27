import { Link } from 'react-router-dom';

import SvgI from './svg/Svg-I';
import SvgT from './svg/Svg-T';
import SvgG from './svg/Svg-G';
import SvgL from './svg/Svg-L';
import SvgIn from './svg/Svg-In';

export default function Socials() {
	return (
		<div className="w-100 h-[5vh] bg-green-400 sticky flex justify-center items-center space-x-7">
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
