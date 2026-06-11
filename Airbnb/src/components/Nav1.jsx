import React, { useState, useRef, useEffect } from 'react';
import Globe_Content from './Globe_Content';

const Nav1 = () => {
  const [activeLink, setActiveLink] = useState('homes');
  const [isModalOpen, setIsModalOpen] = useState(false); // Controls Globe Modal
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Controls the 3-line menu dropdown

  const dropdownRef = useRef(null);

  const tabRefs = {
    homes: useRef(null),
    experiences: useRef(null),
    services: useRef(null),
  };

  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });

  const tabItems = [
    { id: 'homes', label: 'Homes', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmYZS_7C8ajjp65wqcCs_THUpGp6xF-kqPA&s' },
    { id: 'experiences', label: 'Experiences', img: 'https://i.etsystatic.com/28959621/r/il/db267c/3764526750/il_570xN.3764526750_4bpu.jpg' },
    { id: 'services', label: 'Services', img: 'https://www.svgrepo.com/show/404366/dish-plate-restaurant.svg' },
  ];

  useEffect(() => {
    const currentTab = tabRefs[activeLink]?.current;
    if (currentTab) {
      setUnderlineStyle({
        width: currentTab.offsetWidth,
        left: currentTab.offsetLeft,
      });
    }
  }, [activeLink]);

  // Automatically closes the menu dropdown if you click anywhere outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Action Click Handler for your Dropdown Options
  const handleNavigation = (url, actionType = '') => {
    setIsDropdownOpen(false); // Close menu instantly on click
    
    if (actionType === 'globe') {
      setIsModalOpen(true);
      return;
    }

    // Redirect to the target address
    window.location.href = url;
  };

  return (
    <nav className="relative w-full px-6 md:px-8 mt-6">
      {/* Main Navbar Row */}
      <div className="flex h-6 items-center justify-between mb-10 relative">
        
        {/* Logo */}
        <div className="shrink-0 pr-9">
          <img 
            src="https://i.pinimg.com/1200x/a4/51/73/a4517359b519d908928dac0c2db5e17e.jpg" 
            alt="logo" 
            className="h-14 w-auto object-contain cursor-pointer"
            onClick={() => handleNavigation('/')}
          />
        </div>

        {/* Desktop Navigation Tabs */}
        <div className="hidden md:flex relative flex-row items-center gap-6 lg:gap-10 h-full pt-4">
          {tabItems.map((tab) => {
            const isActive = activeLink === tab.id;
            return (
              <div
                key={tab.id}
                ref={tabRefs[tab.id]} 
                onClick={() => setActiveLink(tab.id)}
                className={`flex flex-row gap-2 items-center justify-center cursor-pointer pb-6 transition-colors duration-300 z-10
                  ${isActive ? 'text-black font-semibold' : 'text-gray-500 hover:text-black'}`}
              >
                <img 
                  src={tab.img} 
                  alt={tab.label}
                  className={`h-6 w-6 object-cover transition-all ease-in-out transform duration-500
                    ${isActive ? 'rotate-360 scale-110' : 'hover:rotate-12 hover:scale-105'}`} 
                />
                <span className="text-sm lg:text-base">{tab.label}</span>
              </div>
            );
          })}

          <div
            className="absolute bottom-0 h-0.5 bg-black transition-all duration-300 ease-in-out"
            style={{
              width: `${underlineStyle.width}px`,
              transform: `translateX(${underlineStyle.left}px)`,
            }}
          />
        </div>

        {/* Action Elements Controls Container Area */}
        <div className="flex flex-row gap-2.5 items-center text-gray-600 relative" ref={dropdownRef}>
          
          <span 
            onClick={() => handleNavigation('/host')}
            className="hidden md:inline-block font-semibold hover:bg-gray-300 py-2 px-4 rounded-full text-sm transition cursor-pointer text-gray-800"
          >
            Become a host
          </span>

          {/* Desktop Globe Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="h-9 w-9 hover:bg-gray-300 rounded-full flex items-center justify-center transition active:scale-95 text-gray-800 focus:outline-none"
            type="button"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </button>
          
          {/*  THE 3-LINE BUTTON UTILITY TRIGGER */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            type="button"
            className={`h-10 px-3 gap-2 bg-white hover:shadow-md border border-gray-200 rounded-full flex items-center justify-center transition cursor-pointer focus:outline-none select-none
              ${isDropdownOpen ? 'shadow-md' : ''}`}
          >
            {/* Hamburger Icon */}
            <svg className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            {/* Profile Avatar placeholder pill */}
            <div className="w-7 h-7 bg-gray-300 text-white font-bold text-xs rounded-full flex items-center justify-center">
              👤
            </div>
          </button>

          {/* ========================================================= */}
          {/* POP-OUT DROPDOWN CONTAINER CARD                           */}
          {/* ========================================================= */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-12 w-72 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-gray-100/70 py-2 z-999 text-left">
              
              {/* Item 1: Help Centre */}
              <button 
                onClick={() => handleNavigation('/help')}
                className="w-full px-5 py-3 text-left hover:bg-gray-50 flex items-center transition"
              >
                <span className="text-gray-800 font-normal text-[15px]">Help Centre</span>
              </button>

              <hr className="border-gray-100 my-1" />

              {/* Item 2: Become a Host (With layout image graphic wrapper matching your screenshot) */}
              <button 
                onClick={() => handleNavigation('/become-a-host')}
                className="w-full px-5 py-3 text-left hover:bg-gray-50 flex items-center justify-between transition group"
              >
                <div className="pr-2 max-w-[75%]">
                  <span className="block text-gray-900 font-medium text-[15px]">Become a host</span>
                  <span className="block text-gray-500 font-normal text-xs mt-0.5 leading-tight">It’s easy to start hosting and earn extra income.</span>
                </div>
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQssNVLzyXssModSMsj3QtkoJIcVL-265vT_7DR_2ETa5m7LdzAkZbxJCNo&s=10" 
                  alt="Host character representation illustration vector asset" 
                  className="w-10 h-12 object-contain shrink-0"
                  onError={(e) => { e.target.src = "👤" }}
                />
              </button>

              <hr className="border-gray-100 my-1" />

              {/* Item 3: Refer a host */}
              <button 
                onClick={() => handleNavigation('/refer-a-host')}
                className="w-full px-5 py-3 text-left hover:bg-gray-50 flex items-center transition"
              >
                <span className="text-gray-800 font-normal text-[15px]">Refer a host</span>
              </button>

              {/* Item 4: Find a co-host */}
              <button 
                onClick={() => handleNavigation('/find-a-co-host')}
                className="w-full px-5 py-3 text-left hover:bg-gray-50 flex items-center transition"
              >
                <span className="text-gray-800 font-normal text-[15px]">Find a co-host</span>
              </button>

              {/* Mobile Only: Language Configuration Link element item row inside menu */}
              <button 
                onClick={() => handleNavigation('#', 'globe')}
                className="flex md:hidden w-full px-5 py-3 text-left hover:bg-gray-50 items-center transition border-t border-gray-100 mt-1"
              >
                <span className="text-gray-800 font-normal text-[15px]">🌐 Language and region</span>
              </button>

              <hr className="border-gray-100 my-1" />

              {/* Item 5: Log in or sign up */}
              <button 
                onClick={() => handleNavigation('/login')}
                className="w-full px-5 py-3 text-left hover:bg-gray-50 flex items-center transition"
              >
                <span className="text-gray-900 font-medium text-[15px]">Log in or sign up</span>
              </button>

            </div>
          )}

        </div>
      </div>

      {/* Globe Popup Control Layout Element Panel Container */}
      <Globe_Content 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </nav>
  );
};

export default Nav1;