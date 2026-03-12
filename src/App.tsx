import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Fooder' 
import HeroSlider from './components/Slider'
import AllGames from './pages/AllGames'
import BestGames from './pages/BestGames'
import FeaturedGames from './pages/FeaturedGames'
import FeaturedGamesView from './pages/view/FeaturedGames-view' 
import BlogNews from './pages/BlogNews'
import BlogNewsView from './pages/view/BlogNews-view' 
import AboutCloux from './pages/AboutCloux'
import NewGames from './pages/NewGames'
import Login from './pages/login' 

const App = () => {
  const location = useLocation();
  const hideLayout = location.pathname === "/login";

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      {!hideLayout && <Header />}
      
      <main className="flex-grow pt-0">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSlider />
              <NewGames />
              <FeaturedGames />
              <BestGames />
              <BlogNews /> 
              <AboutCloux />
            </>
          } />

          <Route path="/login" element={<Login />} />
          <Route path="/all-games" element={<AllGames />} />
          <Route path="/best-games" element={<BestGames />} />
          <Route path="/featured" element={<FeaturedGames />} />
          
          {/* CHANGED THIS LINE TO MATCH localhost:5173/game/id */}
          <Route path="/game/:id" element={<FeaturedGamesView />} /> 

          <Route path="/blog" element={<BlogNews />} />
          <Route path="/blog/:id" element={<BlogNewsView />} /> 
          <Route path="/about" element={<AboutCloux />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  )
}

export default App