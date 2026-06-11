import React , { useState , useRef , useEffect } from 'react'
import PopularContent from './PopularContent'
import ArtsCultureContent from './ArtsCultureContent'
import BeachContent from './BeachContent'
import MountainsContent from './MountainsContent'
import OutdoorsContent from './OutdoorsContent'
import ThingToDoContent from './ThingToDoContent'


const Footer1 = () => {
  // 1. State to track which tab is currently clicked/active
  const [activeTab, setActiveTab] = useState('Popular');
  
  // 2. array of categories
  const categories = [
    'Popular',
    'Arts & culture',
    'Beach',
    'Mountains',
    'Outdoors',
    'Things to do'
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'Popular':
        return <PopularContent />

      case 'Arts & culture':
        return <ArtsCultureContent />
        
      case 'Beach':
         return <BeachContent />

      case 'Mountains':
        return<MountainsContent />

      case 'Outdoors':
        return<OutdoorsContent  />

      case 'Things to do':
        return<ThingToDoContent  />  


    }
  };
  
  return (
    /* Changed h-500 to h-auto so your content isn't forced or cropped incorrectly */
    <div className='h-auto w-full max-w-7xl mx-auto md:px-8 py-8 px-12 bg-gray-250'>
      
      <h2 className='text-xl md:text-2xl font-bold text-gray-900 tracking-tight'>
        Inspiration for future getaways
      </h2>

      {/*Underline */}
      <div className='flex flex-row gap-8 md:gap-9 border-b border-gray-200 overflow-x-auto w-full scrollbar-none cursor-pointer pt-4 translate-y-px'>
        {categories.map((category) => (
          <button 
            key={category}
            onClick={() => setActiveTab(category)}
            
            className={`pb-3 text-[15px] whitespace-nowrap transition-all duration-200 border-b-2
              ${activeTab === category 
                ? 'text-gray-900 font-medium border-gray-900' // Active: Dark text, Dark bottom line
                : 'text-gray-500 hover:text-gray-800 border-transparent' // Inactive: Pale text, Transparent line
              }`}
          >
            {/* Kept your clean span tag without the broken 'Underline' class wrapper */}
            <span>{category}</span>
          </button>
        ))}
      </div>
      {/* 3. DYNAMIC CONTENT AREA */}
      {/* This executing function will swap out the rows instantly when activeTab changes */}
      <div className="w-full transition-all duration-350">
        {renderTabContent()}
      </div>
      
    </div>
  )
}

export default Footer1;