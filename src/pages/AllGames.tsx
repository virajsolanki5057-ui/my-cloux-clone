import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

const games = [
  {
    title: "SPACE WARS",
    platforms: "STEAM, XBOX ONE",
    desc: "Engage in intergalactic battles, explore unknown galaxies, and command",
    image: "https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/me-cover-384x488.jpg",
    filter: ["STEAM", "XBOX ONE"],
  },
  {
    title: "RETURN OF THE CARS",
    platforms: "STEAM, UPLAY",
    desc: "Rev up your engines and race through thrilling tracks. Customize your ride,",
    image: "https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/nfs-cover-384x488.jpg",
    filter: ["STEAM", "UPLAY"],
  },
  {
    title: "PLANES OF GLORIA",
    platforms: "UPLAY, XBOX ONE",
    desc: "Soar through the skies, engage in epic dogfights, and master aerial combat.",
    image: "https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/Planes-of-Gloria-384x488.jpg",
    filter: ["UPLAY", "XBOX ONE"],
  },
  {
    title: "EARTH WARS",
    platforms: "ORIGIN, PLAYSTATION 4",
    desc: "Rewrite history in intense global battles. Lead nations, command armies, and",
    image: "https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/cod-cover-384x488.jpg",
    filter: ["ORIGIN", "PLAYSTATION 4"],
  },
  {
    title: "THE WARRIOR 3",
    platforms: "ORIGIN, PLAYSTATION 4",
    desc: "Enter a world of action and honor. Master deadly combat, unlock powerful",
    image: "https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/the-witcher-1-384x488.jpg",
    filter: ["ORIGIN", "PLAYSTATION 4"],
  },
  {
    title: "LIFE AND STRUGGLE",
    platforms: "ORIGIN, STEAM, UPLAY",
    desc: "Survive, adapt, and thrive in a world full of challenges. Make tough choices,",
    image: "https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/gta-poster-384x488.jpg",
    filter: ["ORIGIN", "STEAM", "UPLAY"],
  },
  {
    title: "GLORIA SOCCER",
    platforms: "ORIGIN, PLAYSTATION 4",
    desc: "Lead your team to victory with skillful tactics and precision. Experience realistic",
    image: "https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/soccer-poster-384x488.jpg",
    filter: ["ORIGIN", "PLAYSTATION 4"],
  },
  {
    title: "EGYPT AND WORLD",
    platforms: "PLAYSTATION 4, STEAM",
    desc: "Uncover ancient mysteries, build mighty empires, and shape history. Explore",
    image: "https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/ew-cover-384x488.jpg",
    filter: ["PLAYSTATION 4", "STEAM"],
  },
];

const filters = ["ALL", "ORIGIN", "PLAYSTATION 4", "STEAM", "UPLAY", "XBOX ONE"];

const GamesGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false,    // Whether animation should happen only once - set to false to re-animate on scroll
      easing: 'ease-out-back',
    });
  }, []);

  // Refresh AOS when filter changes to ensure new items animate
  useEffect(() => {
    AOS.refresh();
  }, [activeFilter]);

  const filteredGames =
    activeFilter === "ALL"
      ? games
      : games.filter((game) => game.filter.includes(activeFilter));

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-24 bg-[#0a0a0a] min-h-screen text-white font-sans overflow-hidden">
      {/* Header Section */}
      <div 
        className="flex flex-col items-center mb-16"
        data-aos="fade-down"
      >
        <h2 className="text-5xl font-black italic uppercase tracking-tight mb-2">
          Latest <span className="text-orange-500">Games</span>
        </h2>
        <div className="flex items-center gap-2">
           <div className="h-[2px] w-12 bg-orange-500"></div>
           <div className="h-2 w-2 bg-orange-500 rotate-45"></div>
           <div className="h-[2px] w-12 bg-orange-500"></div>
        </div>
      </div>

      {/* Filters */}
      <div 
        className="flex flex-wrap gap-4 justify-center mb-16"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`relative px-8 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 border-b-2 overflow-hidden ${
              activeFilter === f
                ? "text-white border-orange-500 bg-orange-500/10 shadow-[0_10px_20px_-10px_rgba(249,115,22,0.5)]"
                : "text-zinc-500 border-zinc-800 hover:text-orange-500 hover:border-orange-500"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Game Cards Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {filteredGames.map((game, i) => (
          <div
            key={`${activeFilter}-${i}`} // Changing key forces AOS to re-animate on filter
            data-aos="zoom-in-up"
            data-aos-delay={i * 100} // Staggered delay effect
            className="group relative bg-[#111] rounded-lg overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-orange-500/10 border border-white/5"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
            </div>

            {/* Content Info */}
            <div className="p-6 relative z-10 -mt-16">
              <span className="inline-block px-2 py-0.5 bg-orange-500 text-[10px] font-black text-white mb-3">
                {game.platforms.split(',')[0]}
              </span>
              <h3 className="text-2xl font-black uppercase leading-[0.9] mb-3 group-hover:text-orange-500 transition-colors">
                {game.title}
              </h3>
              <p className="text-xs text-zinc-400 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                {game.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div 
        className="flex justify-center mt-20"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <button className="group relative px-12 py-5 bg-transparent overflow-hidden border-2 border-orange-500 rounded-sm font-black uppercase tracking-[0.3em] text-sm text-white transition-all">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
            All Games
          </span>
          <div className="absolute inset-0 bg-orange-500 transform -translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
        </button>
      </div>
    </section>
  );
};

export default GamesGallery;