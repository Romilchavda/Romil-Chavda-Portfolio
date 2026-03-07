import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact'; // <-- Ye line zaroori hai

export default function App() {
  
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white selection:bg-indigo-500 min-h-screen">
      {/* Background Noise Texture */}
      <div className="fixed inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        
        {/* Naya Contact Section yahan aayega */}
        <Contact />
        
        <footer className="py-10 text-center text-white/30 text-[10px] font-mono tracking-[0.5em] bg-indigo-700">
          DESIGNED & DEVELOPED BY ROMIL CHAVDA &bull; 2024
        </footer>
      </div>
    </div>
  );
}