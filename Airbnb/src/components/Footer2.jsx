import React from 'react'

const Footer2 = () => {
  return (
    <div className='h-auto w-full max-w-7xl mx-auto md:px-8 px-12 py-8 pb-12'>
      
      {/* 3-Column Directory Section */}
      <div className='flex   gap-8'>
        {/* Column 1: Support */}
        <div className='w-full md:w-1/3 text-left'>
          <h3 className='font-semibold text-[14px] text-gray-900 mb-4'>Support</h3>
          <ul className='space-y-3 text-[14px] text-gray-800 '>
            <li><a href='#' className='hover:underline'>Help Centre</a></li>
            <li><a href='#' className='hover:underline'>Get help with safety issue</a></li>
            <li><a href='#' className='hover:underline'>Air cover</a></li>
            <li><a href='#' className='hover:underline'>Anti-discrimination</a></li>
            <li><a href='#' className='hover:underline'>Disability support</a></li>
            <li><a href='#' className='hover:underline'>Cancellation options</a></li>
            <li><a href='#' className='hover:underline'>Report neighbourhood concern</a></li>
          </ul>
        </div>

        {/* Column 2: Hosting */}
        <div className='w-full md:w-1/3 text-left'>
          <h3 className="font-semibold text-[14px] text-gray-900 mb-4">Hosting</h3>
          <ul className="space-y-3 text-[14px] text-gray-800 ">
            <li><a href="#" className="hover:underline">Airbnb your home</a></li>
            <li><a href="#" className="hover:underline">Airbnb your experience</a></li>
            <li><a href="#" className="hover:underline">Airbnb your service</a></li>
            <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
            <li><a href="#" className="hover:underline">Hosting resources</a></li>
            <li><a href="#" className="hover:underline">Community forum</a></li>
            <li><a href="#" className="hover:underline">Hosting responsibly</a></li>
            <li><a href="#" className="hover:underline">Join a free hosting class</a></li>
            <li><a href="#" className="hover:underline">Find a co-host</a></li>
            <li><a href="#" className="hover:underline">Refer a host</a></li>
          </ul>
        </div>

        {/* Column 3: Airbnb */}
        <div className='w-full md:w-1/3 text-left'>
          <h3 className="font-semibold text-[14px] text-gray-900 mb-4">Airbnb</h3>
          <ul className="space-y-3 text-[14px] text-gray-800 ">
            <li><a href="#" className="hover:underline">2026 Summer Release</a></li>
            <li><a href="#" className="hover:underline">Newsroom</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Investors</a></li>
            <li><a href="#" className="hover:underline">Airbnb.org emergency stays</a></li>
          </ul>
        </div>
      </div>

      {/* Horizontal Divider Line */}
      <hr className='border-t border-gray-300 w-full mt-12'/>
      
      {/* =========================================================
        THE FIX: THE ENTIRE BOTTOM CONTAINER
        =========================================================
        - flex-col: Stacks vertically on small screens
        - md:flex-row-reverse: Pulls the globe/icons to the right and copyright to the left
        - md:justify-between: Pushes them apart completely onto the same line
        - items-center: Vertically squares up everything perfectly
      */}
      <div className='flex flex-col md:flex-row-reverse md:justify-between  w-full mt-4 gap-4'>
        
        {/* RIGHT CONTENT (Language, Currency, Socials) */}
        <div className='flex flex-col sm:flex-row items-end sm:items-center gap-6 justify-start md:justify-end w-full md:w-auto'>
          <div className='flex gap-6 text-[14px] font-semibold text-gray-900'>
            {/* Globe Element */}
            <div className='flex flex-row items-center gap-2 cursor-pointer hover:underline'>
              <img 
                src="https://png.pngtree.com/png-vector/20190118/ourmid/pngtree-vector-globe-icon-png-image_323859.jpg" 
                alt="globe" 
                className="h-4 w-4 rounded-full object-cover" 
              />
              <span>English (IN)</span> 
            </div> 

            {/* Currency Element */}
            <div className='flex flex-row items-center gap-1.5 cursor-pointer hover:underline'>
              <img 
                src='https://i.pinimg.com/474x/0b/8e/12/0b8e12e0bdf526769a5a35327a9e7658.jpg'
                alt='rupee'
                className='h-3 w-4 object-contain'
              />
              <span>INR</span>      
            </div>
          </div>

          {/* Social Icons Block */}
          <div className='flex flex-row items-center gap-4   sm:justify-end-safe '>
            <img src='https://i.pinimg.com/1200x/63/e6/1a/63e61a8f4a158c31565a57999baae7c4.jpg' alt='facebook' className='w-4 h-4  rounded-full  hover:bg-gray-400'/>
            <img src='https://www.pngkey.com/png/full/7-78730_white-twitter-logo-png-twitter-icon-png.png' alt='Twitter' className='w-4 h-4  rounded-full  hover:bg-gray-400'/>
            <img src='https://freepngimg.com/download/logo/69822-logo-white-computer-instagram-icons-free-png-hq.png' alt='instagram' className='w-4 h-4  rounded-full hover:bg-gray-400'/>          
          </div>
        </div>  

        {/* LEFT CONTENT (Copyright and Legal Links) */}
        <div className='flex flex-wrap items-center  md:justify-start gap-x-2 gap-y-1 text-[14px] text-gray-700  w-full md:w-auto'>
          <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgxNiVk0OYsIN8RTuAsinNHkvNOiqfqNMKzuwmIpXVsbnWDAOjTmSwRNo&s=10'
            alt='copyright'
            className='h-3.5 w-3.5 object-contain mr-1'  
          />
          <span>2026 Airbnb, Inc.</span> 
          <span>·</span> 
          <a href="#" className="hover:underline">Privacy</a>
          <span>·</span> 
          <a href="#" className="hover:underline">Terms</a>
          <span>·</span> 
          <a href="#" className="hover:underline">Company details</a>
        </div> 

      </div>
    </div>
  )
}

export default Footer2