'use client'
import { motion, Variants, Transition } from "framer-motion";

const AboutSection = () => {
  // Motion variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as Transition["ease"] }, // cast to correct type
    },
  };

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section
      id="about"
      className="h-screen flex items-center justify-center py-20 px-6"
    >
      <motion.div
        className="max-w-5xl mx-auto grid md:grid-cols-5 gap-16 items-start"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Image Section */}
        <motion.div
          className="md:col-span-2 shadow-[0_0_20px_rgba(58,12,163,0.7)] backdrop-blur-md"
          variants={fadeInUp}
        >
          <div className="relative w-full aspect-square max-w-sm mx-auto">
            <div className="absolute inset-0 border border-purple-500/30 rounded-sm"></div>
            <div className="absolute inset-2 bg-[#1a0b2e]">
              <img
                src="/lindsey.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div className="md:col-span-3 space-y-12" variants={fadeInUp}>
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 tracking-wider">
              ABOUT ME
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed tracking-wide">
              I'm a Fullstack Developer passionate about solving complex challenges, building scalable applications, and delivering user-friendly solutions. With a solid foundation in both frontend and backend development, I specialize in creating dynamic and efficient web applications.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-purple-400 text-xs font-semibold tracking-widest uppercase">
              Education
            </h3>

            <div className="border-l-2 border-purple-500/30 pl-6 space-y-1">
              <h4 className="text-white font-semibold text-base tracking-wide">
                BS in Information Systems
              </h4>
              <p className="text-gray-400 text-sm">Taguig City University</p>
              <p className="text-gray-500 text-xs tracking-wider">2022 - 2026</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
