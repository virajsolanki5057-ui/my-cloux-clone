import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cards = [
  {
    tag: "OUR ALL GAMES",
    title: "CLOUX GAMES",
    desc: "Explore new worlds, epic battles, and thrilling adventures. Play, compete, and experience gaming like never before.",
    button: "EXPLORE",
    image: "https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/box-1-bg.jpg",
  },
  {
    tag: "JOIN THE COMMUNITY",
    title: "FORUMS",
    desc: "Join discussions, share tips, and connect with gamers. Your hub for news, strategies, and community insights.",
    button: "DISCOVER",
    image: "https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/box-2-bg.jpg",
  },
  {
    tag: "GUIDES & SUPPORT",
    title: "HELP CENTER",
    desc: "Need support? Find answers, guides, and troubleshooting tips. Get help fast and keep your gaming experience smooth.",
    button: "VISIT",
    image: "https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/box-3-bg.jpg",
  },
];

const NewGames: React.FC = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animation happens only once while scrolling down
      easing: "ease-out-quart",
    });
  }, []);

  return (
    <section className="bg-white py-20 px-4 font-['Titillium_Web',sans-serif] overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer shadow-2xl shadow-gray-200"
              // AOS Attributes
              data-aos="fade-up"
              data-aos-delay={index * 200} // Staggered delay: 0ms, 200ms, 400ms
            >
              {/* Background Image with slow zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${card.image})` }}
              />

              {/* Dynamic Gradient Overlay - Changes on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Orange Accent Bar (Left side) */}
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              {/* Content Container */}
              <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
                
                {/* Tag with Slide-up effect */}
                <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-500 mb-2 transform group-hover:-translate-y-1 transition-transform duration-300">
                  {card.tag}
                </span>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-black uppercase leading-none italic mb-4 tracking-tighter">
                  {card.title}
                </h3>

                {/* Description - Fade and Slide */}
                <p className="text-sm text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {card.desc}
                </p>

                {/* Button - Top to Bottom Fill */}
                <div className="mt-6 flex overflow-hidden">
                  <button className="group/btn relative px-8 py-3 bg-transparent border-2 border-orange-500 overflow-hidden">
                    <span className="relative z-10 text-xs font-black uppercase tracking-widest text-orange-500 group-hover/btn:text-black transition-colors duration-300">
                      {card.button}
                    </span>
                    {/* The "Top-to-Bottom" Fill logic */}
                    <div className="absolute inset-0 bg-orange-500 transform -translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out" />
                  </button>
                </div>
              </div>

              {/* Decorative Corner (Gaming Aesthetic) */}
              <div 
                className="absolute top-0 right-0 w-16 h-16 bg-white/10 group-hover:bg-orange-500/20 transition-colors" 
                style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewGames;