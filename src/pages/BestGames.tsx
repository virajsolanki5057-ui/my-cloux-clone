import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FifaRelease: React.FC = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Set to true if you only want it to animate the first time
      easing: 'ease-out-quart',
    });
  }, []);

  return (
    <section 
      className="relative min-h-[600px] w-full flex items-center justify-center bg-[#0a0a0a] overflow-hidden px-6 py-20"
    >
      {/* Background with optimized overlays */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ 
          backgroundImage: `linear-gradient(to right, #0a0a0a 20%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.3) 100%), url('https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2018/01/fifa-release-bg.jpg')` 
        }}
      />

      {/* Decorative Background Element */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/10 skew-x-[-20deg] translate-x-32 z-0" 
        data-aos="fade-left"
        data-aos-duration="1500"
      />

      <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content Side */}
        <div className="flex-1 text-white">
          <div 
            className="inline-block px-3 py-1 bg-orange-500 text-[10px] font-black tracking-[0.3em] uppercase mb-4"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            New Arrival
          </div>
          
          <div className="space-y-0 mb-8">
            <h1 
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] italic"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              FIFA SOCCER
            </h1>
            <h2 
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-orange-500 leading-[0.85] italic"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              IS RELEASED
            </h2>
          </div>

          <div 
            className="relative pl-6 border-l-4 border-orange-500 py-2 mb-10 bg-white/5 backdrop-blur-sm p-6 rounded-r-lg max-w-xl"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
              The wait is over! Experience next-level gameplay, enhanced graphics, and realistic mechanics. 
              Build your dream team, compete globally, and dominate the field.
            </p>
          </div>

          <div 
            className="flex flex-wrap gap-6"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            {/* Top-to-Bottom Fill Button */}
            <button className="group relative px-10 py-4 bg-transparent border-2 border-orange-500 overflow-hidden">
              <span className="relative z-10 font-black uppercase tracking-widest text-sm transition-colors duration-300 group-hover:text-black">
                Buy Now
              </span>
              <div className="absolute inset-0 bg-orange-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </button>

            <button className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 font-black uppercase tracking-widest text-sm transition-all italic">
              Read More
            </button>
          </div>
        </div>

        {/* Right Image Side */}
        <div 
          className="flex-1 relative group"
          data-aos="zoom-in-left"
          data-aos-delay="1200"
        >
          {/* Animated Glow behind image */}
          <div className="absolute -inset-2 bg-orange-500/20 blur-2xl group-hover:bg-orange-500/40 transition-all duration-500 rounded-full" />
          
          <div className="relative">
            {/* Slanted Image Container */}
            <div className="relative z-10 border-2 border-orange-500/50 p-2 bg-[#111] transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2018/01/fifa-release-image-530x370.jpg" 
                alt="FIFA celebration" 
                className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            {/* Decorative Skewed box */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-orange-500/30 -z-10 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FifaRelease;