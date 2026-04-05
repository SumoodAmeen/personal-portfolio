import React, { useState, useEffect, useContext } from 'react'
import { FeyButton } from './ui/fey-button'
import { LenisContext } from '../App'

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const lenisRef = useContext(LenisContext)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Show navbar when scrolling down, hide when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Scrolling up - hide navbar
                setIsVisible(false)
            } else {
                // Scrolling down - show navbar
                setIsVisible(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Me', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className="bg-transparent">
                <div className="w-[100%] mx-auto px-4 sm:px-6 lg:px-12 lg:py-2">
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

                        {/* Navigation Links - Centered */}
                        <div className="hidden md:flex items-center justify-center flex-1">
                            <div className="flex space-x-8">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            const target = document.querySelector(link.href)
                                            if (target && lenisRef?.current) {
                                                lenisRef.current.scrollTo(target, { offset: 0 })
                                            }
                                        }}
                                        className="text-white hover:text-white text-sm font-medium transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Resume Button */}
                        <div className="flex-shrink-0">
                            <FeyButton>
                                Resume
                            </FeyButton>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
