import { Tooltip } from '@mui/material';

export default function Figma() {
	return (
		<div className="flex justify-center col-span-3 pl-8">
			<Tooltip title="Figma" arrow placement={'top'}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="45"
					height="45"
					viewBox="0 0 50 50">
					<path d="M25 2v14h-7c-3.855 0-7-3.145-7-7 0-3.855 3.145-7 7-7H25zM25 18v14h-7c-3.855 0-7-3.145-7-7 0-3.855 3.145-7 7-7H25zM25 34v7c0 3.855-3.145 7-7 7s-7-3.145-7-7c0-3.855 3.145-7 7-7H25zM41 9c0 3.855-3.145 7-7 7h-7V2h7C37.855 2 41 5.145 41 9zM34 18A7 7 0 1034 32 7 7 0 1034 18z"></path>
				</svg>
			</Tooltip>
		</div>
	);
}
