import React from 'react';
import NewDelhiCard from './NewDelhiCard'; // Make sure this path targets the file from Step 1

const NewDelhi_Content = ({scrollRef}) => {
  // Completely unique dataset for Varanasi to prevent data layout leaking
  const NewDelhiData = [
   {
      id: 1,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      title: "Charming Loft near Connaught Place",
      price: "₹10,500",
      rating: "4.94",
      isFavourite: true,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      title: "Luxury Bungalow in Greater Kailash",
      price: "₹25,000",
      rating: "4.98",
      isFavourite: true,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      title: "Modern Studio Apartment in Hauz Khas",
      price: "₹5,200",
      rating: "4.86",
      isFavourite: false,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      title: "Premium Penthouse in South Extention",
      price: "₹18,900",
      rating: "5.0",
      isFavourite: true,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
      title: "Sunlit Independent Floor in Saket",
      price: "₹8,500",
      rating: "4.79",
      isFavourite: false,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=800&q=80",
      title: "Boutique Stay near Green Park Metro",
      price: "₹7,000",
      rating: "4.91",
      isFavourite: true,
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      title: "Elegant Duplex House in Vasant Kunj",
      price: "₹15,500",
      rating: "4.88",
      isFavourite: false,
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
      title: "Minimalist Studio Suite in Defence Colony",
      price: "₹12,000",
      rating: "4.93",
      isFavourite: true,
    }
   
];

  return (
    // Essential scroll tracks: flex-row + overflow-x-auto forces horizontal rendering
    <div 
    ref={scrollRef} id='NewDelhi' className="flex flex-row gap-6 overflow-x-auto pb-4 pt-2 w-full scroll-smooth snap-x snap-mandatory">
      {NewDelhiData.map((property) => (
        <NewDelhiCard key={property.id} property={property} />
      ))}

      <NewDelhiCard isSeeAllCard = {true} />
    </div>
  );
};

export default NewDelhi_Content;