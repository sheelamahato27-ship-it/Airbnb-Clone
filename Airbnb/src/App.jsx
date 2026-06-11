import React from 'react'
import Navbar from './components/Navbar'

import Gurgaon from './components/Gurgaon'
import Varanasi from './components/Varanasi'
import Kolkata from './components/Kolkata'
import Darjeeling from './components/Darjeeling'
import Bengaluru from './components/Bengaluru'
import BuddhaNagar from './components/BuddhaNagar'
import Newdelhi from './components/Newdelhi'
import Ranchi from './components/Ranchi'
import Dehradun from './components/Dehradun'
import Footer1 from './components/Footer1'
import Footer2 from './components/Footer2'
const App = () => {

  return (
    <div className="min-h-screen w-full pt-35 bg-white">
      {/* 1. Renders your full navigation cluster (Tabs + Search API bar) */}
      <Navbar />
      
      {/* 2. Renders your property listings underneath */}
      <main className="pt-6">
        <Gurgaon  />
        <Varanasi />
        <Kolkata />
        <Darjeeling />
        <Bengaluru />
        <BuddhaNagar />
        <Newdelhi />
        <Ranchi />
        <Dehradun />
        <Footer1 />
        <Footer2 />

      </main>
    </div>
  )
}

export default App
