import React from 'react';
import placeholderImage from '../assets/IMG_6628.JPG';
import Pill from '../assets/works/pill.PNG'
import Insurva from '../assets/works/insurva.png'
import Portfolio from '../assets/works/portfolio.PNG'
import Security from '../assets/works/security.PNG'
import Houseboat from '../assets/works/houseboat.PNG'

const Routes = () => {
    // Project data - you can replace these with actual project data later
    const projects = [
        { id: 1, image: Pill, title: 'Project 1' },
        { id: 2, image: placeholderImage, title: 'Project 2' },
        { id: 3, image: Portfolio, title: 'Project 3' },
        { id: 4, image: Security, title: 'Project 4' },
        { id: 5, image: Houseboat, title: 'Project 5' },
        { id: 6, image: Insurva, title: 'Project 6' },
        { id: 7, image: placeholderImage, title: 'Project 7' },
        { id: 8, image: placeholderImage, title: 'Project 8' },
        { id: 9, image: placeholderImage, title: 'Project 9' },
    ];

    // Organize projects into columns
    const column1 = [projects[0], projects[3], projects[6]];
    const column2 = [projects[1], projects[4], projects[7]];
    const column3 = [projects[2], projects[5], projects[8]];

    const ProjectCard = ({ project, isLarge }) => (
        <div
            className={`relative overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 hover:scale-[1.02] group ${isLarge ? 'aspect-square' : 'aspect-square'
                }`}
        >
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-[1%] transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent flex justify-center items-end">
                <button className="flex items-center gap-1.5 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-medium cursor-pointer transition-all duration-300 hover:bg-white/25 hover:-translate-y-0.5 whitespace-nowrap">
                    <span>View Casestudy</span>
                    <svg
                        className="w-2.5 h-2.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                    </svg>
                </button>
            </div>
        </div>
    );

    return (
        <section className="w-full min-h-screen bg-black py-16 px-8 flex justify-center items-center">
            <div className="w-full flex flex-col items-center gap-12">
                {/* Projects Grid */}
                <div className="grid grid-cols-[1fr_1.3fr_1fr] gap-4 w-full items-center max-md:grid-cols-2 max-sm:grid-cols-1">
                    {/* Column 1 - Small images */}
                    <div className="flex flex-col gap-4">
                        {column1.map((project) => (
                            <ProjectCard key={project.id} project={project} isLarge={false} />
                        ))}
                    </div>

                    {/* Column 2 - Large/tall images */}
                    <div className="flex flex-col gap-4 max-md:-order-1">
                        {column2.map((project) => (
                            <ProjectCard key={project.id} project={project} isLarge={true} />
                        ))}
                    </div>

                    {/* Column 3 - Small images */}
                    <div className="flex flex-col gap-4">
                        {column3.map((project) => (
                            <ProjectCard key={project.id} project={project} isLarge={false} />
                        ))}
                    </div>
                </div>

                {/* Bottom buttons */}
                <div className="flex gap-4 justify-center items-center flex-wrap max-sm:flex-col max-sm:w-full">
                    <button className="px-6 py-3 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white/50 max-sm:w-full max-sm:justify-center">
                        All Projects
                    </button>
                    <button className="px-6 py-3 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 bg-white/15 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 hover:-translate-y-0.5 max-sm:w-full max-sm:justify-center">
                        Book a Free Call
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Routes;
