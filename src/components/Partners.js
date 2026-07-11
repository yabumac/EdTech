'use client';

import AnimatedSection from './AnimatedSection';
import { siteData } from '@/data/siteData';

export default function Partners() {
  return (
    <section id="partners" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="container-max">
        <AnimatedSection className="text-center mb-12">
          <span className="text-primary-500 font-semibold text-sm tracking-widest uppercase">Partners</span>
          <h2 className="section-title mt-3">Trusted By</h2>
          <p className="section-subtitle">
            Collaborating with leading organizations to drive educational transformation
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {siteData.partners.map((partner, i) => (
              <div
                key={partner}
                className="relative group flex items-center justify-center p-4 md:p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary-200 hover:bg-primary-50/50 transition-all duration-300 min-h-[80px]"
              >
                <span className="text-gray-500 font-bold text-sm md:text-base group-hover:text-primary-600 transition-colors text-center leading-tight">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
