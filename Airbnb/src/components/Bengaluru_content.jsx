import React from 'react';
import BengaluruCard from './BengaluruCard'; // Make sure this path targets the file from Step 1

const Bengaluru_Content = ({scrollRef}) => {
  // Completely unique dataset for Varanasi to prevent data layout leaking
  const BengaluruData = [
   {
      id: 1,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      title: "Luxury Penthouse in Indiranagar",
      price: "₹15,000",
      rating: "4.95",
      isFavourite: true,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      title: "Modern Studio Loft near Manyata Tech Park",
      price: "₹4,500",
      rating: "4.82",
      isFavourite: false,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      title: "Serene Garden Villa in Whitefield",
      price: "₹21,000",
      rating: "4.91",
      isFavourite: true,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
      title: "Charming Duplex in Koramangala",
      price: "₹11,200",
      rating: "4.88",
      isFavourite: true,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      title: "Cozy Apartment near Cubbon Park",
      price: "₹6,500",
      rating: "4.79",
      isFavourite: false,
    },
    {
      id: 6,
      image: "https://i.pinimg.com/736x/33/3d/30/333d3091663e4ca05bf365bfb40f2732.jpg",
      title: "Eco-friendly Stay in Jayanagar",
      price: "₹5,900",
      rating: "4.86",
      isFavourite: true,
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      title: "Premium High-rise Suite, UB City View",
      price: "₹26,500",
      rating: "5.0",
      isFavourite: true,
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      title: "Boutique Terraced House in Sadashivanagar",
      price: "₹18,200",
      rating: "4.93",
      isFavourite: false,
    }
];

  return (
    // Essential scroll tracks: flex-row + overflow-x-auto forces horizontal rendering
    <div
     ref = {scrollRef}
    
    id='bengaluru' className="flex flex-row gap-6 overflow-x-auto pb-4 pt-2 w-full scroll-smooth snap-x snap-mandatory">
      {BengaluruData.map((property) => (
        <BengaluruCard key={property.id} property={property} />
      ))}

      <BengaluruCard isSeeAllCard = {true} />
    </div>
  );
};

export default Bengaluru_Content;