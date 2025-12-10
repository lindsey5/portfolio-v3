'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { certificates } from '@/data';

const CertificatesSection = () => {
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        if (selectedCertificate) {
        setCurrentImageIndex((prev) => 
            prev === selectedCertificate.images.length - 1 ? 0 : prev + 1
        );
        }
    };

    const prevImage = () => {
        if (selectedCertificate) {
        setCurrentImageIndex((prev) => 
            prev === 0 ? selectedCertificate.images.length - 1 : prev - 1
        );
        }
    };

    return (
        <section id="certificates" className="min-h-screen bg-[#060010] py-20 px-6 font-['Orbitron']">
        <div className="max-w-6xl mx-auto">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
            >
            <h2 className="text-4xl font-bold text-white mb-2 tracking-wider">CERTIFICATES & AWARDS</h2>
            <div className="w-20 h-0.5 bg-purple-500"></div>
            </motion.div>

            <div className="space-y-16">
            {certificates.map((cert, index) => {
                const isEven = index % 2 === 0;
                
                return (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center group cursor-pointer`}
                    onClick={() => {
                    setSelectedCertificate(cert);
                    setCurrentImageIndex(0);
                    }}
                >
                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                    <div className="relative overflow-hidden border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300">
                        <img
                        src={cert.images[0]}
                        alt={cert.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#060010] to-transparent opacity-40"></div>
                        {cert.images.length > 1 && (
                        <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 tracking-wider">
                            +{cert.images.length - 1}
                        </div>
                        )}
                    </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 space-y-4">
                    <h3 className="text-white font-bold text-xl tracking-wide leading-relaxed">
                        {cert.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {cert.description}
                    </p>

                    <button
                        onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCertificate(cert);
                        setCurrentImageIndex(0);
                        }}
                        className="text-xs text-purple-400 hover:text-purple-300 border border-purple-500/30 px-6 py-2 hover:border-purple-400 transition-colors tracking-wider inline-block"
                    >
                        VIEW CERTIFICATE
                    </button>
                    </div>
                </motion.div>
                );
            })}
            </div>
        </div>

        {/* Modal */}
        {selectedCertificate && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedCertificate(null)}
            >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#0a0118] border border-purple-500/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 bg-[#0a0118] border-b border-purple-500/20 p-6 flex justify-between items-start z-10">
                <h3 className="text-white font-bold text-lg tracking-wide pr-8 leading-relaxed">
                    {selectedCertificate.title}
                </h3>
                <button
                    onClick={() => setSelectedCertificate(null)}
                    className="text-gray-400 hover:text-white text-2xl leading-none flex-shrink-0"
                >
                    ×
                </button>
                </div>

                <div className="p-6 space-y-6">
                {/* Image Viewer */}
                <div className="relative">
                    <div className="relative h-[500px] overflow-hidden border border-purple-500/20">
                    <img
                        src={selectedCertificate.images[currentImageIndex]}
                        alt={`${selectedCertificate.title} ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain bg-[#0a0118]"
                    />
                    </div>
                    
                    {selectedCertificate.images.length > 1 && (
                    <>
                        <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 hover:bg-black/70 transition-colors text-2xl"
                        >
                        ‹
                        </button>
                        <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 hover:bg-black/70 transition-colors text-2xl"
                        >
                        ›
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedCertificate.images.map((_, idx) => (
                            <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                                idx === currentImageIndex ? 'bg-purple-400' : 'bg-gray-500'
                            }`}
                            />
                        ))}
                        </div>
                    </>
                    )}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                    {selectedCertificate.description}
                </p>
                </div>
            </motion.div>
            </motion.div>
        )}
        </section>
    );
};

export default CertificatesSection;