import React from 'react';

import houseboatImg from '../assets/works/houseboat.PNG';
import insurvaImg from '../assets/works/insurva.png';
import pillImg from '../assets/works/pill.PNG';
import portfolioImg from '../assets/works/portfolio.PNG';
import securityImg from '../assets/works/security.PNG';

const projects = [
    {
        title: 'Houseboat Booking',
        category: 'Web Development',
        year: '2024',
        image: houseboatImg,
        url: '#',
    },
    {
        title: 'Insurva',
        category: 'Web Development',
        year: '2024',
        image: insurvaImg,
        url: 'https://insurvaassist.com/',
    },
    {
        title: 'Pill Reminder',
        category: 'Mobile App',
        year: '2023',
        image: pillImg,
        url: '#',
    },
    {
        title: 'Portfolio',
        category: 'Web Design',
        year: '2024',
        image: portfolioImg,
        url: 'https://www.sumoodameen.xyz/',
    },
    {
        title: 'Security Platform',
        category: 'Web Development',
        year: '2023',
        image: securityImg,
        url: 'https://www.axinorsecurity.com/',
    },
];

const Works = () => {
    return (
        <section
            id="works"
            className="relative bg-black text-white rounded-t-[50px] border-t border-zinc-800 w-full overflow-hidden px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24"
        >
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8 mb-10 md:mb-14">
                    <h2
                        className="font-black leading-[0.85] tracking-tighter uppercase"
                        style={{
                            fontFamily: 'Ari, sans-serif',
                            fontSize: 'clamp(3rem, 10vw, 9rem)',
                            letterSpacing: '-0.04em',
                        }}
                    >
                        Selected
                        <br />
                        Work
                    </h2>
                    <p className="text-[10px] sm:text-xs uppercase text-zinc-400 tracking-[0.15em] leading-relaxed max-w-xs md:text-right md:pt-4">
                        Impactful solutions that
                        <br className="hidden md:block" /> stand out,
                        capture attention,
                        <br className="hidden md:block" /> and drive measurable
                        success
                    </p>
                </div>

                {/* Latest work label */}
                <div className="text-[10px] sm:text-xs uppercase text-zinc-500 tracking-[0.2em] mb-5 md:mb-6">
                    Latest Work
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {projects.map((project) => (
                        <a
                            key={project.title}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-zinc-900/80 rounded-2xl md:rounded-3xl p-3 md:p-4 border border-zinc-800/60 transition-colors hover:border-zinc-700"
                        >
                            <div className="overflow-hidden rounded-xl md:rounded-2xl bg-zinc-800 aspect-[16/10]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>

                            <div className="flex items-end justify-between mt-4 md:mt-5 px-1 md:px-2">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <span className="flex gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                                        </span>
                                        <span className="text-sm md:text-base font-medium text-white">
                                            {project.title}
                                        </span>
                                    </div>
                                    <span className="text-[10px] sm:text-xs text-zinc-500 ml-[22px]">
                                        {project.category}
                                    </span>
                                </div>
                                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors">
                                    Explore
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;
