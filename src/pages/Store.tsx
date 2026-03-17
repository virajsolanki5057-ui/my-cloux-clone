import React, { useState, useEffect } from 'react';
import { Search, Flame, Star, Users,  Filter, Sparkles, Gamepad2, ArrowUpRight } from 'lucide-react';
import GameDetailView from './view/GameDetails';

const ClouxGamingPortal: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const games = [
    { id: 1, title: "Grand Theft Auto VI", category: "Open World", rating: "5.0", players: "1.2M", desc: "The next chapter in the ultimate crime epic set in Vice City.", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e", developer: "Rockstar Games", storage: "150GB", release: "Fall 2026" },
    { id: 2, title: "Cyberpunk 2077", category: "RPG", rating: "4.8", players: "85K", desc: "Become an urban mercenary in the neon-soaked metropolis of Night City.", image: "https://images.unsplash.com/photo-1605898960710-9aa3608ca873", developer: "CD Projekt Red", storage: "70GB", release: "Out Now" },
    { id: 3, title: "Elden Ring", category: "Action RPG", rating: "4.9", players: "150K", desc: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring.", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20", developer: "FromSoftware", storage: "60GB", release: "Out Now" },
    { id: 4, title: "Red Dead Redemption 2", category: "Action-Adventure", rating: "4.9", players: "95K", desc: "An epic tale of life in America's unforgiving heartland.", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420", developer: "Rockstar Games", storage: "120GB", release: "Out Now" },
    { id: 5, title: "Ghost of Tsushima", category: "Action-Adventure", rating: "4.8", players: "110K", desc: "Uncover the hidden wonders of Tsushima in this open-world action adventure.", image: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47", developer: "Sucker Punch", storage: "50GB", release: "Out Now" },
    { id: 6, title: "Helldivers 2", category: "Shooter", rating: "4.7", players: "350K", desc: "Join the Helldivers and fight for freedom in a hostile galaxy.", image: "https://images.unsplash.com/photo-1533972751724-9135a8410a4c", developer: "Arrowhead", storage: "80GB", release: "Out Now" },
    { id: 7, title: "Apex Legends", category: "Battle Royale", rating: "4.6", players: "280K", desc: "Conquer with character in this free-to-play Hero shooter.", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e", developer: "Respawn", storage: "95GB", release: "Out Now" },
    { id: 8, title: "Valorant", category: "Tactical Shooter", rating: "4.7", players: "800K", desc: "A 5v5 character-based tactical shooter where creativity is your greatest weapon.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f", developer: "Riot Games", storage: "40GB", release: "Out Now" },
    { id: 9, title: "Baldur's Gate 3", category: "RPG", rating: "5.0", players: "120K", desc: "Gather your party and return to the Forgotten Realms.", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f", developer: "Larian Studios", storage: "150GB", release: "Out Now" },
    { id: 10, title: "Starfield", category: "Action RPG", rating: "4.4", players: "65K", desc: "Discover a massive universe in the first new universe from Bethesda in 25 years.", image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4", developer: "Bethesda Game Studios", storage: "125GB", release: "Out Now" },
    { id: 11, title: "God of War Ragnarök", category: "Action-Adventure", rating: "4.9", players: "90K", desc: "Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go.", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc", developer: "Santa Monica Studio", storage: "105GB", release: "Out Now" },
    { id: 12, title: "Forza Horizon 5", category: "Racing", rating: "4.8", players: "150K", desc: "Explore the vibrant and ever-evolving open world landscapes of Mexico.", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f", developer: "Playground Games", storage: "130GB", release: "Out Now" },
    { id: 13, title: "Overwatch 2", category: "Hero Shooter", rating: "4.3", players: "220K", desc: "A free-to-play, team-based action game set in the optimistic future.", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20", developer: "Blizzard Entertainment", storage: "50GB", release: "Out Now" },
    { id: 14, title: "Diablo IV", category: "Action RPG", rating: "4.5", players: "140K", desc: "The endless battle between the High Heavens and the Burning Hells rages on.", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420", developer: "Blizzard Entertainment", storage: "90GB", release: "Out Now" },
    { id: 15, title: "Call of Duty: Warzone", category: "Battle Royale", rating: "4.4", players: "450K", desc: "Welcome to Warzone, the massive free-to-play combat arena.", image: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47", developer: "Raven Software", storage: "125GB", release: "Out Now" },
    { id: 16, title: "Destiny 2", category: "MMO Shooter", rating: "4.6", players: "110K", desc: "Dive into the world of Destiny 2 to explore the mysteries of the solar system.", image: "https://images.unsplash.com/photo-1533972751724-9135a8410a4c", developer: "Bungie", storage: "105GB", release: "Out Now" },
    { id: 17, title: "Marvel's Spider-Man 2", category: "Action-Adventure", rating: "4.9", players: "85K", desc: "Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f", developer: "Insomniac Games", storage: "98GB", release: "Out Now" },
    { id: 18, title: "Final Fantasy XVI", category: "Action RPG", rating: "4.7", players: "75K", desc: "An epic dark fantasy world where the fate of the land is decided by the mighty Eikons.", image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4", developer: "Square Enix", storage: "90GB", release: "Out Now" },
    { id: 19, title: "Hogwarts Legacy", category: "Action RPG", rating: "4.6", players: "130K", desc: "An immersive, open-world action RPG set in the world first introduced in the Harry Potter books.", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc", developer: "Avalanche Software", storage: "85GB", release: "Out Now" },
    { id: 20, title: "The Last of Us Part I", category: "Action-Adventure", rating: "4.9", players: "60K", desc: "Experience the emotional storytelling and unforgettable characters.", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f", developer: "Naughty Dog", storage: "80GB", release: "Out Now" }
  ];

  const filters = ["All", "Action", "RPG", "Shooter", "Open World", "Racing"];

  if (selectedGame) {
    return (
      <GameDetailView 
        game={selectedGame} 
        onBack={() => setSelectedGame(null)} 
      />
    );
  }

  const filteredGames = games.filter(g => {
    const matchesSearch = g.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "All" || g.category.includes(activeFilter) || (activeFilter === "Action" && g.category.includes("Action"));
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white font-['Outfit'] selection:bg-orange-500/30">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-0 inset-x-0 h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-[#050505] to-[#050505]" />
         <div className="absolute bottom-0 inset-x-0 h-screen bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent" />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* Floating Header Navigation (Matches GameDetails layout concept) */}
      <div className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                <Gamepad2 size={24} className="text-white" />
             </div>
             <span className="text-xl font-black uppercase tracking-widest text-white">Cloux</span>
          </div>
          
          <button className="group px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-300 flex items-center gap-2">
             <span className="text-sm font-bold text-white tracking-wide">Sign In</span>
             <ArrowUpRight size={16} className="text-zinc-400 group-hover:text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>
      </div>

      <main className="relative z-10 px-6 max-w-[1600px] mx-auto pt-40 pb-32">
        
        {/* HERO SECTION */}
        <div className="mb-32 relative">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-4xl space-y-8 animate-[fadeUp_1s_ease-out]">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-md">
              <Flame size={16} className="text-orange-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-400">
                Trending: GTA VI Development Logs
              </span>
            </div>
            
            <h1 className="text-7xl md:text-8xl lg:text-[130px] font-black leading-[0.85] tracking-tighter uppercase text-white drop-shadow-2xl">
              Cloux <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                Universe
              </span>
            </h1>
            
            <p className="text-zinc-400 text-xl md:text-3xl max-w-2xl leading-relaxed font-light tracking-tight">
              Explore our curated library of premier titles designed for high-performance setups and next-gen hardware.
            </p>
          </div>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="mb-16 sticky top-24 z-40 bg-[#050505]/80 backdrop-blur-2xl py-6 border-b border-white/5 -mx-6 px-6 sm:mx-0 sm:px-0 sm:rounded-3xl sm:border sm:p-6 sm:bg-white/5 shadow-2xl transition-all">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
            
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="hidden sm:flex items-center gap-3 px-4 py-2 border-r border-white/10 mr-2 text-zinc-500">
                 <Filter size={18} />
                 <span className="text-xs font-black uppercase tracking-widest">Filter</span>
              </div>
              {filters.map(filter => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeFilter === filter 
                      ? 'bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)]' 
                      : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            {/* Search Input */}
            <div className="relative group w-full xl:w-96">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur opacity-0 group-focus-within:opacity-30 transition duration-500"></div>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-orange-500 transition-colors" size={20} />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Database..." 
                  className="w-full pl-16 pr-8 py-5 bg-black/50 backdrop-blur-md border border-white/10 rounded-3xl focus:outline-none focus:border-orange-500/50 text-white font-medium text-sm transition-all"
                />
              </div>
            </div>

          </div>
        </div>

        {/* GAMES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredGames.length > 0 ? (
            filteredGames.map((game, idx) => (
              <div 
                key={game.id} 
                onClick={() => setSelectedGame(game)}
                className="group cursor-pointer relative bg-[#0A0A0A] rounded-[2.5rem] border border-white/5 overflow-hidden hover:border-orange-500/30 flex flex-col animate-[fadeUp_0.8s_ease-out_both]"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/0 to-orange-500/0 group-hover:to-orange-500/10 transition-colors duration-500 z-0" />
                
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden bg-black z-10 m-2 rounded-[2rem]">
                  <img 
                    src={`${game.image}?auto=format&fit=crop&q=80&w=800`} 
                    alt={game.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" 
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-full">
                     <span className="text-[9px] font-black uppercase tracking-widest text-zinc-300">{game.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-orange-400 transition-colors leading-none pr-4">
                      {game.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-full shrink-0">
                      <Star size={12} fill="currentColor" />
                      <span className="text-[10px] font-black">{game.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-zinc-500 text-sm line-clamp-2 mb-8 font-light">
                     {game.desc}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                         <Users size={14} className="text-emerald-400" />
                      </div>
                      <div>
                         <div className="text-[9px] font-black uppercase tracking-widest text-zinc-600 mb-0.5">Active</div>
                         <div className="text-xs font-bold text-zinc-300 tracking-wide">{game.players}</div>
                      </div>
                    </div>
                    
                    {/* Hover Arrow */}
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 text-zinc-400 border border-white/5 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all transform group-hover:-rotate-45 duration-300">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-32 flex flex-col items-center justify-center text-center space-y-6">
               <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Sparkles size={32} className="text-zinc-600" />
               </div>
               <h3 className="text-2xl font-black uppercase tracking-widest text-white">No Results Found</h3>
               <p className="text-zinc-500">We couldn't find any games matching "{searchQuery}" in the selected category.</p>
               <button 
                 onClick={() => {setSearchQuery(""); setActiveFilter("All");}}
                 className="px-8 py-4 bg-orange-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-colors mt-4"
               >
                 Clear Filters
               </button>
            </div>
          )}
        </div>
      </main>
      
      {/* Global CSS for Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default ClouxGamingPortal;