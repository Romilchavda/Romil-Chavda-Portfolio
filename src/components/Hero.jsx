import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    // Staggered reveal for text
    tl.from(".reveal", {
      y: 150,
      skewY: 7,
      duration: 1.5,
      stagger: 0.2,
      ease: "power4.out",
      delay: 0.8
    })
    .from(".hero-sub", {
      opacity: 0,
      y: 20,
      duration: 1
    }, "-=1");
  }, { scope: container });

  return (
    <section ref={container} className="h-screen flex flex-col justify-center items-center text-center px-4">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 blur-[150px] rounded-full -z-10"></div>

      <div className="overflow-hidden">
        <h2 className="hero-sub text-indigo-400 font-mono tracking-[0.3em] mb-4 text-sm uppercase">Creative Developer</h2>
      </div>

      <div className="overflow-hidden py-2">
        <h1 className="reveal text-6xl md:text-[10vw] font-black leading-[0.9] tracking-tighter">
          DIGITAL <br /> <span className="text-transparent border-t-2 border-b-2 border-indigo-500/30 bg-clip-text bg-gradient-to-b from-white to-white/20">CRAFTING</span>
        </h1>
      </div>

      <div className="mt-10 hero-sub max-w-lg">
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
          Building immersive digital experiences where <span className="text-white italic">design</span> meets <span className="text-white font-bold">performance</span>.
        </p>
      </div>

      <div className="hero-sub mt-12">
        <div className="animate-bounce text-indigo-500">
           <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;