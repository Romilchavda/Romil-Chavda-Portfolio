import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
  const navRef = useRef();

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.5
    });
  });

  return (
    <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] md:w-[60%] flex justify-between items-center px-8 py-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full shadow-2xl">
      <div className="text-xl font-black tracking-tighter">
        RC<span className="text-indigo-500">.</span>
      </div>
      
      <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-bold">
        {['Home', 'Work', 'About', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-indigo-400 transition-colors relative group">
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-500 transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <button className="bg-white text-black px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all active:scale-95">
        Resume
      </button>
    </nav>
  );
};

export default Navbar;