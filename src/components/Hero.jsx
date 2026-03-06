import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 overflow-hidden grid-bg">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-indigo-400 font-mono text-sm tracking-[0.3em] mb-4 uppercase">
          Based in India &bull; Full Stack Developer
        </p>
        
        <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter leading-[0.9] mb-8">
          BUILDING <br />
          <span className="text-slate-500">DIGITAL</span> PRODUCTS.
        </h1>
        
        <div className="flex flex-col md:flex-row md:items-end gap-8">
          <p className="max-w-md text-lg text-slate-400 font-light leading-relaxed">
            I am <span className="text-white font-medium">Romil Chavda</span>. I specialize in building highly interactive and performant web applications that users love.
          </p>
          
          <div className="flex gap-4">
            <a href="#projects" className="h-12 px-8 flex items-center bg-white text-black font-bold rounded-full hover:bg-indigo-500 hover:text-white transition-all">
              See My Work
            </a>
            <a href="#contact" className="h-12 px-8 flex items-center border border-slate-800 font-bold rounded-full hover:bg-slate-900 transition-all">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}