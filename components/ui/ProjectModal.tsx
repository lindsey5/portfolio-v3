import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectModalProps {
    project: Project;
    close: () => void;
}

export default function ProjectModal({ project, close }: ProjectModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevImage = () => {
        setCurrentImageIndex(
        (prev) => (prev - 1 + project.images.length) % project.images.length
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
        onClick={() => { close(); setCurrentImageIndex(0)}}
        >
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#0a0118] border border-purple-500/30 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
        >
            {/* Header */}
            <div className="sticky top-0 bg-[#0a0118] border-b border-purple-500/20 p-6 flex justify-between items-start z-10">
            <h3 className="text-white font-bold text-xl tracking-wide pr-8">
                {project.title}
            </h3>
            <button
                onClick={close}
                className="text-gray-400 hover:text-white text-2xl leading-none"
            >
                ×
            </button>
            </div>

            <div className="p-6 space-y-6">
            {/* Image Carousel */}
            <div className="relative">
                <div className="relative min-h-96 overflow-hidden border border-purple-500/20">
                <Image
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} ${currentImageIndex + 1}`}
                    fill
                    className="w-full h-full object-cover"
                />
                </div>

                {project.images.length > 1 && (
                <>
                    <button
                    onClick={prevImage}
                    className="text-lg absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 hover:bg-black/70 transition-colors"
                    >
                    ‹
                    </button>
                    <button
                    onClick={nextImage}
                    className="text-lg absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 hover:bg-black/70 transition-colors"
                    >
                    ›
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, idx) => (
                        <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                            idx === currentImageIndex ? "bg-purple-400" : "bg-gray-500"
                        }`}
                        />
                    ))}
                    </div>
                </>
                )}
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

            {/* Features */}
            {project.features.length > 0 && (
                <div>
                <h4 className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3">
                    Key Features
                </h4>
                <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▹</span>
                        <span>{feature}</span>
                    </li>
                    ))}
                </ul>
                </div>
            )}

            {/* Technologies */}
            <div>
                <h4 className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3">
                Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                    <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-[#1a0b2e] text-purple-300 border border-purple-500/20 tracking-wider"
                    >
                    {tag}
                    </span>
                ))}
                </div>
            </div>

            <div className="flex gap-3 pt-4">
                <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-purple-400 hover:text-purple-300 border border-purple-500/30 px-6 py-2 hover:border-purple-400 transition-colors tracking-wider"
                >
                VIEW ON GITHUB
                </a>
                {project.websiteLink && (
                <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-purple-400 hover:text-purple-300 border border-purple-500/30 px-6 py-2 hover:border-purple-400 transition-colors tracking-wider"
                >
                    VISIT LIVE SITE
                </a>
                )}
            </div>
            </div>
        </motion.div>
        </motion.div>
    );
}
