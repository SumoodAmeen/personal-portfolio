import { useEffect, useState } from 'react'

const Preloader = ({ onFinish, duration = 2200 }) => {
    const [count, setCount] = useState(0)
    const [fadeOut, setFadeOut] = useState(false)
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' ? window.innerWidth < 768 : false
    )

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 768)
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    useEffect(() => {
        const start = performance.now()
        let rafId

        const tick = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * 100))

            if (progress < 1) {
                rafId = requestAnimationFrame(tick)
            } else {
                setFadeOut(true)
                setTimeout(() => onFinish?.(), 600)
            }
        }

        rafId = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(rafId)
    }, [duration, onFinish])

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black transition-opacity duration-500 ease-out ${
                fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            style={{
                width: '100vw',
                height: '100dvh',
                left: 0,
                top: 0,
            }}
        >
            <span
                className="inline-flex justify-center text-white font-bold tabular-nums select-none leading-none"
                style={{
                    fontSize: isMobile
                        ? 'clamp(7rem, 38vw, 14rem)'
                        : 'clamp(6rem, 18vw, 16rem)',
                    filter: `blur(${isMobile ? 14 : 18}px)`,
                    letterSpacing: '-0.05em',
                }}
            >
                {count}
            </span>
        </div>
    )
}

export default Preloader
