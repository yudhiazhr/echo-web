'use client'
import { Navbar } from "@/app/components/Navbar"
import Globe from "@/app/components/ui/globe"
import Marquee from "@/app/components/ui/marquee"
import Particles from "@/app/components/ui/particles"
import { cardDebug, copyHero, debug, detailDebug, detailTas, detailTranslator, faqs, mainTitle, tas, titleAbout, titleArticles, titleFAQ, titleGithub, titleHero, titleInformed, titleProject, titlePromise, translator } from "@/app/constant/Text"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useEffect, useRef, useState } from "react"

export const Index = () => {
    gsap.registerPlugin(ScrollTrigger)
    const [openFAQs, setOpenFAQs] = useState([]);

    const toggleFAQ = (index) => {
      setOpenFAQs((prevOpenFAQs) =>
        prevOpenFAQs.includes(index)
          ? prevOpenFAQs.filter((i) => i !== index)
          : [...prevOpenFAQs, index]
      );
    };

    const partnership = [
        {
            img: "https://pngimg.com/d/meta_PNG6.png",
        },
        {
            img: "https://pngimg.com/d/tesla_logo_PNG18.png",
        },
        {
            img: "https://freepnglogo.com/images/all_img/1724867280chatgpt-logo-white-transparent.png",
        },
        {
            img: "https://pngimg.com/d/meta_PNG6.png",
        },
        {
            img: "https://pngimg.com/d/tesla_logo_PNG18.png",
        },
        {
            img: "https://freepnglogo.com/images/all_img/1724867280chatgpt-logo-white-transparent.png",
        },
    ];

    const firstRow = partnership.slice(0, partnership.length / 2);
    const secondRow = partnership.slice(partnership.length / 2);

    const twitter = useRef(null);
    const hoverTwitter = useRef(true)
    const tryEcho = useRef(null);
    const hoverTryEcho = useRef(true);

    useEffect(() => {
        gsap.fromTo(
            ".word, .word1",
            { color: "#232323" },
            {
              color: (i, target) => {
                return target.classList.contains("word1") ? "#3b82f6" : "white"; 
              },
              stagger: 0.2,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".About",
                start: "top 80%",
                end: "top 80%",
              },
            }
          );


        const mediaQuery = window.matchMedia('(min-width: 768px)');
        const updateAnimationStatus = () => {
            hoverTwitter.current = mediaQuery.matches;
            hoverTryEcho.current = mediaQuery.matches;
        };
        updateAnimationStatus();
        mediaQuery.addEventListener('change', updateAnimationStatus);

        return () => {
            mediaQuery.removeEventListener('change', updateAnimationStatus)
        };

    }, []);


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

    const handleTryEchoHoverEnter = () => {
        if (!hoverTryEcho.current) return;
        gsap.to(tryEcho.current.children, {
            y: -41.5,
            duration: 0.3,
            ease: 'power1.out',
        });
    };

    const handleTryEchoHoverLeave = () => {
        if (!hoverTryEcho.current) return;
        gsap.to(tryEcho.current.children, {
            y: 0,
            duration: 0.3,
            ease: 'power1.in',
        });
    };

    return(
        <>  
            {/* Hero */}
            <Navbar/>
            <section id="/" className="Hero relative flex flex-col gap-[6vw] md:gap-[1.875vw] justify-center items-center min-h-dvh overflow-hidden ">

                <div className="absolute top-[-10vw] left-[-8vw] w-[30vw] h-[30vw] rounded-full bg-purple-900/30 blur-[100px] z-[1]"></div>
                <div className="absolute bottom-[-33vw] right-[-60vw] md:bottom-[-10vw] md:right-[-8vw] w-[120vw] h-[120vw] md:w-[30vw] md:h-[30vw] rounded-full bg-purple-900/30 blur-[100px] z-[1]"></div>

                
                <h1 className=" w-[80%] text-center text-[12vw] md:text-[6.75vw] leading-[120%] z-[2]"
                    dangerouslySetInnerHTML={{ __html: titleHero }}
                />
                <p className="hidden md:flex text-[1.5vw] md:text-base leading-[100%] text-center px-12 z-[2]">{copyHero}</p>
                <div className="flex gap-3 z-[2]">
                    <button className="px-8 py-5 md:py-4 rounded-xl border-2 text-[3.5vw] md:text-lg leading-[100%] border-[#493e60]">
                       Articles
                    </button>
                    <button ref={tryEcho} onMouseEnter={handleTryEchoHoverEnter} onMouseLeave={handleTryEchoHoverLeave} className=" flex flex-col gap-3 items-center px-8 py-5 md:py-4 rounded-xl border-2 border-[#493e60] text-[3.5vw] md:text-lg overflow-hidden md:h-16 ">
                        <div className="flex gap-3 items-center">
                            <h1>Try ECHO</h1>
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[4vw] md:size-7 text-blue-300 rotate-[-45deg]">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="md:flex gap-3 hidden">
                            <h1>Try ECHO</h1>
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[4vw] md:size-7 text-blue-300">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </button>
                </div>

                <Particles
                    className="absolute inset-0 z-0"
                    quantity={70}
                    ease={80}
                    color={"#fff"}
                />
            </section>

            {/* About */}
            <section className="About relative flex justify-center items-center px-8 py-32 w-full overflow-hidden">
                <div className="absolute w-[120vw] h-[120vw] top-[-93vw] right-[-56.5vw] md:top-[-20vw] md:right-[-8vw] md:w-[30vw] md:h-[30vw] rounded-full bg-purple-900/30 blur-[100px]"></div>

                <h1 className="text-[8vw] md:text-[4.5vw] leading-[130%] md:leading-[110%] font-medium max-w-[1440px] "
                 dangerouslySetInnerHTML={{ __html: titleAbout }}/>

            </section>

            {/* Project */}
            <section id="projects" className="Projects min-h-dvh py-16 flex flex-col gap-16 overflow-hidden px-10">
                <h1 className=" text-[13vw] md:text-[4.5vw] leading-[130%] md:leading-[100%] font-medium"
                    dangerouslySetInnerHTML={{ __html: titleProject }}
                />

                <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {/* Card */}
                    <div className="flex flex-col gap-16 px-10 py-14 border border-[#232323] rounded-xl  bg-[#0c0c0b] w-full">
                        <div className="flex justify-center items-center border border-[#232323] rounded-xl h-72" >
                        </div>

                        <div className="flex flex-col gap-5">
                            <h1 className="text-[6vw] md:text-[3vw] xl:text-[2vw]">{cardDebug}</h1>
                            <p className="text-[3.5vw] md:text-lg text-[#7b7b7b]">{detailDebug}</p>
                        </div>
                    </div>

                    {/* Card */}
                    <div className="flex flex-col gap-16 px-10 py-14 border border-[#232323] rounded-xl  bg-[#0c0c0b] w-full">
                        <div className="flex justify-center items-center border border-[#232323] rounded-xl h-72" >
                        </div>

                        <div className="flex flex-col gap-5">
                            <h1 className="text-[6vw] md:text-[3vw] xl:text-[2vw]">{tas}</h1>
                            <p className="text-[3.5vw] md:text-lg text-[#7b7b7b]">{detailTas}</p>
                        </div>
                    </div>

                    {/* Card */}
                    <div className="flex flex-col gap-16 px-10 py-14 border border-[#232323] rounded-xl  bg-[#0c0c0b] w-full">
                        <div className="flex justify-center items-center border border-[#232323] rounded-xl h-72" >
                        </div>

                        <div className="flex flex-col gap-5">
                            <h1 className="text-[6vw] md:text-[3vw] xl:text-[2vw]">{translator}</h1>
                            <p className="text-[3.5vw] md:text-lg text-[#7b7b7b]">{detailTranslator}</p>
                        </div>
                    </div>
                </div>

            </section>

            {/* Promise */}
            <section id="promise" className="Promise min-h-dvh py-16 flex flex-col gap-16 overflow-hidden px-10">
                <h1 className="  text-[13vw] md:text-[4.5vw] leading-[130%] md:leading-[100%] font-medium"
                    dangerouslySetInnerHTML={{ __html: titlePromise }}
                />

                <div className="flex flex-col gap-8">
                    <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {/* Card */}
                        <div className="flex flex-col gap-16 px-10 py-14 border border-[#232323] rounded-xl bg-[#0c0c0b] w-full">
                            <div className="flex justify-center items-center border border-[#232323] rounded-xl h-72" >
                                
                            </div>

                            <div className="flex flex-col gap-5">
                                <h1 className="text-[6vw] md:text-[3vw] xl:text-[2vw]"><span className="text-blue-500">01.</span> Launch</h1>
                                <p className="text-[3.5vw] md:text-lg text-[#7b7b7b]">Officially lauch ECHO® and initiate token distribution to empower our growing community.</p>
                            </div>
                        </div>

                        {/* Card */}
                        <div className="flex flex-col gap-16 px-10 py-14 border border-[#232323] rounded-xl  bg-[#0c0c0b] w-full">
                            <div className="relative flex flex-col justify-center items-center border border-[#232323] rounded-xl h-72 overflow-hidden" >
                                <Marquee className="[--duration:20s]">
                                    {firstRow.map((partnership, index) => (
                                        <div className="flex justify-center items-center p-3 gap-5 rounded-xl bg-[#232323] overflow-hidden" key={index}>
                                            <img src={partnership.img} className="rounded-full w-[50px] md:w-[4vw]" alt="" />
                                        </div>
                                    ))}
                                </Marquee>
                                <Marquee reverse className="[--duration:20s]">
                                    {secondRow.map((partnership, index) => (
                                        <div className="flex justify-center items-center p-3 rounded-xl bg-[#232323] overflow-hidden" key={index}>
                                            <img src={partnership.img} className="rounded-full w-[50px] md:w-[4vw] " alt="" />
                                        </div>
                                    ))}
                                </Marquee>
                            </div>

                            <div className="flex flex-col gap-5">
                                <h1 className="text-[6vw] md:text-[3vw] xl:text-[2vw]"><span className="text-blue-500">02.</span> Partnerships</h1>
                                <p className="text-[3.5vw] md:text-lg text-[#7b7b7b]">Form alliances with learning blockchain platforms and technology innovators to expand ECHO®'s ecosystem.</p>
                            </div>
                        </div>

                        {/* Card */}
                        <div className="flex flex-col gap-16 px-10 py-14 border border-[#232323] rounded-xl  bg-[#0c0c0b] w-full">
                            <div className="flex justify-center items-center border border-[#232323] rounded-xl h-72" >
                            </div>

                            <div className="flex flex-col gap-5">
                                <h1 className="text-[6vw] md:text-[3vw] xl:text-[2vw]"><span className="text-blue-500">03.</span> AI Development</h1>
                                <p className="text-[3.5vw] md:text-lg text-[#7b7b7b]">Develop and enhance our AI-driven tools for autonomour code repair, debugging and optimization.</p>
                            </div>
                        </div>

                        {/* Card */}
                        <div className="hidden md:flex xl:hidden flex-col gap-16 px-10 py-14 border border-[#232323] rounded-xl  bg-[#0c0c0b] w-full">
                            <div className="flex justify-center items-center border border-[#232323] rounded-xl h-72" >
                            </div>

                            <div className="flex flex-col gap-5">
                                <h1 className="text-[6vw] md:text-[3vw] xl:text-[2vw]"><span className="text-blue-500">04.</span> AI Enhancement</h1>
                                <p className="text-[3.5vw] md:text-lg text-[#7b7b7b]">Continuously train our AI models for superior performance. Implement advanced AI algorithms across all supported platforms. Scale AI capabilities to handle diverse and complex codebases. </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
                        {/* Card */}
                        <div className="flex md:hidden xl:flex  flex-col gap-16 px-10 py-14 border border-[#232323] rounded-xl  bg-[#0c0c0b] w-full">
                            <div className="flex justify-center items-center border border-[#232323] rounded-xl h-72" >
                            </div>

                            <div className="flex flex-col gap-5">
                                <h1 className="text-[6vw] md:text-[3vw] xl:text-[2vw]"><span className="text-blue-500">04.</span> AI Enhancement</h1>
                                <p className="text-[3.5vw] md:text-lg text-[#7b7b7b]">Continuously train our AI models for superior performance. Implement advanced AI algorithms across all supported platforms. Scale AI capabilities to handle diverse and complex codebases. </p>
                            </div>
                        </div>

                        {/* Card */}
                        <div className="flex flex-col gap-16 px-10 py-14 border border-[#232323] rounded-xl  bg-[#0c0c0b] w-full">
                            <div className="relative flex justify-center items-center border border-[#232323] rounded-xl h-72 overflow-hidden" >
                                <Globe/>
                            </div>

                            <div className="flex flex-col gap-5">
                                <h1 className="text-[6vw] md:text-[3vw] xl:text-[2vw]"><span className="text-blue-500">05.</span> Global Expansion</h1>
                                <p className="text-[3.5vw] md:text-lg text-[#7b7b7b]">Deploy ECHO® globally, supporting multiple blockchain networks and serving a worldwide developer community. We'll also be releasing this model in all widely supported coding languages, including national spoke languages. </p>
                            </div>
                        </div>
                    </div>
                </div>
                

            </section>

            {/* Github */}
            <section id="github" className="Github py-24 flex flex-col gap-16 overflow-hidden px-10">
                <h1 className=" text-[13vw] md:text-[4.5vw] leading-[130%] md:leading-[100%] font-medium"
                    dangerouslySetInnerHTML={{ __html: titleGithub }}
                />

                <div className="flex flex-col gap-8 md:gap-5 ">
                    <p className="text-[3vw] md:text-lg text-blue-500 font-normal">Updated 2024 December</p>
                    <div className="relative group flex justify-between w-full md:w-[40%] items-center pb-8 border-b-2  border-[#232323] hover:border-blue-500  transition-all duration-300">
                        <h1 className="text-[6.5vw] md:text-[2.5vw] leading-[100%]">View Docs</h1>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[8vw] md:size-[2.5vw] text-blue-500 group-hover:rotate-[-45deg] transition-all duration-300">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"></div>
                    </div>
                </div>
            </section>

            {/* Articles */}
            <section id="articles" className="Articles py-16 flex flex-col gap-16 overflow-hidden px-10">
                <h1 className="text-[13vw] md:text-[4.5vw] leading-[130%] md:leading-[100%] font-medium"
                    dangerouslySetInnerHTML={{ __html: titleArticles }}
                />
                <div className="flex flex-col md:grid md:grid-cols-2 2xl:grid-cols-4 gap-8">
                    {/* Card */}
                    <div className="flex flex-col gap-8 px-10 py-10 border border-[#232323] rounded-xl  bg-[#0c0c0b] w-full">
                        <div className="relative group overflow-hidden flex flex-col gap-3 justify-center items-center border border-[#493e60] rounded-full px-10 py-10 2xl:py-5" >
                            <h1 className="text-[3.5vw] md:text-[2.3vw] 2xl:text-[1vw] text-center">Introducing ECHO®</h1>   
                            <img src="https://framerusercontent.com/images/NNinEwTGKsz4wKs1Zzb0ABP41Dc.png" className="w-[10vw] md:w-[4vw] 2xl:w-[2.5vw]" alt="" />
                            <div className="absolute w-32 h-32 bg-purple-700 blur-[100px] left-0 top-0 opacity-0 group-hover:opacity-100 duration-300 transition-all"></div>
                        </div>

                        <div className="flex flex-col gap-3 ">
                            <h1 className="text-[6vw] md:text-[3vw] 2xl:text-[2vw]">Introduction</h1>
                            <p className="text-[4.5vw] md:text-[3vw] 2xl:text-[2vw] text-blue-500">X Article</p>
                            <div>
                                <button className="relative group flex gap-3 items-center ">
                                    <h1 className="text-[4.5vw] md:text-[2.3vw] 2xl:text-[1vw] leading-[120%]">Click Here</h1>
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[4.5vw] md:size-[2.5vw] 2xl:size-[1vw] text-blue-500 group-hover:rotate-[-45deg] transition-all duration-300">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"></div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card */}
                    <div className="flex flex-col gap-8 px-10 py-10 border border-[#232323] rounded-xl  bg-[#0c0c0b] w-full">
                        <div className="relative group overflow-hidden flex flex-col gap-3 justify-center items-center border border-[#493e60] rounded-full px-10 py-10 2xl:py-5" >
                            <h1 className="text-[3.5vw] md:text-[2.3vw] 2xl:text-[1vw] text-center">ECHO® Meets Solana</h1>
                            <div className="flex gap-3 items-center">
                                <img src="https://framerusercontent.com/images/NNinEwTGKsz4wKs1Zzb0ABP41Dc.png" className="w-[10vw] md:w-[4vw] 2xl:w-[2.5vw]" alt="" /> 
                                <h1 className="text-[5vw] md:text-[2.5vw] leading-[100%]"> + </h1>
                                <img src="https://static.vecteezy.com/system/resources/previews/024/093/312/non_2x/solana-sol-glass-crypto-coin-3d-illustration-free-png.png" className="w-[10vw] md:w-[4vw] 2xl:w-[2.5vw] " alt="" /> 
                            </div>
                            <div className="absolute w-32 h-32 bg-purple-700 blur-[100px] left-0 top-0 opacity-0 group-hover:opacity-100 duration-300 transition-all"></div>

                        </div>

                        <div className="flex flex-col gap-3 ">
                            <h1 className="text-[6vw] md:text-[3vw] 2xl:text-[2vw]">Roadmap</h1>
                            <p className="text-[4.5vw] md:text-[3vw] 2xl:text-[2vw] text-blue-500">X Article</p>
                            <div>
                                <button className="relative group flex gap-3 items-center ">
                                    <h1 className="text-[4.5vw] md:text-[2.3vw] 2xl:text-[1vw] leading-[120%]">Click Here</h1>
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[4.5vw] md:size-[2.5vw] 2xl:size-[1vw] text-blue-500 group-hover:rotate-[-45deg] transition-all duration-300">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                        <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"></div>

                                </button>
                            </div>
                            
                        </div>
                    </div>

                    {/* Card */}
                    <div className="flex flex-col gap-8 px-10 py-10 border border-[#232323] rounded-xl  bg-[#0c0c0b] w-full">
                        <div className="relative group overflow-hidden flex flex-col gap-3 justify-center items-center border border-[#493e60] rounded-full px-10 py-10 2xl:py-5" >
                            <h1 className="text-[3.5vw] md:text-[2.3vw] 2xl:text-[1vw] text-center">Introducing Debug®</h1>   
                            <img src="https://framerusercontent.com/images/NNinEwTGKsz4wKs1Zzb0ABP41Dc.png" className="w-[10vw] md:w-[4vw] 2xl:w-[2.5vw]" alt="" />
                            <div className="absolute w-32 h-32 bg-purple-700 blur-[100px] left-0 top-0 opacity-0 group-hover:opacity-100 duration-300 transition-all"></div>
                            
                        </div>

                        <div className="flex flex-col gap-3 ">
                            <h1 className="text-[6vw] md:text-[3vw] 2xl:text-[2vw]">Debug®</h1>
                            <p className="text-[4.5vw] md:text-[3vw] 2xl:text-[2vw] text-blue-500">X Article</p>
                            <div>
                                <button className="relative group flex gap-3 items-center ">
                                    <h1 className="text-[4.5vw] md:text-[2.3vw] 2xl:text-[1vw] leading-[120%]">Click Here</h1>
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[4.5vw] md:size-[2.5vw] 2xl:size-[1vw] text-blue-500 group-hover:rotate-[-45deg] transition-all duration-300">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                        <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"></div>

                                </button>
                            </div>
                            
                        </div>
                    </div>

                    {/* Card */}
                    <div className="flex flex-col gap-8 px-10 py-10 border border-[#232323] rounded-xl  bg-[#0c0c0b] w-full">
                        <div className="relative group overflow-hidden flex flex-col gap-3 justify-center items-center border border-[#493e60] rounded-full px-10 py-10 2xl:py-5" >
                            <h1 className="text-[3.5vw] md:text-[2.3vw] 2xl:text-[1vw] text-center">ECHO® Future</h1>   
                            <img src="https://framerusercontent.com/images/NNinEwTGKsz4wKs1Zzb0ABP41Dc.png" className="w-[10vw] md:w-[4vw] 2xl:w-[2.5vw]" alt="" />
                            <div className="absolute w-32 h-32 bg-purple-700 blur-[100px] left-0 top-0 opacity-0 group-hover:opacity-100 duration-300 transition-all"></div>
                        </div>

                        <div className="flex flex-col gap-3 ">
                            <h1 className="text-[6vw] md:text-[3vw] 2xl:text-[2vw]">Upcoming</h1>
                            <p className="text-[4.5vw] md:text-[3vw] 2xl:text-[2vw] text-blue-500">X Article</p>
                            <div>
                                <button className="relative group flex gap-3 items-center ">
                                    <h1 className="text-[4.5vw] md:text-[2.3vw] 2xl:text-[1vw] leading-[120%]">Click Here</h1>
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[4.5vw] md:size-[2.5vw] 2xl:size-[1vw] text-blue-500 group-hover:rotate-[-45deg] transition-all duration-300">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                        <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"></div>

                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

            {/* Stay Informed and FAQ */}
            <section className="StayInformed py-24 flex flex-col gap-28  overflow-hidden px-10">
                <h1 className="text-[13vw] md:text-[4.5vw] leading-[130%] md:leading-[100%] font-medium"
                    dangerouslySetInnerHTML={{ __html: titleInformed }}
                />

                <div className="flex flex-col">
                    <div className="relative group py-10 flex flex-col gap-3 justify-center w-full md:w-[40%] border-y-2 border-[#232323]">
                        <h1 className="text-[3.5vw] md:text-xl text-[#7b7b7b]">Telegram</h1>
                        <div className="flex justify-between items-center">
                            <h1 className="text-[6.5vw] md:text-[2.5vw] leading-[100%]">@echodotfun</h1>
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[7vw] md:size-[2.5vw] text-blue-500 group-hover:rotate-[-45deg] transition-all duration-300">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"></div>

                        </div>
                    </div>

                    <div className="relative group py-10 flex flex-col gap-3 justify-center w-full md:w-[40%] border-b-2 border-[#232323]">
                        <h1 className="text-[3.5vw] md:text-xl text-[#7b7b7b]">X(Twitter)</h1>
                        <div className="flex justify-between items-center">
                            <h1 className="text-[6.5vw] md:text-[2.5vw] leading-[100%]">@ECHOdotfun</h1>
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[7vw] md:size-[2.5vw] text-blue-500 group-hover:rotate-[-45deg] transition-all duration-300">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"></div>

                        </div>
                    </div>
                </div>

                <h1 className="text-[13vw] md:text-[4.5vw] leading-[130%] md:leading-[100%] font-medium"
                    dangerouslySetInnerHTML={{ __html: titleFAQ}}
                />
                
                <div className="flex flex-col bg-[#0c0c0b] py-6 md:py-12 rounded-xl">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mx-3 md:mx-10 py-6 flex flex-col border-b border-[#232323]">
                            <div
                                className="flex items-center gap-10 cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`size-[3.5vw] md:size-6 text-blue-500 ${
                                    openFAQs.includes(index) ? "" : "rotate-[-45deg]"
                                } duration-300 transition-all`}
                                >
                                <path
                                    d="M5 12H19M19 12L12 5M19 12L12 19"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                </svg>
                                <h1 className="text-[3.5vw] leading-[100%] md:text-xl">{faq.question}</h1>
                            </div>
                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                openFAQs.includes(index) ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="text-[2.5vw] leading-[130%] md:text-xl md:leading-[100%] text-[#7b7b7b] pl-16 py-6">
                                {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="Footer flex flex-col py-16 gap-4 overflow-hidden px-10">
                <div className="flex gap-8 justify-center items-center border-b-2 border-[#232323] pb-8">
                    <img src="https://framerusercontent.com/images/NNinEwTGKsz4wKs1Zzb0ABP41Dc.png" className="w-[7.5vw]" alt="" />
                    <h1 className="text-[7.5vw] leading-[100%]">{mainTitle}</h1>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-2">
                    <div className="flex flex-col border-b-2 md:border-none border-[#232323] pt-2 pb-5">
                        <h1 className="text-blue-500">ECHO&copy; 2024</h1>
                        <h1>info@echo.fun</h1>
                    </div>

                    <ul className="flex flex-col py-5 md:py-0 border-b-2 md:border-none border-[#232323] ">
                        <div className="flex">
                            <li className='relative group '>
                                <a href="#projects">Projects</a>
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"></div>
                            </li>
                        </div>
                        <div className="flex">
                            <li className='relative group'>
                                <a href="#promise">Promise</a>
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"></div>
                            </li>
                        </div>
                        <div className="flex">
                            <li className='relative group'>
                                <a href="#github">Github</a>
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"></div>
                            </li>
                        </div>
                        <div className="flex">
                            <li className='relative group'>
                                <a href="#articles">Articles</a>
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"></div>
                            </li>
                        </div>
                        <div className="flex">
                            <li 
                                ref={twitter} 
                                className="flex flex-col gap-2 items-center md:h-7 overflow-hidden"
                                onMouseEnter={handleTwitterHoverEnter}
                                onMouseLeave={handleTwitterHoverLeave} 
                                >
                                <a
                                href=""
                                target="_blank"
                                className="flex gap-2 items-center"
                                >
                                    <h1>X(Twitter)</h1>
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[4vw] md:size-6 text-blue-300 "
                                    >
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>

                                <a
                                href=""
                                target="_blank"
                                className="flex gap-2 items-center"
                                >
                                    <h1>X(Twitter)</h1>
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[4vw] md:size-6 text-blue-300 rotate-[-45deg]"
                                    >
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </footer>
        </>
    )
}