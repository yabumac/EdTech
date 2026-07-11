'use client';

import AnimatedSection from './AnimatedSection';
import { siteData } from '@/data/siteData';

export default function BlogNews() {
  return (
    <section id="blog" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />

      <div className="container-max relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary-500 font-semibold text-sm tracking-widest uppercase">Insights</span>
          <h2 className="section-title mt-3">Latest News & Articles</h2>
          <p className="section-subtitle">
            Updates on our work, impact stories, and insights on education technology
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {siteData.blogPosts.map((post, i) => (
            <AnimatedSection key={post.title} delay={i * 0.1}>
              <div className="card h-full overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={siteData.images.blog[i]}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <a href="#" className="inline-flex items-center text-primary-600 text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                    Read More
                    <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
