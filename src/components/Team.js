'use client';

import AnimatedSection from './AnimatedSection';
import { siteData } from '@/data/siteData';

const teamImages = [
  siteData.images.team.enku,
  siteData.images.team.yeab,
  siteData.images.team.team,
];

export default function Team() {
  return (
    <section id="team" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary-50/50 rounded-full blur-3xl" />

      <div className="container-max relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary-500 font-semibold text-sm tracking-widest uppercase">Our Team</span>
          <h2 className="section-title mt-3">Meet the People Behind EdTech Hub ET</h2>
          <p className="section-subtitle">
            Passionate individuals committed to transforming education through technology
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {siteData.team.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.15}>
              <div className="group text-center">
                <div className="relative mb-6 mx-auto w-64 h-64 md:w-full md:aspect-square md:max-w-xs">
                  <img
                    src={siteData.images.hero}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-2xl shadow-md group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex justify-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </span>
                      <span className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
