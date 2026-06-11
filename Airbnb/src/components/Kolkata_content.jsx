import React from 'react';
import KolkataCard from './KolkataCard'; // Make sure this path targets the file from Step 1

const Kolkata_Content = ({scrollRef}) => {
  // Completely unique dataset for Varanasi to prevent data layout leaking
  const KolkataData = [
    {
      id: 1,
      image: "https://i.pinimg.com/1200x/be/35/ce/be35cef79c6e7be079df6cbce2c12cdd.jpg",
      title: "Heritage Stay near Park Street",
      price: "₹9,500",
      rating: "4.92",
      isFavourite: true,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      title: "Modern Apartment in Salt Lake",
      price: "₹5,800",
      rating: "4.85",
      isFavourite: false,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      title: "Luxury Suite in New Town",
      price: "₹12,400",
      rating: "5.0",
      isFavourite: true,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      title: "Colonial Bungalow in Ballygunge",
      price: "₹16,000",
      rating: "4.97",
      isFavourite: true,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      title: "Cozy Studio near Jadavpur",
      price: "₹3,500",
      rating: "4.76",
      isFavourite: false,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      title: "Penthouse Overlooking Eco Park",
      price: "₹20,500",
      rating: "4.99",
      isFavourite: true,
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      title: "Charming Flat in Alipore",
      price: "₹14,200",
      rating: "4.91",
      isFavourite: false,
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      title: "Artist Loft in North Kolkata",
      price: "₹4,900",
      rating: "4.83",
      isFavourite: true,
    }
];

  return (
    // Essential scroll tracks: flex-row + overflow-x-auto forces horizontal rendering
    <div 
    ref={scrollRef} id='kolkata' className="flex flex-row gap-6 overflow-x-auto pb-4 pt-2 w-full scroll-smooth snap-x snap-mandatory">
      {KolkataData.map((property) => (
        <KolkataCard key={property.id} property={property} />
      ))}

      <KolkataCard isSeeAllCard = {true} />
    </div>
  );
};

export default Kolkata_Content;