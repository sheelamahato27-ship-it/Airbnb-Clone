import React, { useState } from 'react';

// Explicitly name the component for Varanasi
const DehradunCard = ({ property, isSeeAllCard }) => {
  const [isLiked, setIsLiked] = useState(false);
  if (isSeeAllCard) {
    return (
      <div className="flex flex-col items-center justify-center cursor-pointer shrink-0 w-67.5 sm:w-75 md:w-70 lg:w-73.5 aspect-square border border-gray-200  bg-white shadow-sm hover:shadow-md transition-shadow duration-200 snap-start
      relative  h-50 rounded-2xl overflow-hidden  mb-3">
        
        {/* Stacked Images Graphic (Matches your screenshot) */}
        <div className="relative w-28 h-20 mb-4">
          {/* Back Card Image */}
          <div className="absolute top-0 left-4 w-16 h-14 bg-gray-200 rounded-lg border border-white shadow-md transform -rotate-12 overflow-hidden opacity-80">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=150&q=80" alt="stack-back" className="w-full h-full object-cover" />
          </div>
          
          {/* Middle Card Image */}
          <div className="absolute top-1 right-2 w-16 h-14 bg-gray-300 rounded-lg border border-white shadow-md transform rotate-12 overflow-hidden opacity-90">
            <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=150&q=80" alt="stack-middle" className="w-full h-full object-cover" />
          </div>

          {/* Front Main Image */}
          <div className="absolute top-3 left-6 w-16 h-14 bg-gray-400 rounded-lg border border-white shadow-lg transform -rotate-3 overflow-hidden z-10">
            <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=150&q=80" alt="stack-front" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Label */}
        <span className="font-semibold text-[15px] text-gray-900">See all</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col group cursor-pointer overflow-x-auto shrink-0 w-67.5 sm:w-75 md:w-70 lg:w-72.5 snap-start">
      
      {/* IMAGE CONTAINER */}
      <div className="relative aspect-square w-full h-50 rounded-2xl overflow-hidden mb-3 bg-gray-100">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 ease-out"
        />

        {property.isFavourite && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
            Guest favourite
          </div>
        )}

        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 text-white transition transform active:scale-95 drop-shadow-md"
        >
          <svg 
            className={`w-6 h-6 stroke-white stroke-2 transition-colors duration-200
              ${isLiked ? 'fill-pink-500 stroke-pink-500' : 'fill-black/30'}`} 
            viewBox="0 0 24 24"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3c1.74 0 3.26.83 4.312 2.11C13.05 3.83 14.572 3 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </button>
      </div>

      {/* TEXT DATA DETAILS */}
      <div className="flex flex-col text-left">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-[15px] text-gray-900 truncate">{property.title}</h3>
          <div className="flex items-center gap-1 shrink-0 text-sm font-light text-gray-900">
            <svg className="w-3.5 h-3.5 fill-black" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <span>{property.rating}</span>
          </div>
        </div>
        <p className="text-[14px] text-gray-500 font-light mt-0.5">
          <span className="font-semibold text-gray-900">{property.price}</span> for 2 nights
        </p>
      </div>

    </div>
  );
};

export default DehradunCard;