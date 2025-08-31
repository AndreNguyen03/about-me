import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary'
	children?: ReactNode
	className?: string
}

function Button({ variant = 'primary', className, children, ...rest }: ButtonProps) {
	return (
		<button
			className={`${className} flex items-center gap-2 rounded-lg border-[1px] border-black px-2 py-2 text-base font-medium transition-all duration-200 ${variant === 'primary' ? 'bg-[#1f2936] text-white hover:opacity-80' : 'bg-white text-slate-800 hover:opacity-80'}`}
			{...rest}
		>
			{children}
		</button>
	)
}

export { Button }
