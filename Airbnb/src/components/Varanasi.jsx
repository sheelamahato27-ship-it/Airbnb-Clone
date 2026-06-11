import React, { useState, useEffect, useRef } from 'react'; 
import 'remixicon/fonts/remixicon.css';
import Varanasi_Content from './Varanasi_content';

const Varanasi = () => {
  const scrollContainerRef = useRef(null); 

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className='w-full max-w-7xl mx-auto md:px-8 py-8 px-4 flex flex-col gap-6'>
      
      {/* Header Row Container */}
      <div className='flex items-center justify-between mt-10 px-4'>
        <div className='flex items-center cursor-pointer gap-2 group'>
          <h2 className='text-xl md:text-2xl font-bold text-gray-900 tracking-tight'>
            Popular homes in Varanasi
          </h2>
          <div className="bg-gray-100 group-hover:bg-gray-200 p-2 rounded-full transition duration-200">
            <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Carousel Navigation Arrow Controls */}    
        <div className="hidden sm:flex items-center gap-2">
          <button 
            onClick={scrollLeft}
            type="button"
            className="border border-gray-200 bg-white hover:bg-gray-50 text-gray-400 hover:text-black p-2.5 rounded-full shadow-sm transition active:scale-95 focus:outline-none cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={scrollRight}
            type="button"
            className="border border-gray-200 bg-white hover:bg-gray-50 text-gray-400 hover:text-black p-2.5 rounded-full shadow-sm transition active:scale-95 focus:outline-none cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* 🚀 FORWARD THE REF DIRECTLY INTO THE CONTENT TRAILER FRAME */}
      <Varanasi_Content scrollRef={scrollContainerRef} />
      
    </div>
  );
};

export default Varanasi;