import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gamepad2, Calendar, Settings, Globe, Monitor, Users, 
  Facebook, Twitter, Youtube, Image as Video, Check, 
  Play, Server, HardDrive
} from 'lucide-react';

// Shared Data
const gamesData = [
  { 
    id: 1, 
    title: 'THE WARRIOR 3', 
    image: 'https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/cod-cover-384x488.jpg', 
    genre: 'Adventure', date: 'June 16, 2017', dev: 'Gamevision', pub: 'Envato', platforms: 'Origin, PS4', modes: 'Single/Multi',
    minOS: "Windows 10 64 Bit", recOS: "Windows 11", storage: "72 GB"
  },
  { 
    id: 2, 
    title: 'RETURN OF THE CARS', 
    image: 'https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/the-witcher-1-384x488.jpg', 
    genre: 'Racing', date: 'Nov 12, 2018', dev: 'Xtra Soft', pub: 'Gloria Games', platforms: 'Steam, Uplay', modes: 'Multiplayer',
    minOS: "Windows 8.1 64 Bit", recOS: "Windows 10", storage: "50 GB"
  },
  { 
    id: 3, 
    title: 'PLANES OF GLORIA', 
    image: 'https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/me-cover-384x488.jpg', 
    genre: 'Simulation', date: 'Jan 05, 2019', dev: 'Sky Studio', pub: 'Envato', platforms: 'Xbox One', modes: 'Single Player',
    minOS: "Windows 10", recOS: "Windows 10/11", storage: "40 GB"
  },
  { 
    id: 4, 
    title: 'WORLD AT WAR', 
    image: 'https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/gta-poster-384x488.jpg', 
    genre: 'Action', date: 'March 20, 2020', dev: 'War Games', pub: 'Gloria Games', platforms: 'PS5, PC', modes: 'Battle Royale',
    minOS: "Windows 10", recOS: "Windows 11", storage: "100 GB"
  },
  { 
    id: 5, 
    title: 'SOCCER 2024', 
    image: 'https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/soccer-poster-384x488.jpg', 
    genre: 'Sports', date: 'Sept 28, 2023', dev: 'EA Style', pub: 'Sports Inc', platforms: 'All Platforms', modes: 'Tournament',
    minOS: "Windows 10", recOS: "Windows 11", storage: "60 GB"
  },
  { 
    id: 6, 
    title: 'EXTREME WARS', 
    image: 'https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/ew-cover-384x488.jpg', 
    genre: 'Strategy', date: 'July 14, 2021', dev: 'Tactical', pub: 'Envato', platforms: 'PC', modes: 'Co-op Strategy',
    minOS: "Windows 7/8/10", recOS: "Windows 10", storage: "30 GB"
  },
];

