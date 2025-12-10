'use client'
import { scrollToSection } from "@/utils/utils"
import BlurText from "../BlurText"
import PixelBlast from "../PixelBlast"
import TextType from "../TextType"
import Link from "next/link"

const HeroSection = () => {
    return (
        <section id="home" className="h-screen relative bg-[#060010]">
        <PixelBlast
            variant="circle"
            pixelSize={6}
            color="#B19EEF"
            patternScale={3}
            patternDensity={1.2}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0.25}
            transparent
        />
            <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl flex flex-col items-center space-y-8">

                <BlurText
                    text="I'm Lindsey Samson"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-center text-3xl md:text-5xl font-bold"
                 />
                <div className="relative">
                    <TextType 
                        className="text-xl md:text-3xl"
                        text={[
                            "Web Developer",
                            "Fullstack Developer",
                            "Specialized in MERN Stack",
                            "Problem Solver",
                            "Here to build something meaningful.",
                            "Welcome to my portfolio."
                        ]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                    />
                </div>
                <div className="relative flex space-x-4">
                    {/* Get in Touch Button */}
                    <button onClick={() => scrollToSection('contact')} className="shadow-[0_0_20px_rgba(58,12,163,0.7)] backdrop-blur-md z-50 group relative cursor-pointer px-6 py-2 rounded-lg bg-[#060010] border border-white/30 overflow-hidden">
                        {/* Glowing gradient overlay, revealed on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#4B1D6F] via-[#6A3BAF] to-[#361565] opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-lg blur-lg"></div>
                        
                        {/* Button content */}
                        <span className="relative text-white font-medium">
                            Get in Touch
                        </span>
                    </button>

                    {/* View My Works Button */}
                    <button onClick={() => scrollToSection('projects')} className="shadow-[0_0_20px_rgba(58,12,163,0.7)] backdrop-blur-md z-50 group relative cursor-pointer px-6 py-2 rounded-lg bg-[#060010] border border-white/30 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#4B1D6F] via-[#6A3BAF] to-[#361565] opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-lg blur-lg"></div>
                        <span className="relative text-white font-medium">
                            View my Works
                        </span>
                    </button>
                </div>
                <div className="flex gap-4">
                    <div className="flex justify-center gap-3">
                    <Link target="_blank" href="https://github.com/lindsey5" className="text-gray-400 hover:text-purple-400 transition-colors">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </Link>
                    <Link target="_blank" href="https://www.linkedin.com/in/samson-lindsey-12b43929a/" className="text-gray-400 hover:text-purple-400 transition-colors">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </Link>
                    <Link target="_blank" href="https://www.facebook.com/lindseysamson89" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35C.593 0 0 .592 0 1.326v21.348C0 23.408.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.796.716-1.796 1.767v2.317h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.592 1.324-1.326V1.326C24 .592 23.406 0 22.675 0z"/>
                    </svg>
                    </Link>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default HeroSection