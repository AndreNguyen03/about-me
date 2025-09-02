import { useEffect, useState } from 'react'

interface TypingTextProps {
	texts: string[]
	typingSpeed?: number
	deletingSpeed?: number
	pauseTime?: number
	className?: string // for font size, color, etc.
}

const TypingText: React.FC<TypingTextProps> = ({
	texts,
	typingSpeed = 100,
	deletingSpeed = 50,
	pauseTime = 1000,
	className = 'text-lg'
}) => {
	const [textIndex, setTextIndex] = useState(0)
	const [charIndex, setCharIndex] = useState(0)
	const [typing, setTyping] = useState(true)
	const [displayText, setDisplayText] = useState('')

	useEffect(() => {
		const currentText = texts[textIndex]
		let timeout: number

		if (typing) {
			if (charIndex < currentText.length) {
				timeout = setTimeout(() => {
					setDisplayText(currentText.slice(0, charIndex + 1))
					setCharIndex(charIndex + 1)
				}, typingSpeed)
			} else {
				timeout = setTimeout(() => setTyping(false), pauseTime)
			}
		} else {
			if (charIndex > 0) {
				timeout = setTimeout(() => {
					setDisplayText(currentText.slice(0, charIndex - 1))
					setCharIndex(charIndex - 1)
				}, deletingSpeed)
			} else {
				setTyping(true)
				setTextIndex((textIndex + 1) % texts.length)
			}
		}

		return () => clearTimeout(timeout)
	}, [charIndex, typing, textIndex, texts, typingSpeed, deletingSpeed, pauseTime])

	return (
		<span className={className}>
			{displayText}
			<span className='animate-blink inline-block w-[1ch]'>|</span>
		</span>
	)
}

export { TypingText }
