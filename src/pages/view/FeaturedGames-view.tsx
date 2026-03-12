import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gamepad2, Calendar, Settings, Globe, Monitor, Users, Share2, 
  Facebook, Twitter, Youtube, Twitch, Image as ImageIcon, Video, Check, Menu, X 
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
    <div className="min-h-screen bg-[#f1f1f1] text-[#444] font-sans pb-10">
      
      {/* --- NAVBAR (Matches Screenshot) --- */}


      {/* --- HERO SECTION --- */}
      <div className="bg-[#0f0f0f] pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: BIG CINEMATIC IMAGE */}
          <div className="lg:col-span-8 relative group">
            <div className="absolute left-0 top-10 z-20 flex flex-col gap-1">
              <button className="bg-orange-500 p-4 text-white shadow-2xl transition-transform hover:scale-110"><ImageIcon size={22}/></button>
              <button className="bg-[#1a1a1a] p-4 text-white/40 hover:text-white transition-all shadow-2xl"><Video size={22}/></button>
            </div>
            
            <div className="w-full aspect-[16/9] overflow-hidden bg-black border-[6px] border-white shadow-2xl relative">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeMedia}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={activeMedia} 
                  className="w-full h-full object-cover" 
                  alt="Main Gameplay" 
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>

            {/* SMALL THUMBNAILS GALLERY */}
            <div className="flex gap-3 mt-6 overflow-x-auto pb-4 no-scrollbar">
              {gamesData.map((g) => (
                <div 
                  key={g.id} 
                  onClick={() => setActiveMedia(g.image)}
                  className={`flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 cursor-pointer border-2 transition-all duration-300 ${activeMedia === g.image ? 'border-orange-500 scale-105 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100'}`}
                >
                  <img src={g.image} className="w-full h-full object-cover" alt="thumbnail" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: DYNAMIC DETAILS CARD */}
          <div className="lg:col-span-4 bg-white p-8 shadow-2xl rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full -mr-10 -mt-10"></div>
            
            <h3 className="text-3xl font-black uppercase mb-10 italic tracking-tighter text-[#1a1a1a] border-l-4 border-orange-500 pl-4">
              {game.title.split(' ')[0]} <span className="text-orange-500">{game.title.split(' ').slice(1).join(' ')}</span>
            </h3>
            
            <div className="space-y-4">
              <DetailItem icon={<Gamepad2 size={18}/>} label="Genre" value={game.genre} />
              <DetailItem icon={<Calendar size={18}/>} label="Release" value={game.date} />
              <DetailItem icon={<Settings size={18}/>} label="Developer" value={game.dev} />
              <DetailItem icon={<Globe size={18}/>} label="Publisher" value={game.pub} />
              <DetailItem icon={<Monitor size={18}/>} label="Platforms" value={game.platforms} />
              <DetailItem icon={<Users size={18}/>} label="Modes" value={game.modes} />
              
              <div className="pt-8 mt-6 border-t border-gray-100 flex justify-between items-center">
                <span className="font-black text-[10px] uppercase text-gray-400 tracking-[0.2em]">Share Game:</span>
                <div className="flex gap-5 text-gray-400">
                  <Facebook size={16} className="hover:text-blue-600 cursor-pointer transition-colors"/>
                  <Twitter size={16} className="hover:text-sky-400 cursor-pointer transition-colors"/>
                  <Youtube size={16} className="hover:text-red-600 cursor-pointer transition-colors"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- BODY CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-8 space-y-16">
          <section className="bg-white p-8 sm:p-12 shadow-sm border border-gray-200">
            <h2 className="text-4xl font-black uppercase mb-10 italic text-[#1a1a1a]">
              ABOUT <span className="text-orange-500">{game.title}</span>
            </h2>
            <div className="text-gray-500 leading-[1.8] text-lg">
              <p className="first-letter:text-7xl first-letter:font-black first-letter:text-orange-500 first-letter:mr-4 first-letter:float-left first-letter:leading-none mb-6">
                Step into the immersive world of {game.title}. This {game.genre} masterpiece developed by {game.dev} offers 
                unparalleled gameplay mechanics and high-fidelity graphics. Experience the thrill across {game.platforms}.
              </p>
              <p>
                Whether you are playing {game.modes}, every moment is crafted to keep you on the edge of your seat. 
                Released on {game.date}, it continues to be a benchmark in the industry.
              </p>
            </div>
          </section>

          {/* REQUIREMENTS SECTION */}
          <section className="bg-white p-8 sm:p-12 shadow-sm border border-gray-200">
            <h2 className="text-3xl font-black uppercase mb-10 italic">SYSTEM REQUIREMENTS</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-orange-500 font-black uppercase text-xs tracking-widest border-b pb-2">Minimum:</h4>
                <SpecRow label="OS" val={game.minOS} />
                <SpecRow label="Processor" val="Intel Core 2 Quad Q6600" />
                <SpecRow label="Graphics" val="NVIDIA 9800 GT 1GB" />
                <SpecRow label="Storage" val={game.storage} />
              </div>
              <div className="space-y-4">
                <h4 className="text-orange-500 font-black uppercase text-xs tracking-widest border-b pb-2">Recommended:</h4>
                <SpecRow label="OS" val={game.recOS} />
                <SpecRow label="Processor" val="Intel Core i5 3470 @ 3.2GHz" />
                <SpecRow label="Graphics" val="NVIDIA GTX 660 2GB" />
                <SpecRow label="Storage" val={game.storage} />
              </div>
            </div>
          </section>
        </div>

        {/* SIDEBAR */}
        <div className="lg:col-span-4 space-y-10">
          <SidebarBox title="POSTER VIEW">
            <img src={game.image} className="w-full h-auto rounded-sm border-4 border-white shadow-xl hover:rotate-1 transition-transform" alt="Poster" />
          </SidebarBox>

          <SidebarBox title="LANGUAGES" orangeTitle>
            <div className="space-y-4">
              <div className="grid grid-cols-4 text-[9px] font-black text-orange-500 tracking-widest uppercase pb-2">
                <span>Lang</span><span className="text-center">INT</span><span className="text-center">AUD</span><span className="text-center">SUB</span>
              </div>
              <LanguageRow lang="English" />
              <LanguageRow lang="Spanish" />
              <LanguageRow lang="French" />
            </div>
          </SidebarBox>

          <div className="bg-white p-6 shadow-xl border flex items-center gap-6 border-l-8 border-l-red-600">
            <div className="bg-[#1a1a1a] text-white font-black text-4xl p-4">18</div>
            <div className="text-[10px] font-bold text-gray-500 uppercase">
              Extreme Violence <br/>Online Interaction <br/>
              <span className="text-red-600 font-black">PEGI RATED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// HELPERS
const DetailItem = ({ icon, label, value }: any) => (
  <div className="flex items-center justify-between py-4 border-b border-gray-50 group hover:bg-gray-50 transition-all px-2">
    <div className="flex items-center gap-3 text-orange-500">
      {icon}
      <span className="font-black uppercase text-[10px] tracking-wider text-gray-400">{label}:</span>
    </div>
    <span className="font-bold text-[#1a1a1a] text-xs">{value}</span>
  </div>
);

const SpecRow = ({ label, val }: any) => (
  <div className="flex text-[11px] py-2 border-b border-gray-50">
    <span className="font-black uppercase text-gray-900 w-24">{label}:</span>
    <span className="text-gray-500">{val}</span>
  </div>
);

const SidebarBox = ({ title, children, orangeTitle }: any) => (
  <div className="bg-white p-8 shadow-sm border border-gray-200">
    <h3 className={`text-xl font-black uppercase mb-6 italic border-b-2 border-orange-500 pb-4 ${orangeTitle ? 'text-orange-500' : 'text-[#1a1a1a]'}`}>
      {title}
    </h3>
    {children}
  </div>
);

const LanguageRow = ({ lang }: { lang: string }) => (
  <div className="grid grid-cols-4 text-[11px] font-bold text-gray-400 py-1 uppercase">
    <span className="text-gray-900">{lang}</span>
    <div className="flex justify-center"><Check size={14} className="text-orange-500" /></div>
    <div className="flex justify-center"><Check size={14} className="text-orange-500" /></div>
    <div className="flex justify-center"><Check size={14} className="text-orange-500" /></div>
  </div>
);

export default FeaturedGamesView;