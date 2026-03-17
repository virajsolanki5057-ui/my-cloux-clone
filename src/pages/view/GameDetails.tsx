import React, { useEffect, useState } from 'react';
import { 
  Play, 
  Star, 
  Users, 
  ChevronLeft, 
  Download, 
  Share2, 
  ShieldCheck, 
  Cpu, 
  Gamepad2,
  Calendar,
  Globe,
  ArrowRight
} from 'lucide-react';

// 1. DEFINE THE INTERFACE: This tells TypeScript what data to expect
interface GameDetailsProps {
  game: {
    id: number;
    title: string;
    category: string;
    rating: string;
    players: string;
    desc: string;
    image: string;
    developer: string;
    storage: string;
    release: string;
    gallery?: string[]; // Optional gallery
  };
  onBack: () => void; // Function to close the view
}

const GameDetailsPage: React.FC<GameDetailsProps> = ({ game, onBack }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll to top and track scroll for floating header
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Default gallery if none provided
  const galleryImages = game.gallery || [
    "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf",
    "https://images.unsplash.com/photo-1605898960710-9aa3608ca873",
    "https://images.unsplash.com/photo-1533972751724-9135a8410a4c",
    "https://images.unsplash.com/photo-1544652478-6653e09f18a2"
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-['Outfit'] selection:bg-orange-500/30">
      {/* Dynamic Floating Header */}
      <div className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-300"
          >
            <div className="bg-white/10 rounded-full p-1.5 group-hover:-translate-x-1 transition-transform duration-300">
              <ChevronLeft size={16} className="text-white" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-zinc-300 group-hover:text-white transition-colors">Library</span>
          </button>
          
          <button className="group p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-300">
            <Share2 size={18} className="text-zinc-400 group-hover:text-orange-500 transition-colors" />
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[85vh] w-full overflow-hidden flex items-end pb-24">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0">
          <img 
            src={`${game.image}?auto=format&fit=crop&q=90&w=2000`} 
            className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]" 
            alt={game.title} 
          />
          {/* Gradients for cinematic depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/40 to-transparent z-10" />
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#050505]/80 to-transparent z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <div className="max-w-4xl animate-[slideUp_0.8s_ease-out]">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md">
                {game.category}
              </span>
              <div className="flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <Star size={14} className="text-orange-400" fill="currentColor" /> 
                <span className="text-sm font-bold text-white">{game.rating}</span>
                <span className="text-xs text-zinc-500 font-medium tracking-wide">/ 5.0</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <Users size={14} className="text-emerald-400" />
                <span className="text-sm font-bold text-white">{game.players}</span>
                <span className="text-xs text-zinc-500 font-medium tracking-wide">Active Now</span>
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-6xl md:text-8xl lg:text-[140px] font-black uppercase tracking-tighter text-white leading-[0.85] mb-8 drop-shadow-2xl">
              {game.title}
            </h1>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="w-full sm:w-auto overflow-hidden group relative px-10 py-5 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)]">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-600 to-orange-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                <span className="relative flex items-center justify-center gap-3">
                  <Play fill="currentColor" size={20} className="group-hover:animate-pulse" /> Launch Session
                </span>
              </button>
              
              <button className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold text-white text-sm tracking-widest uppercase backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-3 group">
                <Download size={20} className="text-zinc-400 group-hover:text-white transition-colors" /> Install Game <span className="text-zinc-500 font-normal">({game.storage})</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <main className="relative z-30 max-w-[1400px] mx-auto px-6 md:px-12 pb-32 -mt-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column (About & Gallery) */}
          <div className="lg:col-span-8 space-y-24">
            {/* About Section */}
            <section className="animate-[fadeUp_1s_ease-out_0.2s] relative">
              <h2 className="text-sm text-orange-500 font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
                <span className="w-12 h-px bg-orange-500/50" />
                About The Game
              </h2>
              <p className="text-2xl md:text-3xl font-light text-zinc-300 leading-[1.6] tracking-tight">
                {game.desc}
              </p>
            </section>

            {/* Gallery Section */}
            <section className="animate-[fadeUp_1s_ease-out_0.4s]">
              <div className="flex justify-between items-end mb-8">
                <h2 className="text-sm text-orange-500 font-black uppercase tracking-[0.3em] flex items-center gap-4">
                  <span className="w-12 h-px bg-orange-500/50" />
                  Media Gallery
                </h2>
                <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" /> Live In-Engine
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {galleryImages.slice(0, 4).map((img, idx) => (
                  <div 
                    key={idx} 
                    className={`group relative rounded-[2rem] overflow-hidden border border-white/5 bg-white/5 ${idx === 0 || idx === 3 ? 'aspect-square' : 'aspect-video sm:aspect-square'} cursor-pointer`}
                  >
                    <img 
                      src={`${img}?auto=format&w=800&q=80`} 
                      alt={`Gallery view ${idx + 1}`} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out opacity-60 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <ArrowRight size={18} className="text-white transform -rotate-45" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column (Specs & Info Panel) */}
          <div className="lg:col-span-4 animate-[fadeUp_1s_ease-out_0.3s]">
            <div className="sticky top-32 p-8 lg:p-10 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 shadow-2xl relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] group-hover:bg-orange-500/10 transition-colors duration-700 pointer-events-none" />
              
              <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-10 border-b border-white/5 pb-6">
                Technical Specifics
              </h3>
              
              <div className="space-y-8 relative z-10">
                <SpecItem icon={<Gamepad2 size={22}/>} label="Developer" value={game.developer} />
                <SpecItem icon={<Calendar size={22}/>} label="Release Date" value={game.release} />
                <SpecItem icon={<Cpu size={22}/>} label="Storage Req." value={game.storage} />
                <SpecItem icon={<Globe size={22}/>} label="Region" value="Global" />
                <SpecItem icon={<ShieldCheck size={22}/>} label="Anti-Cheat" value="Protected" valueColor="text-emerald-400" />
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 relative z-10">
                <div className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 mb-4 hover:border-white/10 transition-colors">
                  <div>
                    <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Current Version</div>
                    <div className="text-lg font-bold text-white tracking-wide">v2.4.1.0</div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase">
                    Up to date
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      
      {/* Global CSS for Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes kenburns {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.15) translate(-1%, -1%); }
        }
      `}} />
    </div>
  );
};

// HELPER COMPONENT FOR SPECS
const SpecItem = ({ icon, label, value, valueColor = "text-white" }: any) => (
  <div className="flex items-center gap-6 group cursor-default">
    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 border border-white/5 group-hover:border-orange-500/30 group-hover:text-orange-400 group-hover:bg-orange-500/5 transition-all duration-300">
      {icon}
    </div>
    <div>
      <div className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-1">{label}</div>
      <div className={`text-base font-bold tracking-wide ${valueColor} group-hover:translate-x-1 transition-transform duration-300`}>{value}</div>
    </div>
  </div>
);

export default GameDetailsPage;