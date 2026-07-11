'use client';

import AnimatedSection from './AnimatedSection';
import { siteData } from '@/data/siteData';

export default function Careers() {
  return (
    <section id="careers" className="section-padding bg-white">
      <div className="container-max">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary-500 font-semibold text-sm tracking-widest uppercase">Careers</span>
          <h2 className="section-title mt-3">Join Our Team</h2>
          <p className="section-subtitle">
            Help us transform education in Ethiopia through technology and innovation
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-4">
          {siteData.careers.map((job, i) => (
            <AnimatedSection key={job.title} delay={i * 0.1}>
              <div className="card p-6 group cursor-default">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy-900 group-hover:text-primary-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="flex items-center text-gray-500 text-sm">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {job.type}
                      </span>
                      <span className="flex items-center text-gray-500 text-sm">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">{job.description}</p>
                  </div>
                  <button className="btn-primary text-sm py-2.5 px-5 shrink-0 whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
