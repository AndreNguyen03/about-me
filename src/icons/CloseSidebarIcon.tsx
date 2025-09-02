type CloseSidebarOutlineProps = {
	size: string
}

const CloseSidebarIcon = ({ size }: CloseSidebarOutlineProps) => (
	<svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24' fill='#000000'>
		<path
			fill='none'
			stroke='#000000'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
			d='m8 10l-2 2l2 2m3-9v14m-7 0h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1'
		/>
	</svg>
)

export { CloseSidebarIcon }
