'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { siteData } from '@/data/siteData';

const categories = ['All', ...new Set(siteData.projects.map((p) => p.category))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? siteData.projects
    : siteData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-50 rounded-tl-full opacity-50" />

      <div className="container-max relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary-500 font-semibold text-sm tracking-widest uppercase">Our Work</span>
          <h2 className="section-title mt-3">Featured Projects</h2>
          <p className="section-subtitle">
            Impactful initiatives transforming education across Ethiopia
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-600 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div className="card h-full overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={siteData.images.projects[i]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-navy-900 text-xs font-medium shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    {project.partners.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.partners.map((partner) => (
                          <span
                            key={partner}
                            className="px-2.5 py-1 rounded-md bg-primary-50 text-primary-700 text-xs font-medium"
                          >
                            {partner}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
