import { useDebugValue, useEffect, useState } from 'react';
import axios from 'axios';

export default function Quote() {
	const [quote, setQuote] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		async function getQuote() {
			setIsLoading(true);
			const res = await axios.get(
				'https://api.api-ninjas.com/v1/quotes?category=inspirational',
				{
					headers: {
						'X-Api-Key': 'nlD3uQEFGiOuNm+yppQD9A==lQqlohPn82all8Ub',
					},
				}
			);
			setQuote(res.data[0]);
			setIsLoading(false);
		}

		getQuote();
	}, []);

	if (isLoading)
		return (
			<div className="font-flowRounded animate-pulse text-slate-300 text-3xl h-[50%] w-[90%] ml-auto my-auto pt-16">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugit,
				quae facere
				<br />
				<br />
				<span className="absolute right-[10%]"> ----------------- </span>
			</div>
		);

	return (
		<div className="text-3xl font-cuda h-[50%] w-[90%] ml-auto my-auto pt-16 italic">
			{`"${quote.quote}"`}
			<br />
			<br />
			<span className="absolute right-[10%]"> {`-${quote.author}`} </span>
		</div>
	);
}
