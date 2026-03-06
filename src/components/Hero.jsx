export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl text-center">
        <div className="inline-block px-4 py-1.5 mb-6 border border-indigo-500/30 bg-indigo-500/10 rounded-full">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Available for hire</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
          CRAFTING <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">DIGITAL</span> EXPERIENCES.
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Hi, I'm <span className="text-white font-medium">Romil Chavda</span>. A Full Stack Developer building high-end web applications with precision and passion.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-bold transition-all w-full md:w-auto">
            View Projects
          </a>
          <a href="#contact" className="border border-white/10 hover:bg-white/5 text-white px-10 py-4 rounded-2xl font-bold transition-all w-full md:w-auto">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}