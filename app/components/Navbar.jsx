'use client';

import { useEffect, useRef, useState } from 'react';
import { mainTitle } from '../constant/Text';
import { BorderBeam } from './ui/border-beam';
import gsap from 'gsap';
import { Sling as Hamburger } from 'hamburger-react'

export const Navbar = () => {
    const containerLogo = useRef(null);
    const hoverLogo = useRef(true);
    const twitter = useRef(null);
    const hoverTwitter = useRef(true);

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        const updateAnimationStatus = () => {
            hoverLogo.current = mediaQuery.matches;
        };
        updateAnimationStatus();
        mediaQuery.addEventListener('change', updateAnimationStatus);


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
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            mediaQuery.removeEventListener('change', updateAnimationStatus);
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'auto';
        };
    }, [prevScrollPos, isOpen]); 


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
            className={`fixed flex items-center justify-between px-4 md:px-8 py-8 md:py-3 w-full z-[999] transition-all duration-300 ease-in-out ${
                isNavbarVisible ? 'top-0' : '-top-[100px]'
            }`}
        >
            <img
                src="/imgs/echo-logo.png"
                className=" w-24 md:w-32 object-cover"
                alt=""
            />

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
                <button className="hidden md:flex relative items-center px-3 md:px-8 py-4 rounded-lg border bg-white/5 backdrop-blur-sm border-[#232323]">
                    <h1 className="leading-[100%]">$ECHO</h1>
                    <BorderBeam />
                </button>
            </div>

            {/* Sidebar */}
            <div className='flex md:hidden'>
                <div className="rounded-full  border-2  border-[#232323] z-[99] ">
                    <Hamburger distance='sm' size={24} rounded={true} toggled={isOpen} toggle={setOpen} />
                </div>

                <nav className={`fixed top-0 right-0 left-0 flex flex-col gap-7 h-full bg-black p-8 transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-[100%]'}`}>
                    
                    <h1 className="text-[5vw] pt-4 leading-[100%]">{mainTitle}</h1>
                        
                    <ul className="text-white flex flex-col gap-8 text-[8vw]">
                        <li className='border-b pb-[4vw]'>
                            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
                        </li>
                        <li className='border-b pb-[4vw]'>
                            <a href="#promise" onClick={() => setOpen(false)}>Promise</a>
                        </li>
                        <li className='border-b pb-[4vw]'>
                            <a href="#github" onClick={() => setOpen(false)}>Github</a>
                        </li>
                        <li className='border-b pb-[4vw]'>
                            <a href="#articles" onClick={() => setOpen(false)}>Articles</a>
                        </li>
                        <li className='border-b pb-[4vw]'>
                            <a href="#" target="_blank" onClick={() => setOpen(false)}>X(Twitter)</a>
                        </li>
                    </ul>

                    <div className="flex mt-auto justify-between items-center">
                        <div className="flex gap-6 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"} className='size-8'>
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"} className='size-8'>
                                <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <button className="relative flex md:hidden gap-3 items-center px-8 py-4 rounded-lg border border-[#232323]">
                            <h1>ECHO</h1>
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-[3.5vw] text-blue-300 rotate-[-45deg]"
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
                </nav>
            </div>

            <button className="fixed hidden md:flex bottom-10 right-10 gap-3 items-center px-8 py-4 rounded-lg bg-white/5 backdrop-blur-sm border border-[#232323]">
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
