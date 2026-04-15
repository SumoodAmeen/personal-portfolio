import React, { useState, useEffect, useRef, useContext } from 'react'
import { FeyButton } from './ui/fey-button'
import { LenisContext } from '../App'

const StarIcon = ({ className }) => (
    <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M12 0L13.8 8.2L22 6L16.2 12L22 18L13.8 15.8L12 24L10.2 15.8L2 18L7.8 12L2 6L10.2 8.2L12 0Z" />
    </svg>
)

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [isScrolled, setIsScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const lastScrollY = useRef(0)
    const idleTimer = useRef(null)
    const lenisRef = useContext(LenisContext)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setIsScrolled(currentScrollY > 50)

            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            lastScrollY.current = currentScrollY

            clearTimeout(idleTimer.current)
            idleTimer.current = setTimeout(() => {
                setIsVisible(true)
            }, 600)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
            clearTimeout(idleTimer.current)
        }
    }, [])

    // Lock body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Me', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Works', href: '#works' },
        { name: 'Contact', href: '#contact' },
    ]

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setMenuOpen(false)
        const target = document.querySelector(href)
        if (target && lenisRef?.current) {
            lenisRef.current.scrollTo(target, { offset: 0 })
        }
    }

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
                    isVisible ? 'translate-y-0' : '-translate-y-full'
                } ${
                    isScrolled
                        ? 'bg-white/5 backdrop-blur-xl border-b border-white/10'
                        : 'bg-transparent border-b border-transparent'
                }`}
            >
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 lg:py-2">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <a
                                href="#"
                                className="text-2xl font-bold text-white tracking-wider"
                                style={{ fontFamily: 'Ari, sans-serif' }}
                            >
                                MSA
                            </a>
                        </div>

                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center justify-center flex-1">
                            <div className="flex space-x-8">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="text-white hover:text-white text-sm font-medium transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Desktop Resume Button */}
                        <div className="hidden md:block flex-shrink-0">
                            <FeyButton>
                                Resume
                            </FeyButton>
                        </div>

                        {/* Mobile Star Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden relative w-10 h-10 flex items-center justify-center text-white"
                            aria-label="Toggle menu"
                        >
                            <StarIcon
                                className={`transition-transform duration-500 ease-in-out ${
                                    menuOpen ? 'rotate-180' : 'rotate-0'
                                }`}
                            />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
                    menuOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                    onClick={() => setMenuOpen(false)}
                />

                {/* Menu Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
                    <div className="flex flex-col items-center gap-8">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`text-3xl font-medium text-white/80 hover:text-white tracking-tight transition-all duration-500 ${
                                    menuOpen
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-8 opacity-0'
                                }`}
                                style={{
                                    transitionDelay: menuOpen ? `${index * 60}ms` : '0ms',
                                    fontFamily: 'Ari, sans-serif',
                                }}
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Resume Button inside mobile menu */}
                        <div
                            className={`mt-4 transition-all duration-500 ${
                                menuOpen
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-8 opacity-0'
                            }`}
                            style={{
                                transitionDelay: menuOpen ? `${navLinks.length * 60}ms` : '0ms',
                            }}
                        >
                            <FeyButton>
                                Resume
                            </FeyButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
