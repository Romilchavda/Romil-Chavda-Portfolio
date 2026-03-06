import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen selection:bg-indigo-500 selection:text-white">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-indigo-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-cyan-500/5 blur-[120px] rounded-full"></div>
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        {/* You can add About and Contact components here later */}
        <section id="contact" className="py-40 text-center border-t border-white/5">
           <h2 className="text-5xl font-bold text-white mb-10">READY TO START?</h2>
           <a href="mailto:romil@example.com" className="text-2xl font-light text-slate-400 hover:text-indigo-400 underline decoration-indigo-500 underline-offset-8">
             romil.chavda@email.com
           </a>
        </section>
      </main>
      
      <footer className="py-10 text-center text-slate-600 text-xs tracking-widest border-t border-white/5 relative z-10">
        &copy; 2024 ROMIL CHAVDA. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}

export default App;