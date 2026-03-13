import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Gamepad2, ArrowRight } from "lucide-react";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // --- BYPASS LOGIC START ---
    // Hum check nahi karenge ki email sahi hai ya nahi.
    // Jo bhi email daala hai, usse hi user maan lenge.
    
    const fakeUser = {
      email: email || "guest@cloux.com",
      name: email.split('@')[0] || "Pilot", // Email ka pehla part naam ban jayega
      role: "Commander"
    };

    // Store in localStorage so Header can show the name
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("currentUser", JSON.stringify(fakeUser));

    // Seedha Home Page par redirect
    navigate("/");
    // --- BYPASS LOGIC END ---
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0a0a] font-['Titillium_Web',sans-serif]">
      <div className="relative w-full max-w-[1000px] h-[550px] flex overflow-hidden rounded-sm bg-white shadow-2xl">
        
        {/* Left Visual Side */}
        <div className="hidden md:flex w-1/2 bg-black relative items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url('https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/me-cover-384x488.jpg')` }}
          />
          <div className="relative z-10 text-center">
            <Gamepad2 size={50} className="text-orange-500 mx-auto mb-4" />
            <h1 className="text-3xl font-black text-white uppercase italic italic">System Access</h1>
          </div>
        </div>

        {/* Right Form Side */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-3xl font-black uppercase text-black">Login <span className="text-orange-500">Authorized</span></h2>
            <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest mt-1">Enter any credentials to enter</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="anything@cloux.com"
                className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-3 px-4 outline-none focus:border-orange-500 font-bold transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Security Key</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******"
                className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-3 px-4 outline-none focus:border-orange-500 font-bold transition-all"
              />
            </div>

            <button type="submit" className="group relative w-full py-4 bg-transparent border-2 border-orange-500 overflow-hidden mt-4">
              <span className="relative z-10 flex items-center justify-center gap-3 font-black uppercase text-sm text-orange-500 group-hover:text-white transition-colors">
                Login Now <ArrowRight size={18} />
              </span>
              <div className="absolute inset-0 bg-orange-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;