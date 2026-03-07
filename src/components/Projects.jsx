import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const projects = [
  { id: 1, title: "ULTRA REALISM", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000" },
  { id: 2, title: "NEON DARKNESS", img: "https://images.unsplash.com/photo-1605142805531-99af4974d722?q=80&w=2000" },
  { id: 3, title: "MINIMAL VOID", img: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2000" },
  { id: 4, title: "FUTURE GRID", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000" },
];

const Projects = () => {
  const containerRef = useRef();
  const sliderRef = useRef();

  useEffect(() => {
    let sections = gsap.utils.toArray(".project-slide");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth
      }
    });
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden bg-[#080808]">
      <div ref={sliderRef} className="flex w-[400vw] h-screen items-center">
        {projects.map((proj) => (
          <section key={proj.id} className="project-slide w-screen h-screen flex flex-col justify-center px-10 md:px-32 relative">
            <h2 className="text-[15vw] font-black leading-none tracking-tighter opacity-10 absolute top-20 left-10 select-none">
                0{proj.id}
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-10 z-10">
                <div className="w-full md:w-3/5 aspect-video overflow-hidden rounded-lg group">
                    <img src={proj.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                </div>
                <div className="w-full md:w-2/5">
                    <h3 className="text-5xl md:text-7xl font-black italic">{proj.title}</h3>
                    <p className="mt-6 text-slate-400 font-mono text-sm tracking-widest uppercase">Visual Design / Development</p>
                    <button className="mt-10 px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black transition-all">VIEW PROJECT</button>
                </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Projects;