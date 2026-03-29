import React from 'react'
import { EtheralShadow } from './ui/etheral-shadow'
import { AnimatedSocialIcons } from './ui/floating-action-button'
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react'

const Contact = () => {
    const socialIcons = [
        {
            Icon: Github,
            href: "https://github.com/SumoodAmeen",
            className: "hover:bg-accent"
        },
        {
            Icon: Twitter,
            href: "https://x.com/SumoodAmeen"
        },
        {
            Icon: Linkedin,
            href: "https://www.linkedin.com/in/mohammed-sumood-ameen-8677b622b/"
        },
        {
            Icon: Instagram,
            href: "https://www.instagram.com/mohammedsumoodameen/"
        }
    ]

    return (
        <section className='h-[60vh] md:h-[70vh] bg-black w-full relative overflow-hidden'>
            {/* Ethereal Shadow Animation Background */}
            <EtheralShadow
                color="rgba(128, 128, 128, 1)"
                animation={{ scale: 100, speed: 90 }}
                noise={{ opacity: 1, scale: 1.2 }}
                sizing="fill"
                className="absolute inset-0"
            >
                {/* Quote Content */}
                <div className="flex flex-col items-center justify-start pt-0 md:pt-0 md:justify-center gap-8">
                    <h1 className="text-[25px] md:text-6xl lg:text-7xl font-bold text-white text-center leading-tight max-w-4xl">
                        "Let's connect and create something meaningful."
                    </h1>

                    {/* Social Icons */}
                    <AnimatedSocialIcons
                        icons={socialIcons}
                        iconSize={20}
                        className="justify-center"
                    />
                </div>
            </EtheralShadow>

            {/* Footer */}
            <footer className="absolute md:bottom-14 bottom-5 left-0 right-0 px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-[8px] text-[12px] text-gray-400 gap-2.5 md:gap-4">
                <a
                    href="mailto:sumoodameen@gmail.com"
                    className="hover:text-white transition-colors"
                >
                    sumoodameen@gmail.com
                </a>
                <span className="text-gray-500">
                    Designed by <span className="text-white font-medium">MSA</span>
                </span>
                <span>
                    All rights reserved. ©{new Date().getFullYear()}
                </span>
            </footer>
        </section>
    )
}

export default Contact
