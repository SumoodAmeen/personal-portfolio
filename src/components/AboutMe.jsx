import React from 'react';
import profileImg from '../assets/IMG_6628.JPG';
import Shuffle from './ui/Shuffle'


const AboutMe = () => {
    return (
        <section id="about" className="bg-black text-white py-20 px-6 rounded-t-[50px] border-t border-zinc-800 md:px-2 lg:px-25 w-full flex flex-col items-center">
            {/* Centered Section Title */}
            <div className="w-full flex justify-center mb-16">
                <Shuffle
                    text="About Me"
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
                    className="text-gray-400 text-[40px] uppercase tracking-widest"
                    style={{ fontFamily: 'Ari, sans-serif' }}
                />
            </div>

            <div className="w-full flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
                {/* Left Side: Text Content */}
                <div className="flex-1 space-y-8">
                    <h2 className="text-xl md:text-8xl font-medium tracking-tight">
                        Mohammed Sumood Ameen
                    </h2>

                    <p className="text-gray-400 text-xl leading-relaxed w-3xl">
                        I am a Software Developer with a strong focus on building modern, scalable web applications, specializing
                        in React-based development. I work extensively with React, Vite, and Next.js to create fast, responsive,
                        and performance-optimized user interfaces, with an emphasis on clean component architecture, reusability,
                        and seamless user experience. <br />

                        Alongside frontend development, I build reliable backend systems using Django, and manage data-driven applications
                        with PostgreSQL, MySQL, and SQLite. I am comfortable handling the full development lifecycle, from translating
                        requirements into functional features to deployment and ongoing maintenance. <br />

                        I have successfully delivered and hosted multiple production-level and client projects, collaborating with teams and
                        stakeholders to ship stable, real-world solutions. My workflow includes Git and GitHub for version control and
                        collaborative development. Currently, I am working as a Software Developer, continuously improving my React expertise
                        while contributing to live applications.
                    </p>

                    <div className="w-full h-px bg-gray-800 my-8"></div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                        {['React.js', 'Vite', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'Web Development', 'Python', 'Django'].map((skill, index) => (
                            <span
                                key={index}
                                className="px-6 py-6 bg-zinc-900 border border-zinc-800 rounded-lg text-lg text-gray-300 hover:bg-zinc-800 transition-colors cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    <div className="w-full h-px bg-gray-800 my-8"></div>

                    {/* Experience List */}
                    <div className="space-y-6 text-gray-400 text-lg">
                        <div className="flex justify-between items-center group hover:text-white transition-colors">
                            <span className="w-1/3">Freelance</span>
                            <span className="w-1/3">Self Employed</span>
                            <span className="w-1/3 text-right">2024 - Present</span>
                        </div>
                        <div className="flex justify-between items-center group hover:text-white transition-colors">
                            <span className="w-1/3">Frontend Dev</span>
                            <span className="w-1/3">Tech Studio</span>
                            <span className="w-1/3 text-right">2023 - 2024</span>
                        </div>
                        <div className="flex justify-between items-center group hover:text-white transition-colors">
                            <span className="w-1/3">Intern</span>
                            <span className="w-1/3">Creative Agency</span>
                            <span className="w-1/3 text-right">2022 - 2023</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="flex-1 w-full flex justify-center md:justify-end">
                    <div className="relative w-full max-w-xl aspect-square bg-zinc-900 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                        <img
                            src={profileImg}
                            alt="Sumood Ameen"
                            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
