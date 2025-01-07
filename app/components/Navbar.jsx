'use client';

import { useEffect, useRef, useState } from 'react';
import { mainTitle } from '../constant/Text';
import { BorderBeam } from './ui/border-beam';
import gsap from 'gsap';

export const Navbar = () => {
    const containerLogo = useRef(null);
    const hoverLogo = useRef(true);
    const twitter = useRef(null);
    const hoverTwitter = useRef(true);

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        const updateAnimationStatus = () => {
            hoverLogo.current = mediaQuery.matches;
        };
        updateAnimationStatus();
        mediaQuery.addEventListener('change', updateAnimationStatus);

        return () => mediaQuery.removeEventListener('change', updateAnimationStatus);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos > 70) { 
                setIsNavbarVisible(false);
            } else {
                setIsNavbarVisible(true);
            }

            if (currentScrollPos > prevScrollPos && currentScrollPos > 70) {
                setIsNavbarVisible(false); 
            } else if (currentScrollPos < prevScrollPos) {
                setIsNavbarVisible(true);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const handleMouseEnterLogo = () => {
        if (!hoverLogo.current) return;
        gsap.to(containerLogo.current.children, {
            y: -30,
            duration: 0.3,
            ease: 'power1.out',
        });
    };

    const handleMouseLeaveLogo = () => {
        if (!hoverLogo.current) return;
        gsap.to(containerLogo.current.children, {
            y: 0,
            duration: 0.3,
            ease: 'power1.in',
        });
    };

    const handleTwitterHoverEnter = () => {
        if (!hoverTwitter.current) return;
        gsap.to(twitter.current.children, {
            y: -30,
            duration: 0.3,
            ease: 'power1.out',
        });
    };

    const handleTwitterHoverLeave = () => {
        if (!hoverTwitter.current) return;
        gsap.to(twitter.current.children, {
            y: 0,
            duration: 0.3,
            ease: 'power1.in',
        });
    };

    return (
        <div
            className={`fixed flex items-center justify-between px-8 py-10 md:py-3 w-full z-[999] transition-all duration-300 ease-in-out ${
                isNavbarVisible ? 'top-0' : '-top-[100px]'
            }`}
        >
            <div className="flex gap-1 md:gap-3 items-center">
                <img
                    src="https://framerusercontent.com/images/NNinEwTGKsz4wKs1Zzb0ABP41Dc.png"
                    className="hidden md:block md:w-7 object-cover"
                    alt=""
                />

                <div>
                    <div
                        ref={containerLogo}
                        className="flex flex-col overflow-hidden w-full md:h-7 cursor-pointer"
                        onMouseEnter={handleMouseEnterLogo}
                        onMouseLeave={handleMouseLeaveLogo}
                    >
                        <h1 className="text-[5vw] leading-[100%] md:text-xl">{mainTitle}</h1>
                        <h1 className="hidden md:flex text-[5vw] leading-[100%] md:text-xl text-blue-500">{mainTitle}</h1>
                    </div>
                </div>
            </div>

            <nav className="hidden md:flex w-full justify-center items-center py-4 left-0 right-0 z-[9999]">
                <ul className="flex gap-8 border-2 border-[#232323] px-6 py-3 rounded-xl backdrop-blur-lg">
                    <li className="relative group">
                        <a href="#projects">Projects</a>
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"></div>
                    </li>
                    <li className="relative group">
                        <a href="#promise">Promise</a>
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"></div>
                    </li>
                    <li className="relative group">
                        <a href="#github">Github</a>
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"></div>
                    </li>
                    <li className="relative group">
                        <a href="#articles">Articles</a>
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"></div>
                    </li>
                    <li
                        ref={twitter}
                        className="flex flex-col gap-2 items-center md:h-7 overflow-hidden"
                        onMouseEnter={handleTwitterHoverEnter}
                        onMouseLeave={handleTwitterHoverLeave}
                    >
                        <a href="" target="_blank" className="flex gap-2 items-center">
                            <h1>X(Twitter)</h1>
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-[4vw] md:size-6 text-blue-300 "
                            >
                                <path
                                    d="M5 12H19M19 12L12 5M19 12L12 19"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>

                        <a href="" target="_blank" className="flex gap-2 items-center">
                            <h1>X(Twitter)</h1>
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-[4vw] md:size-6 text-blue-300 rotate-[-45deg]"
                            >
                                <path
                                    d="M5 12H19M19 12L12 5M19 12L12 19"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>

            <div>
                <button className="hidden md:flex relative items-center px-3 md:px-8 py-4 rounded-lg border border-[#232323]">
                    <h1 className="leading-[100%]">$ECHO</h1>
                    <BorderBeam />
                </button>
            </div>

            <button className="fixed hidden md:flex bottom-10 right-10 gap-3 items-center px-8 py-4 rounded-lg border border-[#232323]">
                <h1>ECHO</h1>
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-[1vw] text-blue-300 rotate-[-45deg]"
                >
                    <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <BorderBeam />
            </button>
        </div>
    );
};
