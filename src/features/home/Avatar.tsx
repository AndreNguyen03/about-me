function Avatar({ src }: { src: string }) {
	return (
		<div className='flex h-full w-1/2 items-center justify-center'>
			<img className='h-[18rem] w-[17rem] rounded-lg object-cover' src={src} alt='anh_dai_dien' />
		</div>
	)
}

export { Avatar }
