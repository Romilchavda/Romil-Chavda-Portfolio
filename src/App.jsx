import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';

export default function App() {
  
  // Smooth Scrolling (Lenis) Setup
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white selection:bg-indigo-500 selection:text-white min-h-screen relative overflow-x-hidden">
      
      {/* Premium Background Noise (Optional but looks great) */}
      <div className="fixed inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        
        {/* Footer / Contact Section */}
        <section id="contact" className="py-40 text-center px-4">
          <p className="text-indigo-400 uppercase tracking-[0.3em] text-xs mb-6 font-bold">Have a project in mind?</p>
          <div className="overflow-hidden">
            <a href="mailto:your@email.com" className="contact-link inline-block text-5xl md:text-8xl font-black text-white hover:text-indigo-500 transition-colors duration-500 border-b-8 border-indigo-600 pb-4">
              LET'S CHAT.
            </a>
          </div>
        </section>
        
        <footer className="p-10 text-center text-slate-600 border-t border-white/5 text-[10px] font-mono uppercase tracking-[0.5em]">
          &copy; 2024 ROMIL CHAVDA &bull; BUILT WITH REACT & GSAP
        </footer>
      </div>
    </div>
  );
}