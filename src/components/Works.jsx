import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Shuffle from './ui/Shuffle';

import houseboatImg from '../assets/works/houseboat.PNG';
import insurvaImg from '../assets/works/insurva.png';
import pillImg from '../assets/works/pill.PNG';
import portfolioImg from '../assets/works/portfolio.PNG';
import securityImg from '../assets/works/security.PNG';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        number: '01',
        title: 'Houseboat Booking',
        year: '2024',
        tags: ['React', 'Node.js', 'MongoDB'],
        image: houseboatImg,
        href: '#',
    },
    {
        number: '02',
        title: 'Insurva',
        year: '2024',
        tags: ['Next.js', 'Django', 'PostgreSQL'],
        image: insurvaImg,
        href: '#',
    },
    {
        number: '03',
        title: 'Pill Reminder',
        year: '2023',
        tags: ['React', 'Express.js', 'MongoDB'],
        image: pillImg,
        href: '#',
    },
    {
        number: '04',
        title: 'Portfolio',
        year: '2024',
        tags: ['React', 'GSAP', 'Tailwind'],
        image: portfolioImg,
        href: '#',
    },
    {
        number: '05',
        title: 'Security Platform',
        year: '2023',
        tags: ['React', 'Python', 'PostgreSQL'],
        image: securityImg,
        href: '#',
    },
];

const FloatingImage = ({ image, visible, position }) => {
    const imgRef = useRef(null);

    useEffect(() => {
        if (!imgRef.current) return;
        gsap.to(imgRef.current, {
            x: position.x,
            y: position.y,
            opacity: visible ? 1 : 0,
            scale: visible ? 1 : 0.85,
            duration: 0.4,
            ease: 'power3.out',
        });
    }, [position, visible]);

    return (
        <div
            ref={imgRef}
            className="fixed top-0 left-0 z-40 pointer-events-none w-[280px] md:w-[340px] aspect-[16/10] rounded-lg overflow-hidden opacity-0 hidden md:block"
            style={{ willChange: 'transform, opacity' }}
        >
            <img
                src={image}
                alt=""
                className="w-full h-full object-cover"
            />
        </div>
    );
};

const ProjectRow = ({ project, onHover, onLeave, onMouseMove }) => {
    const rowRef = useRef(null);

    useGSAP(
        () => {
            const row = rowRef.current;
            if (!row) return;

            const number = row.querySelector('.work-number');
            const title = row.querySelector('.work-title');
            const meta = row.querySelector('.work-meta');
            const line = row.querySelector('.work-line');

            gsap.set([number, title, meta], { opacity: 0, y: 40 });
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
                        .to(meta, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3');
                },
            });
        },
        { scope: rowRef }
    );

    return (
        <a
            ref={rowRef}
            href={project.href}
            className="group block cursor-pointer"
            onMouseEnter={() => onHover(project)}
            onMouseLeave={onLeave}
            onMouseMove={onMouseMove}
        >
            <div className="work-line w-full h-px bg-zinc-800" />

            <div className="py-8 sm:py-10 md:py-14 flex items-baseline gap-4 sm:gap-6 md:gap-0 md:items-center">
                {/* Number */}
                <span
                    className="work-number text-zinc-600 group-hover:text-zinc-400 text-sm font-mono tracking-widest transition-colors duration-500 md:w-20 shrink-0"
                    style={{ fontFamily: 'Ari, sans-serif' }}
                >
                    {project.number}
                </span>

                {/* Title */}
                <h3 className="work-title text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium text-white/80 group-hover:text-white tracking-tight transition-colors duration-500 leading-tight flex-1">
                    {project.title}
                </h3>

                {/* Meta — tags + year */}
                <div className="work-meta hidden md:flex items-center gap-6 shrink-0">
                    <div className="flex gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs text-zinc-600 group-hover:text-zinc-400 tracking-wide uppercase transition-colors duration-500"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <span
                        className="text-zinc-600 group-hover:text-zinc-400 text-sm font-mono transition-colors duration-500"
                        style={{ fontFamily: 'Ari, sans-serif' }}
                    >
                        {project.year}
                    </span>
                </div>
            </div>
        </a>
    );
};

const Works = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleHover = (project) => {
        setHoveredProject(project);
    };

    const handleLeave = () => {
        setHoveredProject(null);
    };

    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX + 20, y: e.clientY - 140 });
    };

    return (
        <section
            id="works"
            className="bg-black text-white py-20 px-6 rounded-t-[50px] border-t border-zinc-800 md:px-12 lg:px-25 w-full flex flex-col items-center"
        >
            {/* Floating cursor image */}
            <FloatingImage
                image={hoveredProject?.image || houseboatImg}
                visible={!!hoveredProject}
                position={mousePos}
            />

            {/* Section Title */}
            <div className="w-full flex justify-center mb-16 sm:mb-24">
                <Shuffle
                    text="Works"
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

            {/* Project List */}
            <div className="w-full max-w-6xl">
                {projects.map((project) => (
                    <ProjectRow
                        key={project.number}
                        project={project}
                        onHover={handleHover}
                        onLeave={handleLeave}
                        onMouseMove={handleMouseMove}
                    />
                ))}
                {/* Bottom line */}
                <div className="w-full h-px bg-zinc-800" />
            </div>
        </section>
    );
};

export default Works;
