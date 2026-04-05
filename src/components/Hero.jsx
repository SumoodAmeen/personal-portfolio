import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import heroVideo from '../assets/video.mp4';

const Hero = () => {
    const sectionRef = useRef(null);

    useGSAP(
        () => {
            const section = sectionRef.current;
            if (!section) return;

            const heading = section.querySelector('.hero-heading');
            const sub = section.querySelector('.hero-sub');
            const scroll = section.querySelector('.hero-scroll');

            gsap.set([heading, sub, scroll], { opacity: 0, y: 30 });

            const tl = gsap.timeline({ delay: 0.4 });
            tl.to(heading, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
                .to(sub, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
                .to(scroll, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3');
        },
        { scope: sectionRef }
    );

    return (
        <section ref={sectionRef} className="h-screen bg-black w-full relative overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-40"
            >
                <source src={heroVideo} type="video/mp4" />
            </video>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
                <h1
                    className="hero-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white text-center leading-tight max-w-5xl tracking-tight"
                >
                    Building digital experiences that inspire and innovate
                </h1>
                <p className="hero-sub mt-6 text-base sm:text-lg md:text-xl text-white/50 text-center max-w-2xl">
                    Full-Stack Developer & Creative Technologist
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
                <span className="text-white/30 text-xs tracking-[0.3em] uppercase">Scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
            </div>
        </section>
    );
};

export default Hero;
