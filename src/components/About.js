'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { siteData } from '@/data/siteData';

const stats = [
  { number: '2021', label: 'Founded' },
  { number: '50+', label: 'Digital Courses' },
  { number: '10,000+', label: 'Professionals Trained' },
  { number: '100,000+', label: 'Teachers Reached' },
];

export default function About() {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-max relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary-500 font-semibold text-sm tracking-widest uppercase">About Us</span>
          <h2 className="section-title mt-3">Who We Are</h2>
          <p className="section-subtitle">
            A pioneering social enterprise dedicated to transforming education through technology
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in <span className="font-semibold text-primary-600">2021</span>, EdTech Hub ET is a pioneering
                social enterprise dedicated to transforming education and training through innovative digital technologies.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are committed to equipping educators, institutions, and learners with the tools and skills needed
                to succeed in a rapidly evolving digital learning environment.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {['Innovation', 'Impact', 'Quality', 'Accessibility'].map((value) => (
                  <span
                    key={value}
                    className="px-4 py-2 rounded-full bg-white border border-primary-100 text-primary-700 text-sm font-medium shadow-sm"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <img
                src={siteData.images.aboutTeam}
                alt="EdTech Hub ET Team"
                className="w-full h-72 md:h-80 rounded-2xl object-cover shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-xl bg-primary-600 shadow-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">2021</div>
                  <div className="text-xs text-white/80">Founded</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center overflow-hidden group hover:shadow-md transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-bl-full -z-0" />
            <div className="relative z-10 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">Our Mission</h3>
                <p className="text-gray-600 text-sm">{siteData.company.mission}</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">Our Vision</h3>
                <p className="text-gray-600 text-sm">
                  A future where every educator and learner in Ethiopia has access to quality digital education tools and resources.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">Our Commitment</h3>
                <p className="text-gray-600 text-sm">
                  Delivering high-quality, accessible digital education solutions that empower institutions and transform learning outcomes.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
