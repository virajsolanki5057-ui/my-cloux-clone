import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Twitter, Youtube, Instagram, Twitch, Menu, X, User, LogOut, Sparkles } from "lucide-react";
import Logo from "../assets/cloux-logo.png";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- USER AUTH STATE ---
  const [user, setUser] = useState<{ name: string } | null>({ name: "Joy Koy" }); 

  const handleLogout = () => {
    setUser(null);
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* FIXED TRANSPARENT HEADER WITH GLASS EFFECT */}
      <header 
        className={`fixed top-0 left-0 z-[100] w-full transition-all duration-700 font-['Titillium_Web',sans-serif] ${
          isScrolled 
          ? "bg-black/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-b border-white/5 h-[80px] lg:h-[100px]" 
          : "bg-transparent backdrop-blur-sm h-[100px] lg:h-[130px]"
        }`}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none" />
        
        {/* Top glowing accent line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500/80 to-transparent animate-pulse" />
        
        {/* Bottom subtle line when scrolled */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
        )}
        
        <div className="mx-auto max-w-[1700px] h-full px-6 lg:px-12 relative">
          {/* TOP UTILITY ROW (Hidden on scroll) */}
          {!isScrolled && (
            <div className="hidden lg:flex h-[40px] items-center justify-between border-b border-white/5">
              <div className="flex gap-4 items-center">
                <SocialIcon Icon={Twitter} />
                <SocialIcon Icon={Youtube} />
                <SocialIcon Icon={Instagram} />
                <SocialIcon Icon={Twitch} />
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <Search size={14} className="text-zinc-400 group-hover:text-orange-500 transition-all duration-300 group-hover:scale-110" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 group-hover:text-orange-400 transition-colors">Search Database</span>
              </div>
            </div>
          )}

          {/* MAIN NAVIGATION ROW */}
          <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? "h-full" : "h-[90px]"}`}>
            
            {/* LOGO with glow effect */}
            <Link to="/" className="relative group flex-shrink-0" onClick={scrollToTop}>
              <div className="absolute -inset-2 bg-orange-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img src={Logo} alt="Logo" className="h-7 lg:h-10 w-auto filter brightness-110 relative z-10" />
              <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-orange-500 to-orange-300 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#f97316]" />
            </Link>

            {/* DESKTOP NAV with glass effect */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-4 lg:px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
              <NavItem label="Home" to="/" active={location.pathname === "/"} />
              <NavItem label="About" to="/about" active={location.pathname === "/about"} />
              <NavItem label="Games" to="/best-games" active={location.pathname === "/best-games"} />
              <NavItem label="Blog" to="/blog" active={location.pathname.startsWith("/blog")} />
              
              {/* Decorative sparkle */}
              <Sparkles size={14} className="text-orange-500/50 ml-2 animate-pulse" />
            </nav>

            {/* ACTION BUTTONS / USER SECTION with glass effect */}
            <div className="flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-2 lg:gap-4">
                  {/* User Profile Info with glass effect */}
                  <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:border-orange-500/30 transition-all duration-300">
                    <User size={16} className="text-orange-500" />
                    <span className="text-[11px] font-black uppercase tracking-widest text-white">
                      {user.name}
                    </span>
                  </div>
                  {/* Logout Button with glass effect */}
                  <button 
                    onClick={handleLogout}
                    className="p-2 text-zinc-400 hover:text-orange-500 hover:bg-white/10 backdrop-blur-md rounded-full transition-all duration-300 hover:scale-110 border border-transparent hover:border-orange-500/30"
                    title="Logout"
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link to="/login" className="hidden sm:block text-[11px] font-black uppercase tracking-widest text-white/80 hover:text-orange-500 transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/5 backdrop-blur-md">
                    Login
                  </Link>
                  <Link to="/login" className="group relative overflow-hidden bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-md border border-orange-500/50 px-6 lg:px-8 py-2 lg:py-2.5 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all duration-300">
                    <span className="relative z-10 text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] text-orange-500 group-hover:text-white transition-colors duration-300">
                      Join Now
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  </Link>
                </div>
              )}

              {/* MOBILE TOGGLE with glass effect */}
              <button 
                className="md:hidden text-white hover:text-orange-500 transition-all duration-300 p-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-orange-500/50"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* SPACER */}
      <div className="h-[100px] lg:h-[130px]" />

      {/* MOBILE SIDEBAR OVERLAY with glass effect */}
      <div 
        className={`fixed inset-0 z-[200] bg-black/40 backdrop-blur-md transition-opacity duration-500 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} 
        onClick={() => setIsMobileMenuOpen(false)} 
      />
      
      {/* MOBILE SIDEBAR CONTENT with glass effect */}
      <aside className={`fixed top-0 right-0 z-[201] h-full w-[320px] bg-gradient-to-b from-black/90 to-black/80 backdrop-blur-xl border-l border-white/10 p-8 transition-transform duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} shadow-[-10px_0_30px_rgba(0,0,0,0.5)]`}>
        {/* Decorative elements */}
        <div className="absolute top-20 left-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl" />
        
        <div className="flex justify-between items-center mb-12 relative z-10">
          <span className="text-orange-500 font-black tracking-tighter text-2xl italic bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            MENU
          </span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-white/60 hover:text-orange-500 transition-all duration-300 p-2 bg-white/5 rounded-full border border-white/10 hover:border-orange-500/50">
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-4 relative z-10">
          {user && (
            <div className="flex flex-col gap-2 mb-6 p-5 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500/20 rounded-full">
                  <User size={18} className="text-orange-500" />
                </div>
                <span className="text-base font-black text-white uppercase">{user.name}</span>
              </div>
              <button 
                onClick={handleLogout}
                className="text-[11px] text-left uppercase tracking-widest text-zinc-500 hover:text-orange-500 flex items-center gap-2 transition-colors mt-2 pl-2"
              >
                <LogOut size={14} /> Sign Out
              </button>
            </div>
          )}
          <MobileNavItem label="Home" to="/" active={location.pathname === "/"} />
          <MobileNavItem label="Games" to="/best-games" active={location.pathname === "/best-games"} />
          <MobileNavItem label="Blog" to="/blog" active={location.pathname.startsWith("/blog")} />
          <MobileNavItem label="About" to="/about" active={location.pathname === "/about"} />
        </nav>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-4 relative z-10">
          {user ? (
            <Link to="/dashboard" className="w-full text-center py-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-md text-white font-black uppercase text-xs tracking-widest rounded-full border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300">
              User Dashboard
            </Link>
          ) : (
            <Link to="/login" className="w-full text-center py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-black uppercase text-xs tracking-widest rounded-full shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:shadow-[0_0_30px_rgba(249,115,22,0.7)] transition-all duration-300 transform hover:scale-105">
              Access Portal
            </Link>
          )}
          
          {/* Social icons in mobile menu */}
          <div className="flex justify-center gap-4 mt-6">
            <SocialIcon Icon={Twitter} />
            <SocialIcon Icon={Youtube} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Twitch} />
          </div>
        </div>
      </aside>
    </>
  );
};

