import { Tooltip } from '@mui/material';

export default function Css() {
	return (
		<Tooltip
			title={'CSS 3'}
			arrow={true}
			placement={'top'}
			leaveDelay={100}
			enterDelay={100}>
			<div className="flex justify-center col-span-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					id="css"
					height={53}
					width={53}>
					<path d="m1 0 1.275 14.4L8 16l5.723-1.599L15 0H1zm11.274 4.709-.161 1.809-.485 5.424L8 12.944l-.002.001-3.625-1.004-.254-2.836h1.776l.132 1.472 1.971.532.002-.002 1.973-.532.269-2.451-6.208.017-.176-1.677 6.533-.076.132-1.795-6.84.019-.115-1.668h8.864l-.158 1.765z"></path>
				</svg>
			</div>
		</Tooltip>
	);
}
