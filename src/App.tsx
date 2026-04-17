import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import SportsCategories from './components/SportsCategories'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'

// Active User Configuration
const ACTIVE_USER_ID = '570886'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white" style={{paddingTop: '56px'}}>
      <Header />
      <Hero />
      <Stats />
      <SportsCategories />
      <Features />
      <Screenshots />
      <Testimonials />
      <FAQ />
      <Disclaimer />
      <Footer />
    </div>
  )
}

export default App
