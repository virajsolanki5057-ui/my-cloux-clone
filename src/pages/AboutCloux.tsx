import React, { useEffect } from 'react';
import { Cloud, Target, Eye, Rocket, Quote } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutPage: React.FC = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // global animation duration
      once: false,    // whether animation should happen only once - while scrolling down
      mirror: true,   // whether elements should animate out while scrolling past them
      easing: 'ease-out-back', // fancy easing for gaming feel
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      
      {/* --- HERO: THE IDENTITY --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <video 
          autoPlay loop muted playsInline
          className="absolute z-0 w-full h-full object-cover opacity-20 grayscale"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-professional-gamer-playing-an-action-video-game-18693-large.mp4" type="video/mp4" />
        </video>

        {/* AI Neural Background Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600" 
            alt="AI Neural Background" 
            className="w-full h-full object-cover mix-blend-screen opacity-30 scale-110 animate-pulse"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 
            data-aos="zoom-out" 
            className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase text-white leading-none drop-shadow-[0_0_40px_rgba(249,115,22,0.4)]"
          >
            ABOUT <br/> <span className="text-orange-500">CLOUX</span>
          </h1>
          <div 
            data-aos="fade-up" 
            data-aos-delay="400"
            className="mt-6 flex items-center justify-center gap-4"
          >
             <div className="h-px w-12 md:w-20 bg-orange-500"></div>
             <p className="text-white tracking-[0.5em] font-bold uppercase text-xs md:text-sm">Est. 2026 — Intelligence Driven</p>
             <div className="h-px w-12 md:w-20 bg-orange-500"></div>
          </div>
        </div>
      </section>

      <main className="relative">
        
        {/* --- SECTION 1: THE ORIGIN --- */}
        <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8" data-aos="fade-right">
            <h2 className="text-5xl font-black uppercase tracking-tighter">
              Born in the <span className="text-orange-500">Clouds</span>, <br/> Raised in the Arena.
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Cloux Gaming started with a single realization: Most gaming sites are too slow. Too corporate. Too boring. 
              We built Cloux to be a high-velocity hub for the modern player—where news travels at the speed of fiber.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="border-l-4 border-orange-500 pl-6" data-aos="fade-up" data-aos-delay="200">
                    <h4 className="font-black uppercase text-2xl">Precision</h4>
                    <p className="text-slate-500 text-sm font-bold">No fluff, just the facts every gamer needs.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6" data-aos="fade-up" data-aos-delay="400">
                    <h4 className="font-black uppercase text-2xl">Velocity</h4>
                    <p className="text-slate-500 text-sm font-bold">First to the leaks. First to the reviews.</p>
                </div>
            </div>
          </div>
          <div className="relative" data-aos="fade-left">
             <div className="absolute -inset-4 border-4 border-orange-500 -z-10 translate-x-4 translate-y-4"></div>
             <img 
               src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200" 
               alt="Team Setup" 
               className="w-full grayscale shadow-2xl border-4 border-white transition-all duration-700 hover:grayscale-0"
             />
          </div>
        </section>

        {/* --- SECTION 2: THE PILLARS --- */}
        <section className="bg-slate-950 py-32 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/10 skew-x-12 translate-x-32"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20 text-center md:text-left" data-aos="fade-up">
                    <h3 className="text-orange-500 font-black tracking-widest uppercase text-sm mb-4">Our Methodology</h3>
                    <h2 className="text-6xl font-black uppercase tracking-tighter">How we <span className="italic">Level Up</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { icon: <Target className="w-12 h-12 text-orange-500" />, title: "The Objective", desc: "To create the world's most transparent gaming news ecosystem." },
                        { icon: <Eye className="w-12 h-12 text-orange-500" />, title: "The Vision", desc: "A future where every gamer has access to pro-tier insights for free." },
                        { icon: <Rocket className="w-12 h-12 text-orange-500" />, title: "The Drive", desc: "We are powered by the community, for the community. Period." }
                    ].map((item, i) => (
                        <div 
                          key={i} 
                          data-aos="zoom-in-up" 
                          data-aos-delay={i * 200}
                          className="group p-8 border border-white/10 hover:border-orange-500 transition-all bg-white/5 backdrop-blur-sm"
                        >
                            <div className="mb-6 group-hover:rotate-12 transition-transform duration-500">{item.icon}</div>
                            <h4 className="text-2xl font-black uppercase mb-4">{item.title}</h4>
                            <p className="text-white/60 font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- SECTION 3: QUOTE --- */}
        <section className="max-w-4xl mx-auto px-6 py-40 text-center" data-aos="fade-in">
            <Quote className="w-16 h-16 text-orange-500 mx-auto mb-8 opacity-20" data-aos="rotate-in" />
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-tight">
                "We don't just cover the game. We live in the pixels. Cloux is a tribute to the late-night grinders and the competitive dreamers."
            </h2>
            <div className="mt-10" data-aos="fade-up" data-aos-delay="300">
                <p className="font-black uppercase tracking-widest text-orange-500">— The Founder of Cloux</p>
            </div>
        </section>

        {/* --- GALLERY: STAGGERED FADE --- */}
        <section className="px-6 pb-40">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <img data-aos="fade-up" data-aos-delay="0" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=700&fit=crop" className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all" alt="Gaming 1" />
                <img data-aos="fade-up" data-aos-delay="100" src="https://images.unsplash.com/photo-1542751110-97427bbecf20?w=500&h=700&fit=crop" className="w-full h-80 object-cover mt-8 grayscale hover:grayscale-0 transition-all" alt="Gaming 2" />
                <img data-aos="fade-up" data-aos-delay="200" src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&h=700&fit=crop" className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all" alt="Gaming 3" />
                <img data-aos="fade-up" data-aos-delay="300" src="https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=500&h=700&fit=crop" className="w-full h-80 object-cover mt-8 grayscale hover:grayscale-0 transition-all" alt="Gaming 4" />
            </div>
        </section>

      </main>

      {/* --- FOOTER: FINAL CALL --- */}
      <footer className="py-20 bg-orange-500 text-white text-center overflow-hidden">
        <div data-aos="zoom-in">
          <Cloud className="w-12 h-12 mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Cloux Gaming</h2>
          <p className="font-bold tracking-[0.3em] uppercase text-sm mb-12">Elevating the culture since 2026</p>
          <button className="px-10 py-4 bg-white text-orange-600 font-black uppercase tracking-widest hover:bg-slate-950 hover:text-white transition-all transform hover:scale-110 active:scale-95">
              Join the Discord
          </button>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;