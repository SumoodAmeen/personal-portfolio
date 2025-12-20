import React from 'react';
import profileImg from '../assets/IMG_6628.JPG';
import Shuffle from './ui/Shuffle'


const Services = () => {
    return (
        <section id="about" className="bg-black h-screen text-white py-20 px-6 rounded-t-[50px] border-t border-zinc-800 md:px-2 lg:px-25 w-full flex flex-col items-center">
            {/* Centered Section Title */}
            <div className="w-full flex justify-center mb-16">
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
                    className="text-gray-400 text-[40px] uppercase tracking-widest"
                    style={{ fontFamily: 'Ari, sans-serif' }}
                />
            </div>
            <div className="w-full flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
            </div>
        </section>
    );
};

export default Services;
