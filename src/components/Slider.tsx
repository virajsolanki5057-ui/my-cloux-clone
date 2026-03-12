import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [
  {
    image: "https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/nfs-slider.jpg",
    title: "RETURN OF THE CARS",
    subtitle: "Rev up your engines and race through thrilling tracks. Customize your ride and dominate the streets.",
  },
  {
    image: "https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/egypt-slider-1920x941.jpg",
    title: "ULTIMATE RACING",
    subtitle: "High speed action with next-gen graphics and intense competition.",
  },
  {
    image: "https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/fs-7-1920x950.jpg",
    title: "STREET LEGENDS",
    subtitle: "Rule the streets and prove your dominance in extreme racing battles.",
  },
];

const HeroSlider: React.FC = () => {
  const [index, setIndex] = useState(0);

  // 1. Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // Allows animations to repeat
    });
  }, []);

  // 2. IMPORTANT: Refresh AOS when the index changes
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // 5s gives time to enjoy the animation

    // Reset AOS classes to re-trigger animations on slide change
    AOS.refresh(); 
    
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="relative w-full h-[90vh] sm:h-[80vh] md:h-[100vh] overflow-hidden bg-black">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background with Zoom Effect */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
                backgroundImage: `url(${slide.image})`,
                // This adds a subtle "zoom-out" feel when the slide becomes active
                transform: i === index ? 'scale(1.05)' : 'scale(1.2)',
                transition: 'transform 6s ease-out, opacity 1s ease-in-out'
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white">
            
            {/* Title: Zoom-in or Fade-down */}
            {i === index && (
              <>
                <h1 
                  data-aos="fade-down" 
                  className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tighter"
                >
                  {slide.title}
                </h1>

                {/* Subtitle: Fade-up with delay */}
                <p 
                  data-aos="fade-up" 
                  data-aos-delay="300"
                  className="mt-4 text-sm md:text-lg text-white/80 max-w-2xl"
                >
                  {slide.subtitle}
                </p>

                {/* Buttons: Flip or Slide-up with longer delay */}
                <div 
                  data-aos="zoom-in" 
                  data-aos-delay="600"
                  className="mt-8 flex flex-col sm:flex-row gap-4"
                >
                  <button className="bg-white text-black px-8 py-3 font-bold hover:bg-orange-500 hover:text-white transition-all duration-300">
                    GAME DETAILS
                  </button>
                  <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 font-bold hover:bg-orange-500 hover:text-white transition-all duration-300">
                    BUY NOW
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 w-12 transition-all duration-500 ${
              i === index ? "bg-orange-500" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;