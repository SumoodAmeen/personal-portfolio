import React, { useState, useEffect } from 'react'
import { FeyButton } from './ui/fey-button'

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

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
        { name: 'Works', href: '#works' },
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
