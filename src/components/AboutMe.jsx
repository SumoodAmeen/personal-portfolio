import React from 'react';
import profileImg from '../assets/IMG_6628.JPG';
import Shuffle from './ui/Shuffle'


const AboutMe = () => {
    return (
        <section id="about" className="bg-black text-white py-20 px-6 rounded-t-[50px] border border-zinc-800 md:px-2 lg:px-12 w-full flex flex-col items-center">
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
                    <h2 className="text-5xl md:text-8xl font-light tracking-tight">
                        Mohammed Sumood Ameen
                    </h2>

                    <p className="text-gray-400 text-xl leading-relaxed w-3xl">
                        I'm Sumood, a passionate Developer & Designer based in [Location].
                        I specialize in crafting digital experiences that captivate and inspire,
                        blending creativity with functionality to elevate products. The sjdh dhfg hdjdhd dhdh hdhff sfjfsj,
                        dhfj dhjsdfn dfhdsfjh fh d jdje xhd jjs shhdhd djhsj. The sjdh dhfg hdjdhd dhdh hdhff sfjfsj,
                        dhfj dhjsdfn dfhdsfjh fh d jdje xhd jjs shhdhd djhsj. The sjdh dhfg hdjdhd dhdh hdhff sfjfsj,
                        dhfj dhjsdfn dfhdsfjh fh d jdje xhd jjs shhdhd djhsj.
                    </p>

                    <div className="w-full h-px bg-gray-800 my-8"></div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                        {['Web Development', 'UI/UX Design', 'React', 'Tailwind', 'Python', 'Django'].map((skill, index) => (
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
