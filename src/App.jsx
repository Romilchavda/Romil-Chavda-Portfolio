import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // 1. Smooth Scroll
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Custom Cursor Follower
    const cursor = document.querySelector(".custom-cursor");
    window.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out"
      });
    });
  }, []);

  return (
    <div className="bg-[#080808] text-white selection:bg-indigo-500 overflow-x-hidden">
      {/* Custom Cursor */}
      <div className="custom-cursor fixed top-0 left-0 w-8 h-8 border border-indigo-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"></div>
      
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#1e1b4b,transparent)]"></div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}