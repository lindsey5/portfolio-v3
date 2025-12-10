"use client";

import { useState, useEffect } from "react";
import NavButton from "../NavButton";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/utils/utils";

const Navbar = () => {
    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    const sections = ["home", "about", "skills", "projects", "contact"];

    useEffect(() => {
        const handleScroll = () => {
        let current = "home";
        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
            const top = section.getBoundingClientRect().top;
            if (top <= 100) current = id;
            }
        });
        setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
        {/* Desktop Navbar */}
        <nav
            className="
            hidden md:flex
            fixed top-5 left-1/2 transform -translate-x-1/2
            space-x-4 px-6 py-2
            bg-[#060010] border border-white/20 rounded-b-lg
            shadow-[0_0_20px_rgba(58,12,163,0.7)] backdrop-blur-md z-50
            "
        >
            {sections.map((section) => (
            <NavButton
                key={section}
                isActive={active === section}
                onClick={() => {
                    scrollToSection(section);
                    setActive(section);
                    setMenuOpen(false); 
                }}
            >
                {section.charAt(0).toUpperCase() + section.slice(1)}
            </NavButton>
            ))}
        </nav>

        {/* Mobile Navbar */}
        <nav
            className="
            md:hidden
            fixed top-5 left-1/2 transform -translate-x-1/2
            w-[90%] bg-[#060010] border border-white/20 rounded-b-lg
            shadow-[0_0_20px_rgba(58,12,163,0.7)] backdrop-blur-md z-50
            flex items-center justify-between px-4 py-2
            "
        >
            <div className="text-white font-bold">Lindsey</div>
            <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </nav>

        {/* Mobile Menu Links with animation */}
        <div
            className={`
            md:hidden
            fixed top-[60px] left-1/2 transform -translate-x-1/2
            w-[90%] bg-[#060010] border border-white/20 rounded-lg
            shadow-[0_0_20px_rgba(58,12,163,0.7)] backdrop-blur-md
            flex flex-col items-center py-2 space-y-2 z-40
            transition-all duration-300 ease-in-out
            origin-top
            ${menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}
            `}
        >
            {sections.map((section) => (
            <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`cursor-pointer text-white text-lg capitalize transition-all duration-200 ${
                active === section ? "font-bold" : "font-medium"
                } hover:text-purple-400 hover:scale-105`}
            >
                {section}
            </button>
            ))}
        </div>
        </>
    );
};

export default Navbar;
