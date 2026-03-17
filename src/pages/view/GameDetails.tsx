import React from 'react';
import { 
  Play, 
  Star, 
  Users, 
  ChevronLeft, 
  Download, 
  Share2, 
  ShieldCheck, 
  Cpu, 
  Gamepad2 
} from 'lucide-react';

const GameDetailsPage: React.FC = () => {
  // Mock data for the specific game
  const game = {
    title: "Grand Theft Auto VI",
    category: "Open World / Action",
    rating: "5.0",
    players: "1.2M",
    release: "Fall 2026",
    developer: "Rockstar Games",
    storage: "150 GB",
    desc: "Grand Theft Auto VI heads to the state of Leonida, home to the neon-soaked streets of Vice City and beyond in the biggest, most immersive evolution of the Grand Theft Auto series yet. Experience a dual-protagonist narrative featuring Lucia and Jason as they navigate the criminal underworld of a modern-day Florida-inspired setting.",
    mainImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1605898960710-9aa3608ca873?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1533972751724-9135a8410a4c?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&q=80&w=600"
    ]
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-['Outfit']">
      {/* CINEMATIC HERO SECTION */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img 
          src={game.mainImage} 
          className="w-full h-full object-cover scale-105" 
          alt={game.title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
        
        {/* TOP NAVIGATION */}
        <div className="absolute top-8 left-8 right-8 flex justify-between items-center">
          <button className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-md rounded-2xl font-bold text-xs uppercase tracking-widest shadow-lg hover:bg-orange-500 hover:text-white transition-all group">
            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Library
          </button>
          <div className="flex gap-4">
            <button className="p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg hover:text-orange-500 transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* HERO CONTENT */}
        <div className="absolute bottom-12 left-12 right-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-4 py-1 bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                  {game.category}
                </span>
                <div className="flex items-center gap-1 text-orange-600 bg-orange-50 px-3 py-1 rounded-full font-bold text-xs">
                  <Star size={14} fill="currentColor" /> {game.rating}
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-zinc-950">
                {game.title}
              </h1>
            </div>
            <button className="h-20 px-12 bg-zinc-950 text-white font-black uppercase tracking-tighter hover:bg-orange-600 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-4 shadow-2xl shadow-orange-200">
              Pre-Order Now <Play fill="currentColor" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <main className="max-w-7xl mx-auto px-12 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* LEFT COLUMN: ABOUT & GALLERY */}
          <div className="lg:col-span-8 space-y-16">
            <section>
              <h2 className="text-3xl font-black uppercase italic mb-6 border-b-4 border-orange-500 inline-block">Overview</h2>
              <p className="text-zinc-500 text-xl leading-relaxed font-light">
                {game.desc}
              </p>
            </section>

            <section>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-black uppercase italic tracking-tighter">Media <span className="text-orange-500">Gallery</span></h2>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">4 Images Found</span>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {game.gallery.map((img, idx) => (
                  <div key={idx} className="group relative h-64 rounded-[2.5rem] overflow-hidden border border-zinc-100 shadow-md">
                    <img src={img} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: SPECS & QUICK INFO */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 bg-zinc-50 rounded-[3rem] border border-zinc-100 sticky top-12">
              <h3 className="text-xl font-black uppercase italic mb-8">Technical Specs</h3>
              
              <div className="space-y-6">
                <SpecItem icon={<Users size={20}/>} label="Active Players" value={game.players} />
                <SpecItem icon={<Cpu size={20}/>} label="Storage Req" value={game.storage} />
                <SpecItem icon={<Gamepad2 size={20}/>} label="Developer" value={game.developer} />
                <SpecItem icon={<ShieldCheck size={20}/>} label="Status" value="Verified" color="text-green-500" />
              </div>

              <div className="mt-12 p-6 bg-white rounded-[2rem] border border-orange-100 shadow-inner">
                <div className="text-[10px] font-black text-orange-600 uppercase tracking-[0.2em] mb-2">Release Date</div>
                <div className="text-3xl font-black text-zinc-950 uppercase italic">{game.release}</div>
              </div>

              <button className="w-full mt-8 py-5 border-2 border-zinc-200 rounded-[2rem] font-black uppercase tracking-widest text-zinc-400 hover:border-orange-500 hover:text-orange-500 transition-all flex items-center justify-center gap-3">
                <Download size={18} /> System Requirements
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// HELPER COMPONENT FOR SPECS
const SpecItem = ({ icon, label, value, color = "text-zinc-950" }: any) => (
  <div className="flex items-center justify-between group">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-orange-500 border border-zinc-100 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{label}</span>
    </div>
    <span className={`text-sm font-black uppercase italic ${color}`}>{value}</span>
  </div>
);

export default GameDetailsPage;