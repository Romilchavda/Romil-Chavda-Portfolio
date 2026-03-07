import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "SOLANA DASHBOARD", category: "WEB3 / UI", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000" },
  { id: 2, title: "NEO BANKING APP", category: "FINTECH", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000" },
  { id: 3, title: "AI PORTFOLIO", category: "AI / ML", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000" },
];

const Projects = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const cards = gsap.utils.toArray('.project-card');
    cards.forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });
    });
  }, []);

  return (
    <section ref={sectionRef} id="work" className="py-20 px-6 md:px-20">
      <div className="flex justify-between items-end mb-20">
        <div>
          <h2 className="text-indigo-500 font-mono text-sm tracking-widest mb-2 uppercase">Selected Work</h2>
          <h3 className="text-4xl md:text-6xl font-bold italic tracking-tighter">PROJECTS.</h3>
        </div>
        <p className="hidden md:block text-slate-500 text-right max-w-[200px] text-xs leading-loose font-mono uppercase">
          Focusing on minimalism and user-centric interactions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((proj) => (
          <div key={proj.id} className="project-card group cursor-pointer">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5">
              <img 
                src={proj.img} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                alt={proj.title} 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-6 py-2 border border-white rounded-full font-bold scale-50 group-hover:scale-100 transition-transform">VIEW CASE STUDY</span>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-start">
              <div>
                <h4 className="text-2xl font-bold tracking-tight">{proj.title}</h4>
                <p className="text-slate-500 font-mono text-xs mt-1 uppercase tracking-widest">{proj.category}</p>
              </div>
              <div className="h-10 w-10 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                ↗
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;