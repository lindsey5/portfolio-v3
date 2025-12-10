'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectModal from './ProjectModal';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const renderTags = (tags: string[]) => {
    const displayTags = tags.slice(0, 5);
    const remaining = tags.length - 5;

    return (
      <div className="flex flex-wrap gap-2">
        {displayTags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs bg-[#1a0b2e] text-purple-300 border border-purple-500/20 tracking-wider"
          >
            {tag}
          </span>
        ))}
        {remaining > 0 && (
          <span className="px-3 py-1 text-xs bg-[#1a0b2e] text-purple-400 border border-purple-500/30 tracking-wider">
            +{remaining}
          </span>
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="min-h-screen bg-[#060010] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-2 tracking-wider">PROJECTS</h2>
          <div className="w-20 h-0.5 bg-purple-500"></div>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => {
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
                  setSelectedProject(project);
                }}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                  <div className="relative overflow-hidden border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060010] to-transparent opacity-40"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-4 tracking-wide">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {renderTags(project.tags)}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs text-purple-400 hover:text-purple-300 border border-purple-500/30 px-6 py-2 hover:border-purple-400 transition-colors tracking-wider"
                    >
                      GITHUB
                    </a>
                    {project.websiteLink && (
                      <a
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs text-purple-400 hover:text-purple-300 border border-purple-500/30 px-6 py-2 hover:border-purple-400 transition-colors tracking-wider"
                      >
                        LIVE SITE
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} close={() => setSelectedProject(null)}/>
      )}
    </section>
  );
};

export default ProjectsSection;