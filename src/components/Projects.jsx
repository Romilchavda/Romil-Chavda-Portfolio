import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "CYBERPUNK DASHBOARD", year: "2024", img: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2000" },
  { id: 2, title: "AESTHETIC E-COM", year: "2023", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000" },
];

const Projects = () => {
  return (
    <section id="work" className="py-32 px-6 md:px-20 bg-[#0a0a0a]">
      <div className="mb-20">
        <h2 className="text-indigo-500 font-mono text-xs tracking-[0.5em] uppercase mb-4">Case Studies</h2>
        <h3 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic">Featured <br /> <span className="text-transparent stroke-text">Work</span></h3>
      </div>

      <div className="flex flex-col gap-40">
        {projects.map((proj) => (
          <div key={proj.id} className="project-item group w-full">
            <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-3xl">
              <img 
                src={proj.img} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                alt={proj.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-10 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-indigo-400 font-mono mb-2">{proj.year}</span>
                <h4 className="text-4xl md:text-6xl font-black uppercase italic">{proj.title}</h4>
                <div className="mt-6 flex gap-4">
                    <span className="px-4 py-2 border border-white/20 rounded-full text-[10px] font-bold">REACT</span>
                    <span className="px-4 py-2 border border-white/20 rounded-full text-[10px] font-bold">GSAP</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CSS for Outlined Text (Stroked) */}
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
      `}</style>
    </section>
  );
};

export default Projects;