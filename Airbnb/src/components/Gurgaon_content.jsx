import React from 'react';
import GurgaonCard from './GurgaonCard'; // Import your card template!

const Gurgaon_Content = ({scrollRef}) => {
  // Your dataset array containing the raw property information
  const gurgaonData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      title: "Flat in Gurugram",
      price: "₹13,923",
      rating: "4.98",
      isFavourite: true,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      title: "Flat in Gurugram",
      price: "₹12,542",
      rating: "5.0",
      isFavourite: true,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      title: "Flat in Gurugram",
      price: "₹12,371",
      rating: "4.98",
      isFavourite: true,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      title: "Flat in Sector 38",
      price: "₹9,000",
      rating: "5.0",
      isFavourite: false,
    },
    {
      id: 5,
      image: "https://i.pinimg.com/736x/c4/8a/f1/c48af1d1f0eda1089c6adbab2093d180.jpg",
      title: "Villa in Gurugram",
      price: "₹29,700",
      rating: "4.95",
      isFavourite: true,
    },
    {
      id: 6,
      image: "https://i.pinimg.com/1200x/f9/51/c6/f951c63b02c157c2388a41419e4d33e6.jpg",
      title: "Flat in DLF City Phase 1",
      price: "₹4,410",
      rating: "4.95",
      isFavourite: true,
    },
    {
      id: 7,
      image: "https://i.pinimg.com/736x/a8/0d/15/a80d15e1d2b55c63009b440f6c3e5f06.jpg",
      title: "Home in Sector-2 Sohna",
      price: "₹29,000",
      rating: "5.0",
      isFavourite: true,
    },
    {
      id: 8,
      image: "https://i.pinimg.com/736x/23/84/d0/2384d07d03cc72b45675c6e665cf0a97.jpg",
      title: "Home in DLF City Phase 2",
      price: "₹22,596",
      rating: "4.95",
      isFavourite: false,
    },
  ];

  return (
    
    <div ref={scrollRef} id='gurgaon' className="flex flex-row gap-6 overflow-x-auto pb-4 pt-2 w-full scroll-smooth snap-x snap-mandatory">
      {gurgaonData.map((property) => (
        <GurgaonCard  key={property.id} property={property} />
      ))}

      <GurgaonCard isSeeAllCard={true} />
    </div>
  );
};

export default Gurgaon_Content;