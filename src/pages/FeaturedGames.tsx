import React, { useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export interface Game {
  id: number;
  title: string;
  image: string;
  platforms: string;
  tags: string;
}

export const games: Game[] = [
  { id: 1, title: 'SPACE WARS', image: 'https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/cod-cover-384x488.jpg', platforms: 'STEAM, XBOX ONE', tags: 'ADVENTURE, FPS' },
  { id: 2, title: 'RETURN OF THE CARS', image: 'https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/the-witcher-1-384x488.jpg', platforms: 'STEAM, UPLAY', tags: 'RACING, SPORTS' },
  { id: 3, title: 'PLANES OF GLORIA', image: 'https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/me-cover-384x488.jpg', platforms: 'UPLAY, XBOX ONE', tags: 'SIMULATION, STRATEGY' },
  { id: 4, title: 'WORLD AT WAR', image: 'https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/gta-poster-384x488.jpg', platforms: 'STEAM, PS4', tags: 'ACTION, WAR' },
  { id: 5, title: 'SOCCER 2024', image: 'https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/soccer-poster-384x488.jpg', platforms: 'STEAM, XBOX', tags: 'SPORTS' },
  { id: 6, title: 'EXTREME WARS', image: 'https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/ew-cover-384x488.jpg', platforms: 'STEAM, UPLAY', tags: 'STRATEGY' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } 
  }
};

const FeaturedGames: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out-back'
    });
  }, []);

  return (
    <section className="bg-[#f8f9fa] py-20 px-4 overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section with AOS */}
        <div 
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h2 className="text-5xl font-black uppercase tracking-tighter italic text-[#1a1a1a]">
            FEATURED <span className="text-orange-500 relative inline-block">
              GAMES
              {/* Animated underline using AOS */}
              <span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500 transform skew-x-[-20deg]"
                data-aos="width-grow" // Custom style hint
                data-aos-delay="500"
              ></span>
            </span>
          </h2>
          <p 
            className="mt-4 text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Experience the best titles this year
          </p>
        </div>

        {/* Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {games.map((game, index) => (
            <motion.div 
              key={game.id} 
              variants={cardVariants}
              onClick={() => navigate(`/game/${game.id}`)}
              className="group relative cursor-pointer bg-black overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-500"
              // Adding AOS delay per index for secondary scroll logic
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>

              {/* Hover Overlay - Handled by Framer/CSS for instant response */}
              <div className="absolute inset-0 bg-orange-500/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col items-center justify-center p-6 text-center z-20">
                <div className="border-2 border-white p-4 scale-75 group-hover:scale-100 transition-transform duration-500 delay-100">
                  <h4 className="text-white text-xl font-black uppercase mb-1">{game.title}</h4>
                  <div className="w-12 h-1 bg-white mx-auto"></div>
                </div>
                <button className="mt-6 px-6 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-orange-500 transition-colors">
                  View Details
                </button>
              </div>

              {/* Default Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300 z-10">
                <h3 className="text-white text-2xl font-black uppercase tracking-tight mb-3 transform group-hover:-translate-y-2 transition-transform">
                  {game.title}
                </h3>
                <div className="flex flex-col gap-2 border-l-2 border-orange-500 pl-4">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-orange-400 uppercase tracking-widest">
                    <span className="bg-orange-500 text-black px-1 rounded-sm">PC</span> {game.platforms}
                  </div>
                  <div className="text-[10px] text-gray-400 font-medium uppercase italic">
                    {game.tags}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedGames;