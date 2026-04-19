import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import houseboatImg from '../assets/works/houseboat.PNG';
import insurvaImg from '../assets/works/insurva.png';
import pillImg from '../assets/works/pill.PNG';
import portfolioImg from '../assets/works/portfolio.PNG';
import securityImg from '../assets/works/security.PNG';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { title: 'Houseboat Booking', year: '2024', image: houseboatImg },
    { title: 'Insurva', year: '2024', image: insurvaImg },
    { title: 'Pill Reminder', year: '2023', image: pillImg },
    { title: 'Portfolio', year: '2024', image: portfolioImg },
    { title: 'Security Platform', year: '2023', image: securityImg },
];

const years = projects.map((p) => parseInt(p.year, 10));
const yearRange = `(${Math.min(...years)}—${Math.max(...years)})`;

const Works = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const h2Ref = useRef(null);
    const workRowRef = useRef(null);
    const spacerRef = useRef(null);
    const cardRef = useRef(null);
    const [idx, setIdx] = useState(0);

    useGSAP(
        () => {
            const section = sectionRef.current;
            const text = textRef.current;
            const h2 = h2Ref.current;
            const workRow = workRowRef.current;
            const spacer = spacerRef.current;
            const card = cardRef.current;
            if (!section || !text || !h2 || !workRow || !spacer || !card) return;

            const ar = 10 / 16;

            const measureWorkCenter = () => {
                const sRect = section.getBoundingClientRect();
                const wRect = workRow.getBoundingClientRect();
                const tTransform = gsap.getProperty(text, 'y') || 0;
                return wRect.top - sRect.top + wRect.height / 2 - Number(tTransform);
            };

            const getSizes = () => {
                const vw = window.innerWidth;
                const vh = window.innerHeight;
                const isMobile = vw < 768;
                const startW = isMobile ? 150 : 360;
                const startH = startW * ar;
                const endW = isMobile
                    ? Math.min(vw * 0.88, 420)
                    : Math.min(vw * 0.5, 560);
                const workCenterY = measureWorkCenter();
                const startTop = workCenterY - startH / 2;
                const cardDrop = vh * (isMobile ? 0.18 : 0.22);
                const endTop = startTop + cardDrop;
                const textTravel = vh * (isMobile ? 0.38 : 0.4);
                return {
                    vw,
                    vh,
                    isMobile,
                    startW,
                    endW,
                    startTop,
                    endTop,
                    textTravel,
                };
            };

            const { startW, startTop } = getSizes();
            gsap.set(spacer, { width: startW });
            gsap.set(card, { width: startW, top: startTop });
            gsap.set(h2, { '--lh': 0.85 });
            h2.style.lineHeight = '0.85';

            const st = ScrollTrigger.create({
                trigger: section,
                start: 'top top',
                end: () => `+=${window.innerHeight * 3}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                onRefresh: () => {
                    const { startW, startTop } = getSizes();
                    gsap.set(spacer, { width: startW });
                    gsap.set(card, { width: startW, top: startTop });
                },
                onUpdate: (self) => {
                    const p = self.progress;
                    const { startW, endW, startTop, endTop, textTravel } = getSizes();

                    gsap.set(text, { y: -textTravel * p });
                    h2.style.lineHeight = `${0.85 - 0.2 * p}`;
                    gsap.set(spacer, { width: startW * (1 - p) });
                    gsap.set(card, {
                        width: startW + (endW - startW) * p,
                        top: startTop + (endTop - startTop) * p,
                    });

                    const imgP = Math.min(p / 0.95, 1);
                    const nextIdx = Math.min(
                        Math.floor(imgP * projects.length),
                        projects.length - 1
                    );
                    setIdx((prev) => (prev !== nextIdx ? nextIdx : prev));
                },
            });

            return () => st.kill();
        },
        { scope: sectionRef }
    );

    return (
        <section
            id="works"
            ref={sectionRef}
            className="relative bg-black text-white rounded-t-[50px] border-t border-zinc-800 w-full overflow-hidden"
            style={{ height: '100dvh' }}
        >
            {/* Text layer */}
            <div
                ref={textRef}
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none will-change-transform"
            >
                <h2
                    ref={h2Ref}
                    className="font-black select-none w-full"
                    style={{
                        fontSize: 'clamp(3.5rem, 19vw, 22rem)',
                        fontFamily: 'Ari, sans-serif',
                        letterSpacing: '-0.04em',
                        lineHeight: 0.85,
                    }}
                >
                    <div className="text-center">PREMIUM</div>
                    <div
                        ref={workRowRef}
                        className="flex items-center justify-center"
                    >
                        <span>WO</span>
                        <div
                            ref={spacerRef}
                            className="shrink-0"
                            style={{ width: 0 }}
                            aria-hidden
                        />
                        <span>RK</span>
                    </div>
                </h2>
            </div>

            {/* Card layer */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <div
                    ref={cardRef}
                    className="absolute left-1/2 -translate-x-1/2"
                    style={{ top: 0, width: 0 }}
                >
                    <div
                        className="bg-zinc-900 overflow-hidden shadow-xl relative"
                        style={{ aspectRatio: '16 / 10' }}
                    >
                        {projects.map((project, i) => (
                            <img
                                key={project.title}
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out"
                                style={{ opacity: i === idx ? 1 : 0 }}
                            />
                        ))}
                    </div>
                    <div
                        className="flex justify-between mt-2 sm:mt-3 text-[10px] sm:text-xs text-zinc-400 font-normal whitespace-nowrap"
                        style={{ fontFamily: 'sans-serif', letterSpacing: 'normal' }}
                    >
                        <span>Client work</span>
                        <span>{yearRange}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;
