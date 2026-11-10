import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import heroVideo1080 from '../assets/hero-1080.mp4';
import heroVideo720 from '../assets/hero-720.mp4';
import heroPoster from '../assets/hero-poster.webp';
import heroFallback from '../assets/hero-fallback.webp';

// Small screens get the lighter 720p encode
const heroVideo =
    typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
        ? heroVideo720
        : heroVideo1080;

const Hero = () => {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    // True when the browser refuses to autoplay the video (iOS Low Power
    // Mode, data/battery saver, in-app browsers). An animated image is not
    // subject to autoplay rules, so it stands in until the video can play.
    const [autoplayBlocked, setAutoplayBlocked] = useState(false);

    // Mobile browsers only allow autoplay for videos that are muted at the
    // attribute level, and React sets `muted` as a property only. Force it,
    // start playback explicitly, and retry when the browser blocks it
    // (e.g. until the first touch, or after returning to the tab).
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = true;
        video.defaultMuted = true;
        video.setAttribute('muted', '');
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');

        const tryPlay = () => {
            if (!video.paused) return;
            const p = video.play();
            if (p && typeof p.catch === 'function') {
                p.catch((err) => {
                    if (err?.name === 'NotAllowedError') setAutoplayBlocked(true);
                });
            }
        };

        const onPlaying = () => setAutoplayBlocked(false);

        const onVisible = () => {
            if (document.visibilityState === 'visible') tryPlay();
        };

        tryPlay();
        video.addEventListener('canplay', tryPlay);
        video.addEventListener('playing', onPlaying);
        document.addEventListener('visibilitychange', onVisible);
        window.addEventListener('touchstart', tryPlay, { passive: true });
        window.addEventListener('click', tryPlay);

        return () => {
            video.removeEventListener('canplay', tryPlay);
            video.removeEventListener('playing', onPlaying);
            document.removeEventListener('visibilitychange', onVisible);
            window.removeEventListener('touchstart', tryPlay);
            window.removeEventListener('click', tryPlay);
        };
    }, []);

    useGSAP(
        () => {
            const section = sectionRef.current;
            if (!section) return;

            const heading = section.querySelector('.hero-heading');
            const sub = section.querySelector('.hero-sub');

            gsap.set([heading, sub], { opacity: 0, y: 30 });

            const tl = gsap.timeline({ delay: 0.4 });
            tl.to(heading, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
                .to(sub, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5');
        },
        { scope: sectionRef }
    );

    return (
        <section id="home" ref={sectionRef} className="h-screen bg-black w-full relative overflow-hidden">
            {/* Video Background */}
            <video
                ref={videoRef}
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={heroPoster}
                className="absolute inset-0 w-full h-full object-cover"
            />
            {autoplayBlocked && (
                <img
                    src={heroFallback}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}


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

        </section>
    );
};

export default Hero;
