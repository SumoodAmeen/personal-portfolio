import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const Preloader = ({ onFinish, duration = 2200 }) => {
    const [count, setCount] = useState(0)
    const [fadeOut, setFadeOut] = useState(false)
    const [viewport, setViewport] = useState(() => ({
        w: typeof window !== 'undefined' ? window.innerWidth : 1024,
        h: typeof window !== 'undefined' ? window.innerHeight : 768,
    }))

    const isMobile = typeof navigator !== 'undefined' &&
        (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || viewport.w < 768)

    useEffect(() => {
        if (isMobile) {
            onFinish?.()
            return
        }

        const onResize = () =>
            setViewport({ w: window.innerWidth, h: window.innerHeight })
        window.addEventListener('resize', onResize)
        window.addEventListener('orientationchange', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
            window.removeEventListener('orientationchange', onResize)
        }
    }, [])

    useEffect(() => {
        if (isMobile) return

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

    if (typeof document === 'undefined' || isMobile) return null

    const fontPx = Math.max(96, Math.min(viewport.w * 0.18, 256))
    const blurPx = 18

    const overlay = (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: `${viewport.w}px`,
                height: `${viewport.h}px`,
                margin: 0,
                padding: 0,
                backgroundColor: '#000',
                zIndex: 2147483647,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                opacity: fadeOut ? 0 : 1,
                pointerEvents: fadeOut ? 'none' : 'auto',
                transition: 'opacity 500ms ease-out',
                WebkitTransform: 'translateZ(0)',
                transform: 'translateZ(0)',
            }}
        >
            <span
                style={{
                    color: '#fff',
                    fontWeight: 900,
                    fontVariantNumeric: 'tabular-nums',
                    userSelect: 'none',
                    lineHeight: 1,
                    fontSize: `${fontPx}px`,
                    filter: `blur(${blurPx}px)`,
                    WebkitFilter: `blur(${blurPx}px)`,
                    letterSpacing: '-0.05em',
                    textAlign: 'center',
                    display: 'inline-block',
                }}
            >
                {count}
            </span>
        </div>
    )

    return createPortal(overlay, document.body)
}

export default Preloader
