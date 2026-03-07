import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-[#080808] px-6">
      <h2 className="text-indigo-500 font-mono mb-6 tracking-widest uppercase">Step into the light</h2>
      
      <div className="group relative">
        <a href="mailto:your@email.com" className="text-[12vw] font-black leading-none tracking-tighter hover:italic transition-all duration-500 block">
          LET'S TALK<span className="text-indigo-600">.</span>
        </a>
        <div className="w-0 h-2 bg-indigo-600 group-hover:w-full transition-all duration-500"></div>
      </div>

      <div className="mt-20 flex gap-10 md:gap-20 text-xs md:text-sm font-mono tracking-[0.4em] uppercase opacity-50">
         <a href="#" className="hover:opacity-100 hover:text-indigo-400">Instagram</a>
         <a href="#" className="hover:opacity-100 hover:text-indigo-400">LinkedIn</a>
         <a href="#" className="hover:opacity-100 hover:text-indigo-400">Behance</a>
      </div>
    </section>
  );
};

export default Contact;