const FeaturedGamesView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const game = gamesData.find(g => g.id === parseInt(id || "1")) || gamesData[0];
  const [activeMedia, setActiveMedia] = useState(game.image);

  useEffect(() => { 
    setActiveMedia(game.image);
    window.scrollTo(0, 0); 
  }, [id, game.image]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-['Outfit'] selection:bg-orange-500/30 overflow-hidden relative">
      
      {/* Dynamic Background Blur */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.img 
            key={activeMedia}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            src={activeMedia}
            className="w-full h-full object-cover blur-[100px] saturate-200"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-[#050505]/90 to-[#050505] z-10" />
      </div>

      {/* --- HERO SECTION --- */}
      <div className="relative pt-24 pb-16 z-10 max-w-[1400px] mx-auto px-6 md:px-12 mt-10">
         <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left: Video/Image Player */}
            <div className="lg:w-2/3 space-y-6">
               <div className="relative aspect-video rounded-[2.5rem] overflow-hidden group border border-white/10 shadow-[0_0_80px_-20px_rgba(249,115,22,0.15)] bg-black">
                 <AnimatePresence mode="wait">
                   <motion.img
                      key={activeMedia}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      src={activeMedia}
                      className="w-full h-full object-cover"
                   />
                 </AnimatePresence>
                 
                 {/* Cinematic Overlays */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 
                 {/* Floating Actions */}
                 <div className="absolute bottom-8 left-8 flex items-center gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <button className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                       <Play fill="currentColor" size={24} className="ml-1" />
                    </button>
                    <button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all">
                       <Video size={20} />
                    </button>
                 </div>
               </div>
               
               {/* Thumbnails */}
               <div className="flex gap-4 overflow-x-auto pb-4 pt-2 no-scrollbar">
                 {gamesData.map((g) => (
                   <button 
                     key={g.id}
                     onClick={() => setActiveMedia(g.image)}
                     className={`relative flex-shrink-0 w-32 md:w-48 aspect-video rounded-2xl overflow-hidden border-2 transition-all duration-300 ${activeMedia === g.image ? 'border-orange-500 scale-105 shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)]' : 'border-white/5 opacity-50 hover:opacity-100 hover:border-white/20'}`}
                   >
                     <img src={g.image} className="w-full h-full object-cover" alt={g.title} />
                   </button>
                 ))}
               </div>
            </div>

            {/* Right: Info Card */}
            <div className="lg:w-1/3">
               <div className="h-full bg-black/40 border border-white/5 rounded-[2.5rem] p-8 md:p-10 backdrop-blur-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-orange-500/20 transition-colors duration-700" />
                  
                  <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-3">
                    {game.title}
                  </h1>
                  <p className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-10 border-b border-white/10 pb-6 inline-block">
                    Featured Spotlight
                  </p>
                  
                  <div className="space-y-6 relative z-10">
                     <DetailItem icon={<Gamepad2 size={20}/>} label="Genre" value={game.genre} />
                     <DetailItem icon={<Calendar size={20}/>} label="Release" value={game.date} />
                     <DetailItem icon={<Settings size={20}/>} label="Developer" value={game.dev} />
                     <DetailItem icon={<Globe size={20}/>} label="Publisher" value={game.pub} />
                     <DetailItem icon={<Monitor size={20}/>} label="Platforms" value={game.platforms} />
                     <DetailItem icon={<Users size={20}/>} label="Modes" value={game.modes} />
                  </div>
                  
                  <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row gap-4 justify-between md:items-center relative z-10">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Share Title</span>
                    <div className="flex gap-3">
                      <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors duration-300"><Facebook size={16} /></button>
                      <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors duration-300"><Twitter size={16} /></button>
                      <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-colors duration-300"><Youtube size={16} /></button>
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* --- BODY CONTENT --- */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pb-32">
         
         {/* Left Col */}
         <div className="lg:col-span-8 space-y-24">
           {/* About Section */}
           <section>
             <h2 className="text-sm text-orange-500 font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                <span className="w-12 h-px bg-orange-500/50" />
                About The Game
             </h2>
             <div className="prose prose-invert max-w-none">
                <p className="text-2xl md:text-3xl text-zinc-300 font-light leading-relaxed mb-8 tracking-tight">
                  <span className="text-6xl md:text-7xl font-black text-white mr-4 float-left leading-[0.8] text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-600">S</span>
                  tep into the immersive world of <span className="text-white font-medium">{game.title}</span>. This {game.genre} masterpiece developed by {game.dev} offers unparalleled gameplay mechanics and high-fidelity graphics. Experience the thrill across {game.platforms}.
                </p>
                <p className="text-xl text-zinc-400 font-light leading-relaxed">
                  Whether you are playing {game.modes}, every moment is crafted to keep you on the edge of your seat. Released on {game.date}, it continues to be a benchmark in the industry.
                </p>
             </div>
           </section>

           {/* Requirements Section */}
           <section>
             <h2 className="text-sm text-orange-500 font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                <span className="w-12 h-px bg-orange-500/50" />
                System Requirements
             </h2>
             
             <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="p-8 md:p-10 rounded-[2rem] bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5">
                      <Server className="text-zinc-400" size={24} />
                    </div>
                    <h4 className="text-white font-black uppercase tracking-[0.2em]">Minimum</h4>
                  </div>
                  <div className="space-y-5">
                    <SpecRow label="OS" val={game.minOS} />
                    <SpecRow label="Processor" val="Intel Core 2 Quad Q6600" />
                    <SpecRow label="Graphics" val="NVIDIA 9800 GT 1GB" />
                    <SpecRow label="Storage" val={game.storage} />
                  </div>
                </div>

                <div className="p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 hover:border-orange-500/40 transition-colors relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-[60px] group-hover:bg-orange-500/30 transition-colors duration-500" />
                  <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                      <HardDrive className="text-orange-500" size={24} />
                    </div>
                    <h4 className="text-orange-500 font-black uppercase tracking-[0.2em]">Recommended</h4>
                  </div>
                  <div className="space-y-5 relative z-10">
                    <SpecRow label="OS" val={game.recOS} />
                    <SpecRow label="Processor" val="Intel Core i5 3470 @ 3.2GHz" />
                    <SpecRow label="Graphics" val="NVIDIA GTX 660 2GB" />
                    <SpecRow label="Storage" val={game.storage} />
                  </div>
                </div>
             </div>
           </section>
         </div>

         {/* Right Sidebar */}
         <div className="lg:col-span-4 space-y-10 mt-8 lg:mt-0">
            <SidebarBox title="Cover Art">
              <div className="group relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                <img src={game.image} className="w-full h-auto object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out" alt="Poster" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
              </div>
            </SidebarBox>

            <SidebarBox title="Localization Support">
               <div className="bg-black/30 border border-white/5 rounded-[2rem] p-8">
                 <div className="grid grid-cols-4 text-[10px] font-black text-zinc-500 tracking-[0.2em] uppercase mb-6 pb-4 border-b border-white/5">
                   <span>Lang</span><span className="text-center">Int</span><span className="text-center">Aud</span><span className="text-center">Sub</span>
                 </div>
                 <div className="space-y-3">
                   <LanguageRow lang="English" />
                   <LanguageRow lang="Spanish" />
                   <LanguageRow lang="French" />
                 </div>
               </div>
            </SidebarBox>

            <div className="rounded-[2rem] bg-gradient-to-br from-[#1a1a1a] to-black border border-red-500/20 overflow-hidden relative group p-8 flex items-center gap-6">
               <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[40px] group-hover:bg-red-500/20 transition-colors" />
               <div className="w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0 relative z-10">
                  <span className="text-4xl font-black text-red-500">18</span>
               </div>
               <div className="relative z-10">
                  <h4 className="text-red-500 font-black tracking-widest text-xs uppercase mb-2">Age Rating Content</h4>
                  <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest leading-loose">
                    Extreme Violence <br/>
                    Online Play
                  </p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

// HELPERS
const DetailItem = ({ icon, label, value }: any) => (
  <div className="flex items-center justify-between group cursor-default">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 border border-white/5 group-hover:border-orange-500/30 group-hover:text-orange-400 group-hover:bg-orange-500/5 transition-all duration-300">
        {icon}
      </div>
      <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{label}</span>
    </div>
    <span className="text-sm font-bold text-white tracking-wide group-hover:translate-x-1 transition-transform duration-300 text-right">{value}</span>
  </div>
);

const SpecRow = ({ label, val }: any) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-3 sm:py-0 border-b border-white/5 sm:border-transparent last:border-0 hover:bg-white/5 -mx-4 px-4 rounded-xl transition-colors sm:hover:bg-transparent sm:px-0 sm:mx-0">
    <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-zinc-500 w-32 shrink-0">{label}</span>
    <span className="text-sm font-bold text-zinc-200">{val}</span>
  </div>
);

const SidebarBox = ({ title, children }: any) => (
  <div>
    <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-4">
       <span className="w-8 h-px bg-orange-500/50" />
       {title}
    </h3>
    {children}
  </div>
);

const LanguageRow = ({ lang }: { lang: string }) => (
  <div className="grid grid-cols-4 items-center py-2 group hover:bg-white/5 rounded-xl transition-colors px-2 -mx-2">
    <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">{lang}</span>
    <div className="flex justify-center"><Check size={16} className="text-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" /></div>
    <div className="flex justify-center"><Check size={16} className="text-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" /></div>
    <div className="flex justify-center"><Check size={16} className="text-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" /></div>
  </div>
);

export default FeaturedGamesView;