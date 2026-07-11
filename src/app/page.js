import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Partners from '@/components/Partners';
import BlogNews from '@/components/BlogNews';
import Careers from '@/components/Careers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
      <Testimonials />
      <Gallery />
      <Partners />
      <BlogNews />
      <Careers />
      <Contact />
      <Footer />
    </main>
  );
}
