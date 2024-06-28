import { Tooltip } from '@mui/material';

export default function Html() {
	return (
		<div className="flex justify-center col-span-3">
			<Tooltip
				title={'HTML 5'}
				arrow={true}
				placement={'top'}
				leaveDelay={100}
				enterDelay={100}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					id="html"
					height="53"
					width={53}>
					<path d="m1 0 1.275 14.4L8 16l5.723-1.599L15 0H1zm11.235 4.709H5.524l.16 1.809h6.391l-.481 5.424L8 12.945l-.002.001-3.592-1.004-.252-2.837h1.76l.13 1.472 1.953.532.003-.002 1.955-.532.204-2.291H4.082l-.474-5.34h8.783l-.156 1.765z"></path>
				</svg>
			</Tooltip>
		</div>
	);
}
