import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-40 bg-indigo-600 text-white overflow-hidden mt-20">
      
      {/* Infinite Marquee Effect (Chalti hui line) */}
      <div className="absolute top-0 flex whitespace-nowrap overflow-hidden py-4 border-b border-white/20 bg-indigo-700 w-full">
        <div className="animate-marquee inline-block text-[10px] font-bold tracking-[0.4em] uppercase">
             LET'S WORK TOGETHER — AVAILABLE FOR FREELANCE — SEND AN EMAIL — &nbsp;
        </div>
        <div className="animate-marquee inline-block text-[10px] font-bold tracking-[0.4em] uppercase">
             LET'S WORK TOGETHER — AVAILABLE FOR FREELANCE — SEND AN EMAIL — &nbsp;
        </div>
      </div>

      <div className="px-6 md:px-20 mt-10">
         <h2 className="text-lg font-mono mb-10 opacity-80 underline underline-offset-8">04. CONTACT</h2>
         <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <h3 className="text-5xl md:text-8xl font-black leading-tight tracking-tighter">
                START A <br /> CONVERSATION
            </h3>
            
            <div className="flex flex-col gap-6 text-right self-end">
                <a href="mailto:romil@example.com" className="text-2xl md:text-4xl font-bold hover:italic transition-all duration-300">
                   LET'S TALK.
                </a>
                <div className="flex gap-6 justify-end opacity-60 font-mono text-xs tracking-widest mt-4">
                    <a href="#" className="hover:text-black transition-colors">LINKEDIN</a>
                    <a href="#" className="hover:text-black transition-colors">GITHUB</a>
                    <a href="#" className="hover:text-black transition-colors">TWITTER</a>
                </div>
            </div>
         </div>
      </div>

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Contact;