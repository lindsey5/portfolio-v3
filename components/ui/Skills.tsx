'use client'
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: 'HTML', icon: '/icons/html.png'},
  { name: 'CSS', icon: '/icons/css.png'},
  { name: 'Javascript', icon: '/icons/js.svg' },
  { name: 'TypeScript', icon: '/icons/ts.png' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.png' },
  { name: 'Java', icon: '/icons/java.png' },
  { name: 'C#', icon: '/icons/cs.png' },
  { name: 'Python', icon: '/icons/python.webp'},
  { name: 'VB.net', icon: '/icons/vb.png'},
  { name: 'PHP', icon: '/icons/php.png'},
  { name: 'React.js', icon: '/icons/react.webp'},
  { name: 'Next.js', icon: '/icons/next.webp'},
  { name: 'Material UI', icon: '/icons/mui.svg'},
  { name: 'Node.js', icon: '/icons/node.png'},
  { name: 'Express.js', icon: '/icons/express.png'},
  { name: '.NET', icon: '/icons/net.png'},
  { name: 'FastAPI', icon: '/icons/fastapi.png'},
  { name: 'Flask', icon: '/icons/flask.png'},
  { name: 'MySQL', icon: '/icons/mysql.svg'},
  { name: 'MongoDB', icon: '/icons/mongodb.webp'},
  { name: 'Git', icon: '/icons/git.png'},
  { name: 'Github', icon: '/icons/github.webp'},
  { name: 'Postman', icon: '/icons/postman.webp'},
  { name: 'Expo', icon: '/icons/expo.png'},
  { name: 'Socket-io', icon: '/icons/socket-io.svg'},
  { name: 'Langchain', icon: '/icons/langchain.png'},
];

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen bg-[#060010] py-20 px-6 font-['Orbitron']">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-2 tracking-wider">SKILLS</h2>
          <div className="w-20 h-0.5 bg-purple-500"></div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="bg-[#0a0118] border border-purple-500/20 p-6 flex flex-col items-center gap-4 h-full group-hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-gray-400 text-xs text-center tracking-wider group-hover:text-purple-300 transition-colors">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;