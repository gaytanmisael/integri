const animateCSS = (element: string, animation: string, prefix = "animate__") =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`
    const node = document.querySelector(element)
    node?.classList.remove("invisible")
    node?.classList.add(`${prefix}animated`, animationName)

    function handleAnimationEnd(event: Event) {
      event.stopPropagation()
      node?.classList.remove(`${prefix}animated`, animationName)
      resolve("Animation Ended")
    }

    node?.addEventListener("animationend", handleAnimationEnd, { once: true })
  })

const startAnimation = (entries: any, observer: IntersectionObserver) => {
  entries.forEach((entry: any, i: number) => {
    if (entry.isIntersecting) {
      const { animation } = entry.target.dataset
      animateCSS(`#${entry.target.id}`, animation)
    }
    if (entry.intersectionRatio > 0) {
      observer.unobserve(entry.target)
    }
  })
}

const options = { threshold: 0.3 }
const Obs = new IntersectionObserver(startAnimation, options)

const elements = document
  .querySelectorAll(".invisible")
  .forEach((el: any, i: number) => {
    if (el) {
      el.setAttribute("id", `animate-${i}`)
      Obs.observe(el)
    }
  })
