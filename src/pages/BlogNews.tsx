import React, { useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const newsData = [
  {
    id: 1,
    title: 'ABOUT SPACE AND WORLD',
    image: 'https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/gallery-3-560x370.jpg',
    excerpt: 'Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus',
    author: 'Cloud Doe',
    category: 'News',
    date: 'January 2, 2018'
  },
  {
    id: 2,
    title: 'NEW TRAILER IS RELEASED!',
    image: 'https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/video-post-560x370.jpg',
    excerpt: 'Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus',
    author: 'Cloud Doe',
    category: 'Videos',
    date: 'January 2, 2018'
  },
  {
    id: 3,
    title: 'PRICE LIST OF THE GAMES',
    image: 'https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/post-1-560x370.jpg',
    excerpt: 'Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus',
    author: 'Cloud Doe',
    category: 'News',
    date: 'January 2, 2018'
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 } 
  }
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const BlogNews: React.FC = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="bg-white py-24 px-6 font-['Titillium_Web',sans-serif] text-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="relative" data-aos="fade-right">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none">
              Latest <span className="text-orange-500 underline decoration-4 underline-offset-8">News</span>
            </h2>
            <div 
              className="absolute -top-6 -left-4 text-8xl font-black text-gray-50 opacity-10 -z-10 select-none"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              BLOG
            </div>
          </div>
          
          <div data-aos="fade-left">
            <Link to="/blog" className="group flex items-center gap-2 font-bold uppercase text-xs tracking-widest text-orange-500 hover:text-black transition-colors">
              View All Posts 
              <span className="w-8 h-[2px] bg-orange-500 group-hover:bg-black transition-all"></span>
            </Link>
          </div>
        </div>

        {/* Grid Container with Framer Motion + AOS Sync */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {newsData.map((post, index) => (
            <motion.div 
              key={post.id} 
              variants={itemVariants} 
              className="group flex flex-col"
            >
              
              {/* IMAGE SECTION */}
              <Link 
                to={`/blog/${post.id}`} 
                className="relative overflow-hidden mb-6 block shadow-xl shadow-gray-200"
              >
                {/* Category Badge - Top to Bottom Slide */}
                <div className="absolute top-0 left-0 z-20 overflow-hidden">
                   <div className="bg-orange-500 text-white font-black text-[10px] px-5 py-2 uppercase tracking-[0.2em] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                     {post.category}
                   </div>
                </div>

                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              {/* CONTENT SECTION */}
              <div className="flex flex-col flex-grow px-2">
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-2xl font-extrabold leading-tight text-[#1a1a1a] group-hover:text-orange-500 transition-colors uppercase mb-3">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* META INFO */}
                <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest border-b-2 border-orange-500 hover:text-black hover:border-black transition-colors cursor-pointer">
                      {post.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                    <span className="text-orange-400">/</span> {post.date}
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

export default BlogNews;