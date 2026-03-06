import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';

export default function App() {
  return (
    <div className="selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <Hero />
      <Projects />
      
      {/* Footer / Contact */}
      <section id="contact" className="py-32 text-center">
        <p className="text-slate-500 uppercase tracking-widest text-xs mb-4 font-bold">Have a project in mind?</p>
        <a href="mailto:your@email.com" className="text-4xl md:text-7xl font-bold text-white hover:text-indigo-500 transition-colors border-b-4 border-indigo-500 pb-2">
          LET'S CHAT.
        </a>
      </section>
      
      <footer className="p-10 text-center text-slate-700 border-t border-white/5 text-xs font-mono uppercase tracking-widest">
        &copy; 2024 ROMIL CHAVDA &bull; BUILT WITH REACT & TAILWIND
      </footer>
    </div>
  );
}