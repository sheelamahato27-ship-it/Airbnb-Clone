import React from 'react';
import RanchiCard from './RanchiCard'; 

const Ranchi_Content = ({scrollRef}) => {
  
  const RanchiData = [
  { id: 1, image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80", title: "Luxury Hill-View Villa in Morabadi", price: "₹7,500", rating: "4.93", isFavourite: true },
    { id: 2, image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80", title: "Serene Lakefront Stay near Kanke Road", price: "₹6,200", rating: "4.87", isFavourite: false },
    { id: 3, image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80", title: "Modern 2BHK Apartment in Lalpur", price: "₹3,800", rating: "4.79", isFavourite: false },
    { id: 4, image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80", title: "Premium Penthouse, Ashok Nagar", price: "₹11,500", rating: "5.0", isFavourite: true },
    { id: 5, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", title: "Cozy Studio Loft near Harmu Housing Colony", price: "₹2,900", rating: "4.82", isFavourite: false },
    { id: 6, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80", title: "Elegant Duplex Cottage in Bariatu", price: "₹8,900", rating: "4.91", isFavourite: true },
    { id: 7, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80", title: "Sunlit Green-view Suite near Namkum", price: "₹4,500", rating: "4.85", isFavourite: false },
    { id: 8, image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=800&q=80", title: "Boutique Farmhouse Stay near Ring Road", price: "₹13,000", rating: "4.96", isFavourite: true }
];

  return (
    // Essential scroll tracks: flex-row + overflow-x-auto forces horizontal rendering
    <div ref={scrollRef} id='ranchi' className="flex flex-row gap-6 overflow-x-auto pb-4 pt-2 w-full scroll-smooth snap-x snap-mandatory">
      {RanchiData.map((property) => (
        <RanchiCard key={property.id} property={property} />
      ))}

      <RanchiCard isSeeAllCard = {true} />
    </div>
  );
};

export default Ranchi_Content;