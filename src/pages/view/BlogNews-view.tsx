import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { newsData } from '../BlogNews'; // Adjust path

const BlogNewsView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { pathname } = useLocation();
  const [activeOS, setActiveOS] = useState<'WIN' | 'MAC'>('WIN');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const post = newsData.find((item: { id: number; }) => item.id === Number(id));

  const tags = ["EGYPT", "FANTASTIC", "MOVIE", "REVIEW", "VIDEO", "WAR"];
  
  // Requirement Data Mockup
  const requirements = {
    WIN: {
      minimum: {
        os: "Windows 10 64 Bit",
        cpu: "Intel Core 2 Quad Q6600 @ 2.40GHz",
        ram: "4 GB RAM",
        gpu: "NVIDIA 9800 GT 1GB / AMD HD 4870",
        storage: "72 GB available space"
      },
      recommended: {
        os: "Windows 11 64 Bit",
        cpu: "Intel Core i5 3470 @ 3.2GHz",
        ram: "8 GB RAM",
        gpu: "NVIDIA GTX 660 2GB / AMD HD 7870",
        storage: "72 GB available space"
      }
    },
    MAC: {
      minimum: {
        os: "macOS 10.13 High Sierra",
        cpu: "Intel Core i5 @ 2.7GHz",
        ram: "8 GB RAM",
        gpu: "Intel Iris Graphics 6100",
        storage: "72 GB available space"
      },
      recommended: {
        os: "macOS 12.0 Monterey",
        cpu: "Apple M1 Chip or better",
        ram: "16 GB RAM",
        gpu: "AMD Radeon Pro 5500M",
        storage: "72 GB available space"
      }
    }
  };

  if (!post) return null;

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-['Titillium_Web',sans-serif]">
      
      {/* Dynamic Header */}
      <div className="bg-[#0a0a0a] pt-[160px] pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
            <img src={post.image} className="w-full h-full object-cover blur-xl scale-110" alt="" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <span className="inline-block px-3 py-1 bg-orange-500 text-[10px] font-black text-white uppercase tracking-widest mb-4">
              {post.category}
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-6">
              {post.title}
            </h1>
            <div className="flex gap-4 text-zinc-500 text-xs font-bold uppercase tracking-widest">
              <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
              <span className="text-zinc-700">/</span>
              <span className="text-orange-500">{post.title}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 px-6">
        
        {/* Main Content */}
        <div className="lg:col-span-8">
          <article className="bg-white p-2 md:p-0">
            <div className="relative group overflow-hidden rounded-sm mb-10 shadow-2xl">
                <img src={post.image} className="w-full h-auto" alt={post.title} />
                <div className="absolute inset-0 border-[10px] border-white/5 pointer-events-none" />
            </div>

            <div className="text-zinc-600 text-lg leading-relaxed space-y-8">
              <p className="text-2xl font-black text-zinc-900 uppercase italic leading-tight border-l-8 border-orange-500 pl-6">
                {post.excerpt}
              </p>
              
              <p>
                The landscape of interactive entertainment is shifting. With the release of <strong>{post.title}</strong>, 
                developers are pushing the boundaries of what is possible with current-gen hardware. 
                Our deep dive reveals a masterclass in optimization and environmental storytelling.
              </p>

              {/* SYSTEM REQUIREMENTS SECTION */}
              <div className="bg-zinc-50 border border-zinc-100 p-8 my-12 rounded-sm">
                <div className="flex items-center justify-between mb-8 border-b border-zinc-200 pb-4">
                  <h3 className="text-2xl font-black uppercase italic text-zinc-900">
                    System <span className="text-orange-500">Requirements</span>
                  </h3>
                  <div className="flex gap-2">
                    {['WIN', 'MAC'].map((os) => (
                      <button
                        key={os}
                        onClick={() => setActiveOS(os as any)}
                        className={`px-4 py-1 text-[10px] font-black tracking-widest transition-all ${
                          activeOS === os ? 'bg-orange-500 text-white' : 'bg-zinc-200 text-zinc-500 hover:bg-zinc-300'
                        }`}
                      >
                        {os === 'WIN' ? 'WINDOWS' : 'MAC OS X'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <RequirementBlock title="Minimum" data={requirements[activeOS].minimum} />
                  <RequirementBlock title="Recommended" data={requirements[activeOS].recommended} />
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-200 italic text-xs text-zinc-400">
                  <strong>Additional Notes:</strong> Graphics settings may need adjustment for older hardware. 
                  DirectX 12 is recommended for the best experience.
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <img src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/post-2-650x500.jpg" className="rounded-sm grayscale hover:grayscale-0 transition-all duration-500" alt="" />
                <img src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/post-1-650x500.jpg" className="rounded-sm grayscale hover:grayscale-0 transition-all duration-500" alt="" />
              </div>
            </div>
          </article>

          {/* Post Footer */}
          <div className="mt-12 pt-8 border-t border-zinc-100 flex flex-wrap gap-4">
             {tags.map(tag => (
               <button key={tag} className="px-4 py-2 bg-zinc-100 text-[10px] font-black text-zinc-500 hover:bg-orange-500 hover:text-white transition-all tracking-[0.2em]">
                 #{tag}
               </button>
             ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
           {/* Buy Now Sidebar Card */}
           <div className="bg-[#0a0a0a] p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 -mr-10 -mt-10 rotate-45" />
              <h4 className="text-white text-xl font-black uppercase mb-4 tracking-tighter">Ready to Play?</h4>
              <p className="text-zinc-500 text-xs mb-6 uppercase tracking-widest font-bold">Limited time offer: -20% Off</p>
              
              <button className="group/btn relative w-full py-4 border-2 border-orange-500 overflow-hidden">
                <span className="relative z-10 text-orange-500 font-black uppercase text-xs tracking-[0.3em] group-hover/btn:text-black transition-colors">
                  Purchase Now
                </span>
                <div className="absolute inset-0 bg-orange-500 -translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              </button>
           </div>

           {/* Newsletter */}
           <div className="bg-white p-8 border-t-4 border-orange-500 shadow-xl shadow-zinc-100">
              <h4 className="text-xl font-black uppercase italic mb-6">Nexus Newsletter</h4>
              <input type="email" placeholder="YOUR EMAIL..." className="w-full bg-zinc-50 border-zinc-100 p-4 text-xs font-bold mb-4 focus:border-orange-500 outline-none" />
              <button className="w-full bg-zinc-900 text-white py-4 text-xs font-black tracking-widest hover:bg-orange-500 transition-colors">
                SUBSCRIBE
              </button>
           </div>
        </aside>
      </div>
    </div>
  );
};

const RequirementBlock = ({ title, data }: { title: string, data: any }) => (
  <div className="space-y-4">
    <h4 className="text-orange-500 font-black uppercase tracking-widest text-sm">{title}:</h4>
    <ul className="space-y-3">
      {Object.entries(data).map(([key, value]) => (
        <li key={key} className="flex flex-col">
          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-tighter">{key}:</span>
          <span className="text-xs font-bold text-zinc-700">{value as string}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default BlogNewsView;