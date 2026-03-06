import React from 'react';
import { Github, ExternalLink, Box } from 'lucide-react';

const projects = [
  {
    title: "Quantum Dashboard",
    desc: "A futuristic data visualization tool for SaaS platforms built with React and Tailwind.",
    tech: ["React", "D3.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Apex E-Commerce",
    desc: "A clean, minimal shopping experience with focus on smooth transitions and performance.",
    tech: ["Next.js", "Stripe", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">Projects</h2>
            <div className="h-1 w-20 bg-indigo-500"></div>
          </div>
          <p className="text-slate-500 hidden md:block">01 / SELECTED WORKS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-white/5">
                <img src={p.image} className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" alt={p.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-80"></div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{p.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed max-w-sm">{p.desc}</p>
                  <div className="flex gap-2">
                    {p.tech.map(t => (
                      <span key={t} className="text-[10px] font-mono border border-slate-800 px-2 py-1 rounded text-slate-500 uppercase">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 text-slate-500">
                  <Github size={20} className="hover:text-white" />
                  <ExternalLink size={20} className="hover:text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}