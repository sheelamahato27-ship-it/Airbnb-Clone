import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
        
        // Added safe optional chaining (?.) to prevent the "White Screen" if the data path is missing
        const results = data?._embedded?.['city:search-results'] || [];
        
        const items = results.slice(0, 4).map(item => ({
          name: item.matching_full_name ? item.matching_full_name.split(',')[0] : 'Unknown City',
          description: item.matching_full_name || '',
          icon: '📍'
        }));
        
        setSuggestions(items);
      } catch (error) {
        console.error("Error fetching destinations:", error);
        setSuggestions([]); // Safely clear suggestions if the request fails
      } finally {
        setIsLoading(false);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchDestinations();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      
      {/* MOBILE SEARCH BAR */}
      <div className="flex md:hidden items-center bg-white border border-gray-200 rounded-full shadow-md p-3 w-full cursor-pointer">
        <svg className="h-5 w-5 text-pink-500 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <div className="flex flex-col text-left ml-2">
          <span className="text-xs font-bold text-black">Where to?</span>
          <span className="text-xs text-gray-400">Anywhere • Any week • Add guests</span>
        </div>
      </div>

      {/* DESKTOP SEARCH BAR */}
      <div className="hidden md:flex flex-row items-center bg-white border border-gray-200 rounded-full shadow-lg h-16 relative">
        
        {/* --- WHERE SECTION --- */}
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

          {/* --- SUGGESTION DROPDOWN MENU --- */}
          {activeSection === 'where' && (
            <div 
              className="absolute top-20 left-0 w-112.5 bg-white border border-gray-100 rounded-3xl shadow-2xl p-6 z-50"
              onClick={(e) => e.stopPropagation()} 
            >
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
                      <div className="flex flex-col">
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

        {/* DIVIDER 1 */}
        <div className={`h-8 w-px bg-gray-200 transition-opacity duration-150
          ${activeSection === 'where' || activeSection === 'when' ? 'opacity-0' : 'group-hover:opacity-0'}`} 
        />

        {/* --- WHEN SECTION --- */}
        <div 
          onClick={() => setActiveSection('when')}
          className={`flex-1 flex flex-col justify-center px-8 h-full rounded-full cursor-pointer text-left transition-all duration-200 peer/when
            ${activeSection === 'when' ? 'bg-gray-200 shadow-inner' : 'hover:bg-gray-100'}`}
        >
          <span className="text-xs font-bold text-black tracking-wide">When</span>
         <input
         type='date'
         placeholder='Add dates'
         className='text-sm text-gray-400 bg-transparent outline-none placeholder-gray-400 w-full font-medium'></input>
        </div>

        {/* DIVIDER 2 */}
        <div className={`h-8 w-px bg-gray-200 transition-opacity duration-150
          ${activeSection === 'when' || activeSection === 'who' ? 'opacity-0' : 'peer-hover/when:opacity-0'}`} 
        />

        {/* --- WHO SECTION --- */}
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
            className='text-sm text-gray-400 bg-transparent outline-none placeholder-gray-400 w-full font-medium'>
            </input>
          </div>

          <div className="bg-pink-500 hover:bg-pink-600 h-12 w-12 rounded-full flex items-center justify-center text-white transition duration-200 shrink-0">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

      </div>

      {/* Outside click tracking layer */}
      {activeSection && (
        <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setActiveSection(null)} />
      )}
    </div>
  );
};

export default SearchBar;