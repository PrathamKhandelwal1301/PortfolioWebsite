import { useEffect, useState } from 'react';

export default function Loader() {
	const [fontNo, setFontNo] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setFontNo((fontNo) => (fontNo + 1) % 5);
		}, 400);

		return () => clearInterval(id);
	}, []);

	let font;

	if (fontNo == 0) font = 'font-kumarOne';
	if (fontNo == 1) font = 'font-1';
	if (fontNo == 2) font = 'font-2';
	if (fontNo == 3) font = 'font-3';
	if (fontNo == 4) font = 'font-4';

	return (
		<div className="flex items-center justify-center my-auto h-screen">
			<h1 className={`text-9xl ${font}`}>m.</h1>
		</div>
	);
}
