'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { siteData } from '@/data/siteData';

export default function Gallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['-30%', '0%']);

  const half = Math.ceil(siteData.images.gallery.length / 2);
  const row1 = siteData.images.gallery.slice(0, half);
  const row2 = siteData.images.gallery.slice(half);

  return (
    <section ref={containerRef} className="section-padding bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.08)_0%,_transparent_60%)]" />

      <div className="relative mb-16 text-center px-4">
        <AnimatedSection>
          <span className="text-primary-300 font-semibold text-sm tracking-widest uppercase">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Our Work in Action</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A glimpse into our programs, workshops, and the communities we serve
          </p>
        </AnimatedSection>
      </div>

      <div className="relative">
        <motion.div style={{ x: x1 }} className="flex gap-4 md:gap-6 mb-4 md:mb-6 px-4">
          {[...row1, ...row1].map((item, i) => (
            <div
              key={`r1-${i}`}
              className="relative flex-shrink-0 w-64 md:w-80 h-48 md:h-56 rounded-xl overflow-hidden group"
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-medium">{item.caption}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div style={{ x: x2 }} className="flex gap-4 md:gap-6 px-4">
          {[...row2, ...row2].map((item, i) => (
            <div
              key={`r2-${i}`}
              className="relative flex-shrink-0 w-64 md:w-80 h-48 md:h-56 rounded-xl overflow-hidden group"
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-medium">{item.caption}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative mt-12 text-center">
        <p className="text-white/40 text-sm italic">
          Scroll to see the gallery move &rarr;
        </p>
      </div>
    </section>
  );
}
