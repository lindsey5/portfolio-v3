'use client'
import { scrollToSection } from "@/utils/utils"
import BlurText from "../BlurText"
import PixelBlast from "../PixelBlast"
import TextType from "../TextType"

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
                        className="text-xl md:text-3xl font-semibold"
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
            </div>
        </section>
    )
}

export default HeroSection