// Enhanced Social Icon with glass effect
const SocialIcon = ({ Icon }: { Icon: any }) => (
  <div className="p-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300 hover:scale-110">
    <Icon size={16} className="text-zinc-400 hover:text-orange-500 transition-colors" />
  </div>
);

// Enhanced NavItem with glass effect
const NavItem = ({ label, to, active }: { label: string; to: string; active?: boolean }) => (
  <Link to={to} className="relative px-5 py-2 group overflow-hidden">
    <span className={`relative z-10 text-[12px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${
      active 
        ? "text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]" 
        : "text-zinc-400 group-hover:text-white"
    }`}>
      {label}
    </span>
    <div className={`absolute inset-0 bg-white/10 backdrop-blur-md rounded-full transform transition-transform duration-300 ${
      active ? "scale-100" : "scale-0 group-hover:scale-100"
    }`} />
    {active && (
      <>
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full shadow-[0_0_12px_#f97316] animate-pulse" />
        <div className="absolute -inset-1 bg-orange-500/20 rounded-full blur-md opacity-50" />
      </>
    )}
  </Link>
);

// Enhanced MobileNavItem with glass effect
const MobileNavItem = ({ label, to, active }: { label: string; to: string; active?: boolean }) => (
  <Link 
    to={to} 
    className={`relative text-2xl font-black uppercase italic tracking-tighter py-3 px-4 rounded-xl transition-all duration-300 ${
      active 
        ? "text-orange-500 bg-gradient-to-r from-orange-500/20 to-transparent border-l-4 border-orange-500 pl-6" 
        : "text-white/80 hover:text-white hover:pl-6 hover:bg-white/5"
    }`}
  >
    {label}
    {active && (
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-orange-500 rounded-full shadow-[0_0_15px_#f97316] animate-pulse" />
    )}
  </Link>
);

export default Header;