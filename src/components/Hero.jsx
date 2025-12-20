import React from 'react'
import { EtheralShadow } from './ui/etheral-shadow'

const Hero = () => {
    return (
        <section className='h-screen bg-black w-full relative overflow-hidden'>
            {/* Ethereal Shadow Animation Background */}
            <EtheralShadow
                color="rgba(128, 128, 128, 1)"
                animation={{ scale: 100, speed: 90 }}
                noise={{ opacity: 1, scale: 1.2 }}
                sizing="fill"
                className="absolute inset-0"
            >
                {/* Quote Content */}
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center leading-tight max-w-4xl">
                        "Building digital experiences that inspire and innovate"
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-white/70 text-center max-w-2xl">
                        Full-Stack Developer & Creative Technologist
                    </p>
                </div>
            </EtheralShadow>
        </section>
    )
}

export default Hero
