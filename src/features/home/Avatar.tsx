import { useViewportAnimation } from '../../hooks'

function Avatar({ src }: { src: string }) {
	const fadeDown = useViewportAnimation({
		animationClass: 'animate-fadeInLeft lg:animate-fadeInDown'
	})
	return (
		<div ref={fadeDown.ref} className='flex w-full items-center justify-center md:w-1/2'>
			{fadeDown.isVisible && (
				<img className='h-[24rem] w-[23rem] rounded-lg object-cover' src={`/about-me/${src}`} alt='anh_dai_dien' />
			)}
		</div>
	)
}

export { Avatar }
