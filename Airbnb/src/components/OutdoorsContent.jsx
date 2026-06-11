import React from 'react'
import 'remixicon/fonts/remixicon.css'

const OutdoorsContent = () => {
   
  // Structured array matching the cities and subtitles from Screenshot 2026-06-07 202026.png
  const destinations = [
   { city: "Lahaina", type: "Villa rentals" },
  { city: "Custer", type: "Cabin rentals" },
  { city: "Niagara Falls", type: "House rentals" },
  { city: "Key Colony Beach", type: "Apartment rentals" },
  { city: "Dana Point", type: "Holiday rentals" },
  { city: "Grindelwald", type: "House rentals" },
  { city: "Stowe", type: "Apartment rentals" },
  { city: "Banff", type: "Flat rentals" },
  { city: "Comal River", type: "Apartment rentals" },
  { city: "Mammoth Lakes", type: "Flat rentals" },
  { city: "Tarpon Springs", type: "House rentals" }
  ];
  return (
    <div>
        <div className="w-full pt-4 text-left">
      {/* 
        THE RESPONSIVE GRID ENGINE:
        - grid-cols-2: 2 columns on small mobile devices
        - sm:grid-cols-3: 3 columns on larger mobile devices
        - md:grid-cols-4: 4 columns on tablets
        - lg:grid-cols-6: 6 clean columns on standard desktop views
        - gap-y-6 gap-x-4: Uniform clean padding distribution
      */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6 gap-x-4">
        {destinations.map((item, index) => (
          <a 
            key={index} 
            href="#" 
            className="group block text-left transition-opacity duration-200 hover:opacity-70"
          >
            {/* City Title */}
            <p className="text-[14px] font-semibold text-gray-900 block truncate">
              {item.city}
            </p>
            {/* Subtitle description */}
            <p className="text-[14px] text-gray-500 font-light block truncate mt-0.5">
              {item.type}
            </p>
          </a>
        ))}

        {/* "Show more" button matching the bottom item in the screenshot */}
        <button className="flex items-center text-[14px] font-semibold text-gray-900 hover:underline mt-1">
          <span>Show more</span>
          <span className="text-[11px] ml-1">▼</span>
        </button>
        </div>
    </div>
    </div>
  )
}

export default OutdoorsContent
