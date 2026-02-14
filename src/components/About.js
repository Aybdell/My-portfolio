import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaCode, FaLaptopCode, FaDatabase, FaRocket } from 'react-icons/fa';

const focusAreas = [
  { name: 'Frontend & UI', icon: FaCode, desc: 'React, clean interfaces, and responsive design.' },
  { name: 'Full-Stack', icon: FaLaptopCode, desc: 'Node.js, Express, PHP—scalable backends.' },
  { name: 'Data & APIs', icon: FaDatabase, desc: 'PostgreSQL, MySQL, structured data.' },
  { name: 'Delivery', icon: FaRocket, desc: 'Fast execution and clear communication.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const About = () => {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <span className="section-label">Behind the code</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-8 max-w-2xl">
            Building digital experiences that deliver
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-zinc-400 text-lg leading-relaxed">
              I'm Ayoub DELLAOUI, a frontend-focused developer and CS student at Hassiba Ben Bouali University in Chlef. 
              I turn complex problems into clean, fast, and scalable web solutions.
            </p>
            <p className="text-zinc-500 leading-relaxed">
              I specialize in React, Node.js, and modern tooling—with a focus on clear interfaces, sharp decisions, and on-time delivery. 
              Based in Algeria and available for remote work worldwide.
            </p>
            <Link to="contact" smooth offset={-90} duration={500}>
              <motion.span
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm mt-4 hover:underline underline-offset-4"
              >
                Have a project in mind? Let's build it together →
              </motion.span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="section-label mb-4 block">Focus</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  whileHover={{ y: -4 }}
                  className="p-5 rounded-2xl border border-dark-border bg-dark-surface/30 card-soft"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                      <area.icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-0.5">{area.name}</h3>
                      <p className="text-sm text-zinc-500">{area.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
