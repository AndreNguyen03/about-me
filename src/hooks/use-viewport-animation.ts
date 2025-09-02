import { useEffect, useRef, useState } from 'react'

interface UseViewportAnimationOptions {
  threshold?: number
  animationClass?: string // có thể chứa nhiều class, ví dụ: 'animate-fadeInLeft lg:animate-fadeInDown'
  hiddenClass?: string // cũng có thể nhiều class: 'opacity-0 pointer-events-none'
  once?: boolean // true => unobserve sau lần đầu
}

function splitTokens(s?: string) {
  if (!s) return [] as string[]
  return s.trim().split(/\s+/).filter(Boolean)
}

function useViewportAnimation({
  threshold = 0.8,
  animationClass = 'animate-fadeInRight',
  hiddenClass = 'opacity-0',
  once = true
}: UseViewportAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const animTokens = splitTokens(animationClass)
    const hiddenTokens = splitTokens(hiddenClass)

    const observer = new IntersectionObserver(
      ([entry]) => {
        // đảm bảo đủ intersectionRatio nếu muốn strict threshold check
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          setIsVisible(true)

          // remove hidden classes (nếu có)
          if (hiddenTokens.length) node.classList.remove(...hiddenTokens)

          // add animation classes (các token đã được split)
          if (animTokens.length) node.classList.add(...animTokens)

          if (once) {
            observer.unobserve(node)
          }
        }
      },
      { threshold }
    )

    observer.observe(node)

    return () => {
      // safe cleanup với node local
      try {
        observer.unobserve(node)
      } catch (_e) {
        console.log(_e)
      }
    }
  }, [threshold, animationClass, hiddenClass, once])

  return { ref, isVisible }
}

export { useViewportAnimation }
