import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Shuffle from './ui/Shuffle';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        number: '01',
        title: 'Shopify Store Design & Development',
        description:
            'Custom Shopify stores built for performance, brand identity, and seamless shopping experiences that convert visitors into loyal customers.',
    },
    {
        number: '02',
        title: 'Custom E-Commerce Solutions',
        description:
            'Tailored e-commerce platforms with secure payments, inventory systems, and scalable architecture designed around your business model.',
    },
    {
        number: '03',
        title: 'Web Application Development',
        description:
            'Full-stack web applications with modern frameworks, clean component architecture, and performance-optimized experiences.',
    },
    {
        number: '04',
        title: 'Business Websites & Landing Pages',
        description:
            'High-converting websites and landing pages engineered to capture leads, build credibility, and accelerate your growth.',
    },
];

const ServiceRow = ({ service }) => {
    const rowRef = useRef(null);

    useGSAP(
        () => {
            const row = rowRef.current;
            if (!row) return;

            const number = row.querySelector('.service-number');
            const title = row.querySelector('.service-title');
            const desc = row.querySelector('.service-desc');
            const line = row.querySelector('.service-line');

            gsap.set([number, title, desc], { opacity: 0, y: 40 });
            gsap.set(line, { scaleX: 0, transformOrigin: 'left center' });

            ScrollTrigger.create({
                trigger: row,
                start: 'top 85%',
                once: true,
                onEnter: () => {
                    const tl = gsap.timeline();
                    tl.to(line, { scaleX: 1, duration: 0.8, ease: 'power3.inOut' })
                        .to(number, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
                        .to(title, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
                        .to(desc, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3');
                },
            });
        },
        { scope: rowRef }
    );

    return (
        <div ref={rowRef} className="group cursor-default">
            {/* Top line */}
            <div className="service-line w-full h-px bg-zinc-800" />

            <div className="py-8 sm:py-12 md:py-16 flex flex-col gap-6 md:gap-0 md:flex-row md:items-start">
                {/* Number */}
                <span
                    className="service-number text-zinc-600 group-hover:text-zinc-400 text-sm sm:text-base font-mono tracking-widest transition-colors duration-500 md:w-24 shrink-0"
                    style={{ fontFamily: 'Ari, sans-serif' }}
                >
                    {service.number}
                </span>

                {/* Title & Description */}
                <div className="flex-1 flex flex-col gap-4 md:gap-6">
                    <h3 className="service-title text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium text-white/80 group-hover:text-white tracking-tight transition-colors duration-500 leading-tight">
                        {service.title}
                    </h3>
                    <p className="service-desc text-gray-500 group-hover:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl transition-colors duration-500">
                        {service.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <section
            id="services"
            className="bg-black text-white py-20 px-6 rounded-t-[50px] border-t border-zinc-800 md:px-12 lg:px-25 w-full flex flex-col items-center"
        >
            {/* Section Title */}
            <div className="w-full flex justify-center mb-16 sm:mb-24">
                <Shuffle
                    text="Services"
                    shuffleDirection="right"
                    duration={0.35}
                    animationMode="evenodd"
                    shuffleTimes={1}
                    ease="power3.out"
                    stagger={0.03}
                    threshold={0.1}
                    triggerOnce={true}
                    triggerOnHover={true}
                    respectReducedMotion={true}
                    className="text-gray-400 text-[25px] md:text-[40px] uppercase tracking-widest"
                    style={{ fontFamily: 'Ari, sans-serif' }}
                />
            </div>

            {/* Service Rows */}
            <div className="w-full max-w-6xl">
                {services.map((service, index) => (
                    <ServiceRow key={index} service={service} index={index} />
                ))}
                {/* Bottom line */}
                <div className="w-full h-px bg-zinc-800" />
            </div>
        </section>
    );
};

export default Services;
