'use client';

import AnimatedSection from './AnimatedSection';
import { siteData } from '@/data/siteData';

export default function Contact() {
  return (
    <section id="contact" className="section-padding gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.05)_0%,_transparent_50%)]" />

      <div className="container-max relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary-300 font-semibold text-sm tracking-widest uppercase">Contact</span>
          <h2 className="section-title mt-3 text-white">Get in Touch</h2>
          <p className="section-subtitle text-white/70">
            Ready to transform education with technology? Let&apos;s talk
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          <AnimatedSection delay={0.1}>
            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">{siteData.company.name}</h3>
                <p className="text-white/70 text-sm">Pioneering Social Enterprise Since 2021</p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: 'Location',
                    value: siteData.company.location,
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: 'Email',
                    value: siteData.company.email,
                    href: `mailto:${siteData.company.email}`,
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: 'Phone',
                    value: siteData.company.phone.join(' / '),
                    href: `tel:${siteData.company.phone[0]}`,
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    ),
                    label: 'Website',
                    value: siteData.company.website,
                    href: siteData.company.domain,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-primary-300 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-medium uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-primary-300 transition-colors text-sm font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-1.5">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-1.5">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-1.5">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors text-sm"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors text-sm resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="button"
                  className="w-full btn-primary bg-white text-primary-700 hover:bg-white/90 shadow-xl"
                >
                  Send Message
                </button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
