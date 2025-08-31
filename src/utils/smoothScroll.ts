export function smoothScrollToId(id: string, duration = 800, offset = 0) {
  const el = document.getElementById(id)
  if (!el) return

  const start = window.scrollY
  const target = el.getBoundingClientRect().top + window.scrollY - offset
  const distance = target - start

  let startTime: number | null = null

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp
    const progress = Math.min((timestamp - startTime) / duration, 1)

    // easeInOutCubic
    const eased =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2

    window.scrollTo(0, start + distance * eased)

    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}
