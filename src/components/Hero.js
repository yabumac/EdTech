'use client';

import { motion } from 'framer-motion';
import { siteData } from '@/data/siteData';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={siteData.images.hero}
          alt="Education"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/85 to-navy-900/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.2)_0%,_transparent_60%)]" />
      </div>

      <div className="relative container-max px-4 sm:px-6 lg:px-8 w-full pt-20 pb-16 md:pt-24 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Established {siteData.company.founded}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
            >
              Technology in the hands of a{' '}
              <span className="text-primary-300">good teacher</span>
              {' '}transforms education!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed"
            >
              {siteData.company.mission}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#services" className="btn-primary bg-white text-primary-700 hover:bg-white/90 shadow-xl">
                Explore Our Services
              </a>
              <a href="#contact" className="btn-outline border-white text-white hover:bg-white/10">
                Contact Us
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-8 pt-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-primary-400 flex items-center justify-center text-white text-xs font-bold"
                  >
                    {['EF', 'Y', 'DC', 'ED'][i - 1]}
                  </div>
                ))}
              </div>
              <div className="text-white/80 text-sm">
                <span className="font-bold text-white">10,000+</span> Professionals Trained
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <img
                src={siteData.images.hero}
                alt="Students learning"
                className="w-96 h-96 rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">50+</div>
                  <div className="text-xs text-gray-600">Courses</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-28 h-28 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">100K+</div>
                  <div className="text-xs text-gray-600">Teachers</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
