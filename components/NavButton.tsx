import React from "react";

interface NavButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

const NavButton = ({
    children,
    isActive = false,
    className = "",
    onClick,
}: NavButtonProps) => {
    return (
        <button
        onClick={onClick}
        className={`
            text-sm relative group cursor-pointer px-6 py-2 rounded-full
            border border-white/30 overflow-hidden text-white font-semibold
            transition-colors duration-300
            ${isActive ? "bg-gradient-to-r from-[#4B1D6F] via-[#6A3BAF] to-[#361565] shadow-[0_0_15px_rgba(106,59,175,0.7)]" : "bg-[#060010] hover:text-white"}
            ${className}
        `}
        >
        {/* Neon glow overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4B1D6F] via-[#6A3BAF] to-[#361565] opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-full blur-lg"></div>
        
        {/* Button content */}
        <span className="relative z-10">{children}</span>
        </button>
    );
};

export default NavButton;
