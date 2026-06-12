import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [activeSection, setActiveSection] = useState(null); // 'where', 'when', 'who'
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Mobile specific states
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [mobileActiveSection, setMobileActiveSection] = useState('where'); // Tracks active card in mobile overlay
  const [guests, setGuests] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    if (!query.trim() || query.trim().length < 2) {
      setSuggestions([]);
      return;
    }

    const fetchDestinations = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://api.teleport.org/api/cities/?search=${query}`);
        const data = await response.json();
        
        const results = data?._embedded?.['city:search-results'] || [];
        
        const items = results.slice(0, 4).map(item => ({
          name: item.matching_full_name ? item.matching_full_name.split(',')[0] : 'Unknown City',
          description: item.matching_full_name || '',
          icon: '📍'
        }));
        
        setSuggestions(items);
      } catch (error) {
        console.error("Error fetching destinations:", error);
        setSuggestions([]); 
      } finally {
        setIsLoading(false);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchDestinations();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  // Dynamic label helpers for mobile trigger bar
  const mobileWhereLabel = query || 'Anywhere';
  const mobileWhenLabel = selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'Any week';
  const mobileWhoLabel = guests ? `${guests} guests` : 'Add guests';

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      
      {/* --- MOBILE SEARCH BAR TRIGGER --- */}
      <div 
        onClick={() => {
          setIsMobileSearchOpen(true);
          setMobileActiveSection('where');
        }} 
        className="flex md:hidden items-center bg-white border border-gray-200 rounded-full shadow-md p-3 w-full cursor-pointer"
      >
        <svg className="h-5 w-5 text-pink-500 mx-2 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <div className="flex flex-col text-left ml-2">
          <span className="text-xs font-bold text-black">Where to?</span>
          <span className="text-xs text-gray-400">
            {mobileWhereLabel} • {mobileWhenLabel} • {mobileWhoLabel}
          </span>
        </div>
      </div>

      {/* --- FULL SCREEN MOBILE EXPANDABLE OVERLAY --- */}
      {isMobileSearchOpen && (
        <div className="fixed inset-0 bg-gray-50 z-50 p-4 md:hidden flex flex-col overflow-hidden">
          
          {/* Top Row Controls */}
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => setIsMobileSearchOpen(false)}
              className="h-9 w-9 bg-white border border-gray-200 rounded-full flex items-center justify-center font-bold text-gray-700 shadow-sm"
            >
              ✕
            </button>
            <span className="text-sm font-bold text-gray-800">Stays setup</span>
            <button 
              onClick={() => { setQuery(''); setSelectedDate(''); setGuests(''); }}
              className="text-xs font-semibold text-gray-500 underline"
            >
              Clear all
            </button>
          </div>

          {/* Cards Scrollable Area */}
          <div className="flex-1 space-y-3 overflow-y-auto pb-20">
            
            {/* 1. MOBILE WHERE CARD */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 transition-all duration-300">
              {mobileActiveSection !== 'where' ? (
                <div onClick={() => setMobileActiveSection('where')} className="flex justify-between items-center cursor-pointer">
                  <span className="text-sm font-semibold text-gray-500">Where</span>
                  <span className="text-sm font-bold text-gray-800">{query || 'Anywhere'}</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <h2 className="text-lg font-bold text-black text-left">Where to?</h2>
                  <div className="relative flex items-center bg-gray-100 rounded-xl px-3 py-2 border border-gray-200 focus-within:border-gray-400">
                    <svg className="h-4 w-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input 
                      type="text" 
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search destinations" 
                      className="bg-transparent text-sm text-gray-800 outline-none w-full font-medium"
                      autoFocus
                    />
                  </div>
                  
                  {/* Suggestions List */}
                  <div className="max-h-48 overflow-y-auto pt-1">
                    {isLoading && <p className="text-xs text-gray-400 text-left pl-2">Searching cities...</p>}
                    {suggestions.length > 0 ? (
                      suggestions.map((dest, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-3 p-2.5 rounded-xl active:bg-gray-100 text-left cursor-pointer"
                          onClick={() => {
                            setQuery(dest.name);
                            setMobileActiveSection('when'); // Auto-advance card
                          }}
                        >
                          <span className="text-lg bg-gray-100 p-2 rounded-lg">{dest.icon}</span>
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-gray-800">{dest.name}</span>
                            <span className="text-xs text-gray-400 line-clamp-1">{dest.description}</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      !isLoading && query.length > 1 && <p className="text-xs text-gray-400 text-left pl-2">No matching cities found</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* 2. MOBILE WHEN CARD */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 transition-all duration-300">
              {mobileActiveSection !== 'when' ? (
                <div onClick={() => setMobileActiveSection('when')} className="flex justify-between items-center cursor-pointer">
                  <span className="text-sm font-semibold text-gray-500">When</span>
                  <span className="text-sm font-bold text-gray-800">
                    {selectedDate ? new Date(selectedDate).toLocaleDateString() : 'Add dates'}
                  </span>
                </div>
              ) : (
                <div className="space-y-3 text-left">
                  <h2 className="text-lg font-bold text-black">When's your trip?</h2>
                  <input 
                    type="date"
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                      setMobileActiveSection('who'); // Auto-advance card
                    }}
                    className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 text-sm font-medium outline-none focus:border-pink-500"
                  />
                </div>
              )}
            </div>

            {/* 3. MOBILE WHO CARD */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 transition-all duration-300">
              {mobileActiveSection !== 'who' ? (
                <div onClick={() => setMobileActiveSection('who')} className="flex justify-between items-center cursor-pointer">
                  <span className="text-sm font-semibold text-gray-500">Who</span>
                  <span className="text-sm font-bold text-gray-800">{guests ? `${guests} guests` : 'Add guests'}</span>
                </div>
              ) : (
                <div className="space-y-3 text-left">
                  <h2 className="text-lg font-bold text-black">Who's coming?</h2>
                  <div className="flex items-center justify-between border border-gray-200 rounded-xl p-3 bg-gray-50">
                    <span className="text-sm font-medium text-gray-700">Number of guests</span>
                    <input 
                      type="number"
                      min="1"
                      max="16"
                      placeholder="0"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-16 text-center bg-white border border-gray-200 rounded-lg p-1 text-sm font-bold outline-none"
                    />
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Persistent Mobile Bottom Action Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex items-center justify-between">
            <div className="text-left">
              <span className="text-xs font-bold block text-gray-400 underline cursor-pointer" onClick={() => { setQuery(''); setSelectedDate(''); setGuests(''); }}>
                Reset
              </span>
            </div>
            <button 
              onClick={() => setIsMobileSearchOpen(false)}
              className="bg-pink-500 text-white rounded-xl px-6 py-3 font-bold text-sm flex items-center gap-2 shadow-md hover:bg-pink-600 active:scale-95 transition"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
          </div>

        </div>
      )}

      {/* --- DESKTOP SEARCH BAR --- */}
      <div className="hidden md:flex flex-row items-center bg-white border border-gray-200 rounded-full shadow-lg h-16 relative">
        
        {/* WHERE */}
        <div 
          onClick={() => setActiveSection('where')}
          className={`flex-1 flex flex-col justify-center px-8 h-full rounded-full cursor-pointer text-left transition-all duration-200 group relative
            ${activeSection === 'where' ? 'bg-gray-200 shadow-inner' : 'hover:bg-gray-100'}`}
        >
          <span className="text-xs font-bold text-black tracking-wide">Where</span>
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search destinations" 
            className="text-sm text-gray-700 bg-transparent outline-none placeholder-gray-400 w-full font-medium"
            onFocus={() => setActiveSection('where')}
          />

          {/* SUGGESTIONS DROPDOWN */}
          {activeSection === 'where' && (
            <div className="absolute top-20 left-0 w-112.5 bg-white border border-gray-100 rounded-3xl shadow-2xl p-6 z-50" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                {query.length > 1 ? 'Matching Destinations' : 'Popular Search Destinations'}
              </h3>
              {isLoading && <p className="text-sm text-gray-400 pl-2">Searching...</p>}
              <div className="grid grid-cols-1 gap-2">
                {suggestions.length > 0 ? (
                  suggestions.map((dest, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-100 transition cursor-pointer"
                      onClick={() => {
                        setQuery(dest.name);
                        setActiveSection('when');
                      }}
                    >
                      <span className="text-xl bg-gray-50 p-2 rounded-xl">{dest.icon}</span>
                      <div className="flex flex-col text-left">
                        <span className="text-sm font-semibold text-gray-800">{dest.name}</span>
                        <span className="text-xs text-gray-400">{dest.description}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  !isLoading && <p className="text-sm text-gray-400 pl-2">Type city name to find places...</p>
                )}
              </div>
            </div>
          )}
        </div>

        <div className={`h-8 w-px bg-gray-200 transition-opacity duration-150 ${activeSection === 'where' || activeSection === 'when' ? 'opacity-0' : 'group-hover:opacity-0'}`} />

        {/* WHEN */}
        <div 
          onClick={() => setActiveSection('when')}
          className={`flex-1 flex flex-col justify-center px-8 h-full rounded-full cursor-pointer text-left transition-all duration-200 peer/when
            ${activeSection === 'when' ? 'bg-gray-200 shadow-inner' : 'hover:bg-gray-100'}`}
        >
          <span className="text-xs font-bold text-black tracking-wide">When</span>
          <input
            type='date'
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className='text-sm text-gray-600 bg-transparent outline-none placeholder-gray-400 w-full font-medium'
          />
        </div>

        <div className={`h-8 w-px bg-gray-200 transition-opacity duration-150 ${activeSection === 'when' || activeSection === 'who' ? 'opacity-0' : 'peer-hover/when:opacity-0'}`} />

        {/* WHO */}
        <div 
          onClick={() => setActiveSection('who')}
          className={`flex-1 flex flex-row items-center justify-between pl-8 pr-3 h-full rounded-full cursor-pointer text-left transition-all duration-200
            ${activeSection === 'who' ? 'bg-gray-200 shadow-inner' : 'hover:bg-gray-100'}`}
        >
          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold text-black tracking-wide">Who</span>
            <input
              type='text'
              placeholder='Add guests'
              value={guests ? `${guests} guests` : ''}
              onChange={(e) => setGuests(e.target.value)}
              className='text-sm text-gray-600 bg-transparent outline-none placeholder-gray-400 w-full font-medium'
            />
          </div>
          <div className="bg-pink-500 hover:bg-pink-600 h-12 w-12 rounded-full flex items-center justify-center text-white transition duration-200 shrink-0">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

      </div>

      {/* Outside click tracker for desktop */}
      {activeSection && (
        <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setActiveSection(null)} />
      )}
    </div>
  );
};

export default SearchBar;