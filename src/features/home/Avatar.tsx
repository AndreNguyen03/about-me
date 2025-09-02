function Avatar({ src }: { src: string }) {
	return (
		<div className='flex w-full items-center justify-center md:w-1/2'>
			<img
				className='rounded-lg object-cover h-[24rem] w-[23rem]'
				src={src}
				alt='anh_dai_dien'
			/>
		</div>
	)
}

export { Avatar }
