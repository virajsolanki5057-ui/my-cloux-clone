import React from "react";
import Logo from "../assets/cloux-logo.png"; // your logo image
import { Apple, PlayCircle, Gamepad2, Monitor, ShoppingCart, CreditCard } from "lucide-react";


// Example news images, replace with your own links
const newsItems = [
  {
    title: "About Space and World",
    date: "January 2, 2018",
    image:
      "https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/gallery-3-90x65.jpg",
  },
  {
    title: "New Trailer is Released!",
    date: "January 2, 2018",
    image:
      "https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/video-post-90x65.jpg",
  },
  {
    title: "Price List of the Games",
    date: "January 2, 2018",
    image:
      "https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/post-1-90x65.jpg",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="mx-auto max-w-[1400px] grid gap-10 lg:grid-cols-3">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-extrabold uppercase">
            About <span className="text-orange-400">Us</span>
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/90">
            Unlock exclusive gear, rare skins, and powerful upgrades. Enhance
            your gaming experience with premium items available right in the
            game store.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-y-2 gap-x-6 text-sm">
            <a
              href="#"
              className="flex items-center gap-1 hover:text-orange-400 transition"
            >
              <span className="text-orange-400">›</span> Home
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-orange-400 transition"
            >
              <span className="text-orange-400">›</span> Games
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-orange-400 transition"
            >
              <span className="text-orange-400">›</span> Blog
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-orange-400 transition"
            >
              <span className="text-orange-400">›</span> About
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-orange-400 transition"
            >
              <span className="text-orange-400">›</span> Team
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-orange-400 transition"
            >
              <span className="text-orange-400">›</span> Community
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-orange-400 transition"
            >
              <span className="text-orange-400">›</span> eSport
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-orange-400 transition"
            >
              <span className="text-orange-400">›</span> Contact
            </a>
          </div>
        </div>

        {/* Latest News */}
        <div>
          <h3 className="text-xl font-extrabold uppercase">
            Latest <span className="text-orange-400">News</span>
          </h3>
          <div className="mt-6 flex flex-col gap-4">
            {newsItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-12 w-20 object-cover rounded"
                />
                <div>
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                  <p className="text-xs text-white/70 flex items-center gap-1">
                    <span>🕒</span> {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Apps & Platforms */}
        <div>
          <h3 className="text-xl font-extrabold uppercase">
            Apps <span className="text-orange-400">& Platforms</span>
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <button className="flex items-center justify-center gap-2 rounded border border-white/30 px-4 py-2 hover:border-orange-400 hover:text-orange-400 transition">
              <Apple className="h-4 w-4" /> Buy now via Apple Store
            </button>
            <button className="flex items-center justify-center gap-2 rounded border border-white/30 px-4 py-2 hover:border-orange-400 hover:text-orange-400 transition">
              <PlayCircle className="h-4 w-4" /> Buy now via Google Play
            </button>
            <button className="flex items-center justify-center gap-2 rounded border border-white/30 px-4 py-2 hover:border-orange-400 hover:text-orange-400 transition">
              <Gamepad2 className="h-4 w-4" /> Buy now via Steam
            </button>
            <button className="flex items-center justify-center gap-2 rounded border border-white/30 px-4 py-2 hover:border-orange-400 hover:text-orange-400 transition">
              <Monitor className="h-4 w-4" /> Buy now via Windows
            </button>
            <button className="flex items-center justify-center gap-2 rounded border border-white/30 px-4 py-2 hover:border-orange-400 hover:text-orange-400 transition">
              <ShoppingCart className="h-4 w-4" /> Buy now via Amazon
            </button>
            <button className="flex items-center justify-center gap-2 rounded border border-white/30 px-4 py-2 hover:border-orange-400 hover:text-orange-400 transition">
              <CreditCard className="h-4 w-4" /> Download via PayPal
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/80 gap-4">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Cloux Logo" className="h-6 w-auto" />
          <span>Copyright © 2025 Cloux - All rights reserved.</span>
        </div>
        <div className="flex gap-6 flex-wrap">
          <a href="#" className="hover:text-orange-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            Help Center
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            Contact
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            Career
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            Advertise
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
