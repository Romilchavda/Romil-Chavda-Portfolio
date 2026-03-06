import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "AI Dashboard",
    cat: "SAAS / WEB APP",
    desc: "Next-generation analytics platform with AI insights.",
    tags: ["React", "Node", "Tailwind"],
  },
  {
    title: "E-Store",
    cat: "E-COMMERCE",
    desc: "Modern shopping experience with seamless checkout.",
    tags: ["Redux", "Stripe", "Firebase"],
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-4 italic underline decoration-indigo-500">SELECTED WORKS</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <div key={i} className="group relative">
              <div className="aspect-video bg-slate-900 rounded-3xl overflow-hidden border border-white/5 mb-6 group-hover:border-indigo-500/50 transition-colors">
                 {/* Project Image Here */}
                 <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-700 font-bold">IMAGE_PLACEHOLDER</div>
              </div>
              <p className="text-indigo-400 text-xs font-bold tracking-widest mb-2 uppercase">{p.cat}</p>
              <div className="flex justify-between items-start">
                <h3 className="text-3xl font-bold text-white mb-4">{p.title}</h3>
                <div className="flex gap-4">
                  <Github size={20} className="text-slate-500 hover:text-white transition-colors" />
                  <ExternalLink size={20} className="text-slate-500 hover:text-white transition-colors" />
                </div>
              </div>
              <p className="text-slate-400 mb-6 max-w-md leading-relaxed">{p.desc}</p>
              <div className="flex gap-3">
                {p.tags.map(t => <span key={t} className="text-[10px] border border-white/10 px-3 py-1 rounded-full text-slate-300 font-medium">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}