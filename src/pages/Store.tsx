import React, { useState, useEffect } from 'react';
import { 
  Play, Star, Users, ChevronRight, Flame, Search, Filter, 
  ChevronLeft, Share2, Cpu, ShieldCheck, Gamepad2, Download, 
  Trophy, Clock, Activity 
} from 'lucide-react';

const ClouxGamingPortal: React.FC = () => {
  // 1. NAVIGATION STATE
  const [selectedGame, setSelectedGame] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Scroll to top when game is selected
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedGame]);

  // 2. DATASET (20 Real Games)
  const games = [
    { id: 1, title: "Grand Theft Auto VI", category: "Open World", rating: "5.0", players: "1.2M", desc: "The next chapter in the ultimate crime epic set in Vice City. Experience the biggest evolution of the series yet.", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e", developer: "Rockstar Games", storage: "150GB", release: "Fall 2026" },
    { id: 2, title: "Cyberpunk 2077", category: "RPG", rating: "4.8", players: "85K", desc: "Become an urban mercenary in the neon-soaked metropolis of Night City. High-stakes action meets deep customization.", image: "https://images.unsplash.com/photo-1605898960710-9aa3608ca873", developer: "CD Projekt Red", storage: "70GB", release: "Out Now" },
    { id: 3, title: "Elden Ring", category: "Souls-like", rating: "4.9", players: "120K", desc: "Rise, Tarnished, and brandish the power of the Elden Ring in the Lands Between.", image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf", developer: "FromSoftware", storage: "60GB", release: "Out Now" },
    { id: 4, title: "Valorant", category: "Tactical Shooter", rating: "4.7", players: "950K", desc: "A 5v5 character-based tactical shooter where precise skill meets strategy.", image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2", developer: "Riot Games", storage: "35GB", release: "Live" },
    { id: 5, title: "God of War Ragnarök", category: "Action", rating: "4.9", players: "45K", desc: "Kratos and Atreus embark on a mythic journey through the Nine Realms.", image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd", developer: "Santa Monica", storage: "90GB", release: "Out Now" },
    { id: 6, title: "Red Dead Redemption 2", category: "Open World", rating: "5.0", players: "65K", desc: "An epic tale of life in America's unforgiving heartland.", image: "https://images.unsplash.com/photo-1533972751724-9135a8410a4c", developer: "Rockstar Games", storage: "120GB", release: "Out Now" },
    { id: 7, title: "League of Legends", category: "MOBA", rating: "4.6", players: "2.5M", desc: "The world's most popular MOBA featuring over 160 champions.", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20", developer: "Riot Games", storage: "16GB", release: "Live" },
    { id: 8, title: "Minecraft", category: "Sandbox", rating: "4.9", players: "1.8M", desc: "Build anything you can imagine in a world of infinite blocks.", image: "https://images.unsplash.com/photo-1613987540507-68879685043a", developer: "Mojang", storage: "2GB", release: "Live" },
    { id: 9, title: "The Witcher 3", category: "RPG", rating: "4.9", players: "30K", desc: "Hunt monsters in a war-torn world as Geralt of Rivia.", image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5", developer: "CD Projekt Red", storage: "50GB", release: "Out Now" },
    { id: 10, title: "Apex Legends", category: "Battle Royale", rating: "4.7", players: "400K", desc: "Master an ever-growing roster of legendary characters.", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420", developer: "Respawn", storage: "60GB", release: "Live" },
    { id: 11, title: "Spider-Man 2", category: "Action", rating: "4.8", players: "25K", desc: "Swing through New York as Peter Parker and Miles Morales.", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820", developer: "Insomniac", storage: "85GB", release: "Out Now" },
    { id: 12, title: "Ghost of Tsushima", category: "Samurai", rating: "4.9", players: "18K", desc: "Protect your island as a samurai in 13th-century Japan.", image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400", developer: "Sucker Punch", storage: "50GB", release: "Out Now" },
    { id: 13, title: "Hades II", category: "Roguelike", rating: "4.9", players: "55K", desc: "Battle beyond the Underworld using dark sorcery.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f", developer: "Supergiant", storage: "10GB", release: "Early Access" },
    { id: 14, title: "Forza Horizon 5", category: "Racing", rating: "4.8", players: "40K", desc: "Explore the vibrant landscapes of Mexico in 500+ cars.", image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e", developer: "Playground Games", storage: "110GB", release: "Out Now" },
    { id: 15, title: "Final Fantasy VII Rebirth", category: "RPG", rating: "4.8", players: "35K", desc: "Cloud and his allies escape Midgar in search of Sephiroth.", image: "https://images.unsplash.com/photo-1605898960710-9aa3608ca873", developer: "Square Enix", storage: "145GB", release: "Out Now" },
    { id: 16, title: "Destiny 2", category: "Shooter", rating: "4.5", players: "110K", desc: "Dive into the world of Destiny to explore the solar system.", image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2", developer: "Bungie", storage: "105GB", release: "Live" },
    { id: 17, title: "Doom Eternal", category: "FPS", rating: "4.8", players: "12K", desc: "Hell's armies have invaded Earth. Become the Slayer.", image: "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e", developer: "id Software", storage: "50GB", release: "Out Now" },
    { id: 18, title: "Resident Evil 4", category: "Horror", rating: "4.9", players: "22K", desc: "Survival is just the beginning. A reimagined horror classic.", image: "https://images.unsplash.com/photo-1589241062272-c0a000072dfa", developer: "Capcom", storage: "60GB", release: "Out Now" },
    { id: 19, title: "Starfield", category: "Sci-Fi", rating: "4.4", players: "50K", desc: "The first new universe in 25 years from Bethesda.", image: "https://images.unsplash.com/photo-1614728263952-84ea206f9c45", developer: "Bethesda", storage: "125GB", release: "Out Now" },
    { id: 20, title: "Overwatch 2", category: "Hero Shooter", rating: "4.3", players: "300K", desc: "A free-to-play, team-based action game.", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc", developer: "Blizzard", storage: "50GB", release: "Live" },
  ];

  // 3. RENDER: GAME DETAILS VIEW
  if (selectedGame) {
    return (
      <div className="min-h-screen bg-white text-zinc-900 font-['Outfit'] animate-[fadeIn_0.5s_ease-out]">
        {/* HERO HEADER */}
        <div className="relative h-[65vh] w-full overflow-hidden">
          <img 
            src={`${selectedGame.image}?auto=format&fit=crop&q=80&w=1600`} 
            className="w-full h-full object-cover scale-105 animate-[pulse_10s_infinite]" 
            alt={selectedGame.title} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
          
          <div className="absolute top-8 left-8">
            <button 
              onClick={() => setSelectedGame(null)}
              className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-md rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:bg-orange-500 hover:text-white transition-all group border border-zinc-100"
            >
              <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Universe
            </button>
          </div>
        </div>

        {/* DETAILS CONTENT */}
        <main className="max-w-7xl mx-auto px-12 -mt-40 relative z-10 pb-32">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* LEFT PANEL */}
            <div className="lg:col-span-8 space-y-10">
              <div className="bg-white p-12 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(255,237,213,0.5)] border border-zinc-100">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="px-5 py-1.5 bg-orange-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                    {selectedGame.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-orange-600 bg-orange-50 px-4 py-1.5 rounded-full font-black text-xs">
                    <Star size={16} fill="currentColor" /> {selectedGame.rating}
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-400 bg-zinc-50 px-4 py-1.5 rounded-full font-bold text-xs uppercase">
                    <Activity size={16} /> {selectedGame.players} Active
                  </div>
                </div>

                <h1 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter text-zinc-950 mb-8 leading-[0.85]">
                  {selectedGame.title}
                </h1>
                
                <p className="text-zinc-500 text-2xl leading-relaxed font-light max-w-2xl">
                  {selectedGame.desc}
                </p>

                <div className="flex gap-4 mt-12">
                  <button className="h-20 px-12 bg-zinc-950 text-white font-black uppercase tracking-tighter hover:bg-orange-600 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-4 shadow-2xl shadow-orange-200">
                    Join Session <Play fill="currentColor" size={20} />
                  </button>
                  <button className="h-20 w-20 bg-zinc-50 border border-zinc-100 flex items-center justify-center rounded-2xl hover:text-orange-600 transition-colors">
                    <Share2 size={24} />
                  </button>
                </div>
              </div>

              {/* MEDIA GRID */}
              <div className="grid grid-cols-2 gap-8">
                <div className="group relative h-72 rounded-[3rem] overflow-hidden shadow-xl">
                    <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="group relative h-72 rounded-[3rem] overflow-hidden shadow-xl">
                    <img src="https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?auto=format&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-10 bg-zinc-50 rounded-[3.5rem] border border-zinc-100 sticky top-12 shadow-sm">
                <h3 className="text-xl font-black uppercase italic mb-8 flex items-center gap-3">
                  <Trophy size={20} className="text-orange-500"/> Core Database
                </h3>
                
                <div className="space-y-6">
                  <StatRow icon={<Cpu size={20}/>} label="Storage" value={selectedGame.storage} />
                  <StatRow icon={<Gamepad2 size={20}/>} label="Studio" value={selectedGame.developer} />
                  <StatRow icon={<Clock size={20}/>} label="Release" value={selectedGame.release} />
                  <StatRow icon={<ShieldCheck size={20}/>} label="Safety" value="Verified" color="text-green-500" />
                </div>

                <div className="mt-12 space-y-4">
                    <button className="w-full py-5 bg-white border-2 border-zinc-100 rounded-3xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:border-orange-500 hover:text-orange-500 transition-all">
                        <Download size={18} /> Download Client
                    </button>
                    <p className="text-[10px] text-zinc-400 text-center font-bold uppercase tracking-widest leading-loose">
                        By joining, you agree to the <br /> Cloux Universe Terms of Service.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // 4. RENDER: MAIN GRID VIEW
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-['Outfit'] overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#fff7ed,transparent_50%)] pointer-events-none" />

      <main className="relative px-6 max-w-[1600px] mx-auto pt-32 pb-20">
        
        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-40">
          <div className="lg:col-span-7 space-y-8 relative z-10">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-orange-50 border border-orange-100 shadow-sm">
              <Flame size={18} className="text-orange-500 animate-bounce" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">
                Trending: GTA VI Development Logs
              </span>
            </div>
            <h1 className="text-8xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic text-zinc-950">
              Cloux <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-600">
                Universe
              </span>
            </h1>
            <p className="text-zinc-500 text-2xl max-w-xl leading-relaxed font-light">
              The premium portal for <span className="text-orange-600 font-medium italic">Elite Gamers</span>. Explore 20 premier titles curated for high-performance setups.
            </p>
          </div>

          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-8 bg-orange-500/10 blur-[100px] opacity-100" />
            <div className="relative rounded-[4rem] overflow-hidden border border-zinc-200 bg-white transform rotate-3 group-hover:rotate-0 transition-all duration-1000 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]">
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800" 
                alt="Main Feature" 
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b-2 border-zinc-50 pb-12 gap-8">
          <div className="space-y-2">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter text-zinc-950">
              Library <span className="text-orange-500">Catalog</span>
            </h2>
            <p className="text-zinc-400 font-bold text-xs uppercase tracking-widest">Showing {games.length} Tier-1 Titles</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Database..." 
                className="pl-14 pr-8 py-5 bg-zinc-50 border border-zinc-100 rounded-3xl focus:outline-none focus:border-orange-500 w-80 font-bold text-sm transition-all shadow-sm"
              />
            </div>
            <button className="flex items-center gap-3 px-8 py-5 bg-zinc-950 text-white rounded-3xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-100">
              <Filter size={18} /> Filters
            </button>
          </div>
        </div>

        {/* 20 GAMES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {games.filter(g => g.title.toLowerCase().includes(searchQuery.toLowerCase())).map((game) => (
            <div 
              key={game.id} 
              onClick={() => setSelectedGame(game)}
              className="group cursor-pointer relative bg-white rounded-[3.5rem] border border-zinc-100 overflow-hidden hover:shadow-[0_50px_80px_-20px_rgba(255,237,213,0.8)] hover:-translate-y-3 transition-all duration-700 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={`${game.image}?auto=format&fit=crop&q=80&w=600`} 
                  alt={game.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[9px] font-black text-orange-600 shadow-sm uppercase tracking-widest">
                  {game.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black uppercase italic tracking-tight text-zinc-950 group-hover:text-orange-600 transition-colors leading-tight">
                    {game.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-orange-500 bg-orange-50 px-3 py-1.5 rounded-2xl">
                    <Star size={12} fill="currentColor" />
                    <span className="text-[10px] font-black">{game.rating}</span>
                  </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-medium line-clamp-2">
                  {game.desc}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-zinc-50">
                  <div className="flex items-center gap-3 text-zinc-400">
                    <Users size={16} className="text-orange-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{game.players}</span>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-zinc-50 text-zinc-400 group-hover:bg-orange-500 group-hover:text-white group-hover:rotate-[-45deg] transition-all duration-500 shadow-sm">
                    <ChevronRight size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

// HELPER UI COMPONENT
const StatRow = ({ icon, label, value, color = "text-zinc-950" }: any) => (
  <div className="flex items-center justify-between py-3 border-b border-zinc-100 last:border-0 hover:bg-white/50 transition-colors px-2 rounded-xl">
    <div className="flex items-center gap-4 text-orange-500">
      {icon} 
      <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{label}</span>
    </div>
    <span className={`text-xs font-black uppercase italic ${color}`}>{value}</span>
  </div>
);

export default ClouxGamingPortal;