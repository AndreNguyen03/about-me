import { useEffect, useState } from "react"

export function useScrollSpy(sectionIds: string[], offset = 50) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      let current = ""
      let minDistance = Infinity

      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          const distance = Math.abs(rect.top - offset)

          // select section which one nearest to the top of viewport
          if (rect.top <= window.innerHeight && distance < minDistance) {
            minDistance = distance
            current = id
          }
        }
      })

      if (current && current !== activeId) {
        setActiveId(current)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // run once 

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sectionIds, offset, activeId])

  return activeId
}