import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const experience = [
  {
    type: 'education',
    title: "Bachelor's in Computer Science",
    org: 'Hassiba Ben Bouali University',
    location: 'Chlef, Algeria',
    period: 'In progress',
    description: 'Software engineering, algorithms, and web technologies.',
  },
  {
    type: 'experience',
    title: 'Web Development',
    org: 'Freelance & Academic',
    location: 'Remote · Chlef',
    period: '2022 – Present',
    description: 'Full-stack web apps, PFE (Ophthalmology consultation system), and university management systems—delivering on scope and timeline.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="section-label">Background</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            Experience & education
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto">
            Academic foundation and hands-on delivery on real projects.
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-10">
          {experience.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative pl-8 sm:pl-9 border-l-2 border-dark-border hover:border-accent/40 transition-colors"
            >
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-accent" />
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                  {item.type === 'education' ? (
                    <FaGraduationCap size={18} />
                  ) : (
                    <FaBriefcase size={18} />
                  )}
                </div>
                <div className="pb-2">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                    {item.period}
                  </p>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-0.5">{item.title}</h3>
                  <p className="text-zinc-400 text-sm mb-1">{item.org} · {item.location}</p>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
