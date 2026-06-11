import React from 'react';
import BuddhaNagarCard from './BuddhaNagarCard'; // Make sure this path targets the file from Step 1

const BuddhaNagar_Content = ({scrollRef}) => {
  // Completely unique dataset for Varanasi to prevent data layout leaking
  const BuddhaNagarData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
      title: "Spacious Builder Floor in Buddha Nagar",
      price: "₹8,000",
      rating: "4.91",
      isFavourite: true,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
      title: "Cozy Studio Apartment near Main Park",
      price: "₹4,200",
      rating: "4.85",
      isFavourite: false,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      title: "Modern Duplex House with Terrace",
      price: "₹14,500",
      rating: "4.98",
      isFavourite: true,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      title: "Elegant Penthouse with City Horizon Views",
      price: "₹19,000",
      rating: "5.0",
      isFavourite: true,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
      title: "Charming 2BHK Residential Flat",
      price: "₹6,800",
      rating: "4.76",
      isFavourite: false,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
      title: "Sunlit Independent House",
      price: "₹11,000",
      rating: "4.89",
      isFavourite: true,
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      title: "Premium Furnished Suite near Metro Station",
      price: "₹12,200",
      rating: "4.94",
      isFavourite: true,
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=800&q=80",
      title: "Minimalist Executive Studio Loft",
      price: "₹5,500",
      rating: "4.80",
      isFavourite: false,
    }
   
];

  return (
    // Essential scroll tracks: flex-row + overflow-x-auto forces horizontal rendering
    <div 
    ref = {scrollRef} id='buddhaNagar' className="flex flex-row gap-6 overflow-x-auto pb-4 pt-2 w-full scroll-smooth snap-x snap-mandatory">
      {BuddhaNagarData.map((property) => (
        <BuddhaNagarCard key={property.id} property={property} />
      ))}

      <BuddhaNagarCard isSeeAllCard = {true} />
    </div>
  );
};

export default BuddhaNagar_Content;