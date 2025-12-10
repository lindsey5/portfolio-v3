'use client'
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const formRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(false);
    const [contact, setContact] = useState({
        fullname: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContact({
        ...contact,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        
        setLoading(true);
        
        const formData = {
        fullname: contact.fullname,
        email: contact.email,
        message: contact.message,
        };

        emailjs
        .send(
            'service_a86aazh',
            'contact_form',
            formData,
            'ZBx7UQyfCCewEgEPA'
        )
        .then(() => {
            setContact({
            fullname: '',
            email: '',
            message: '',
            });
            alert('Message successfully sent.');
        })
        .catch((error) => {
            console.error('FAILED to send email:', error);
            alert('Failed to send message. Please try again later.');
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <section id="contact" className="min-h-screen bg-[#060010] py-20 px-6">
        <div className="max-w-4xl mx-auto">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
            >
            <h2 className="text-4xl font-bold text-white mb-2 tracking-wider">GET IN TOUCH</h2>
            <div className="w-20 h-0.5 bg-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-400 text-sm tracking-wide">
                Have a question or want to work together? Feel free to reach out.
            </p>
            </motion.div>

            <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0a0118] border border-purple-500/20 p-8"
            >
            <div className="space-y-6">
                {/* Full Name */}
                <div>
                <label htmlFor="fullname" className="block text-purple-400 text-xs font-semibold tracking-widest uppercase mb-2">
                    Full Name
                </label>
                <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={contact.fullname}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1a0b2e] border border-purple-500/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-purple-500/50 transition-colors tracking-wide"
                    placeholder="John Doe"
                />
                </div>

                {/* Email */}
                <div>
                <label htmlFor="email" className="block text-purple-400 text-xs font-semibold tracking-widest uppercase mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1a0b2e] border border-purple-500/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-purple-500/50 transition-colors tracking-wide"
                    placeholder="john@example.com"
                />
                </div>

                {/* Message */}
                <div>
                <label htmlFor="message" className="block text-purple-400 text-xs font-semibold tracking-widest uppercase mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={contact.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-[#1a0b2e] border border-purple-500/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-purple-500/50 transition-colors tracking-wide resize-none"
                    placeholder="Your message here..."
                />
                </div>

                {/* Submit Button */}
                <motion.button
                onClick={handleSubmit}
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className={`w-full bg-purple-600 text-white py-3 text-sm font-semibold tracking-widest uppercase transition-all ${
                    loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700'
                }`}
                >
                {loading ? 'SENDING...' : 'SEND MESSAGE'}
                </motion.button>
            </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-3 gap-6"
            >
            <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-[#1a0b2e] border border-purple-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                </div>
                <h4 className="text-white text-sm font-semibold tracking-wide">EMAIL</h4>
                <p className="text-gray-400 text-xs">lindseysamson5@gmail.com</p>
            </div>

            <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-[#1a0b2e] border border-purple-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                </div>
                <h4 className="text-white text-sm font-semibold tracking-wide">LOCATION</h4>
                <p className="text-gray-400 text-xs">Taguig City, Metro Manila, PH</p>
            </div>

            <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-[#1a0b2e] border border-purple-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                </div>
                <h4 className="text-white text-sm font-semibold tracking-wide">SOCIAL</h4>
                <div className="flex justify-center gap-3">
                <a href="https://github.com/lindsey5" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/samson-lindsey-12b43929a/" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                </a>
                <a href="https://www.facebook.com/lindseysamson89" className="text-gray-400 hover:text-purple-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.593 0 0 .592 0 1.326v21.348C0 23.408.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.796.716-1.796 1.767v2.317h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.592 1.324-1.326V1.326C24 .592 23.406 0 22.675 0z"/>
                </svg>
                </a>
                </div>
            </div>
            </motion.div>
        </div>
        </section>
    );
};

export default ContactSection;