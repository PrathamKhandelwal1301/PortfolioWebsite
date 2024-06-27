import { Link } from 'react-router-dom';

export default function Logo() {
	return (
		<Link to="/">
			<h1
				className={`text-7xl h-20 font-kumarOne hover:font-kumarOneFill hover:text-green-400`}>
				m.
			</h1>
		</Link>
	);
}
