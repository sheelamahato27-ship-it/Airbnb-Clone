import React from 'react';
import VaranasiCard from './VaranasiCard'; // Make sure this path targets the file from Step 1

const Varanasi_content = ({scrollRef}) => {

 
  // Completely unique dataset for Varanasi to prevent data layout leaking
  const varanasiData = [
    {
      id: 1,
      image: "https://i.pinimg.com/1200x/c1/c1/56/c1c15662d7a6f1defa5521cce1369504.jpg",
      title: "Ghat View Stay in Varanasi",
      price: "₹8,500",
      rating: "4.95",
      isFavourite: true,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      title: "Heritage Home near Dashashwamedh",
      price: "₹6,200",
      rating: "4.88",
      isFavourite: false,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
      title: "Boutique Apartment",
      price: "₹11,000",
      rating: "5.0",
      isFavourite: true,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
      title: "Flat in Bhelupura",
      price: "₹11,076",
      rating: "4.92",
      isFavourite: true,
    },
    {
      id: 5,
      image: "https://i.pinimg.com/1200x/e3/84/15/e38415ef8712cb8ac3662b932bd204cb.jpg",
      title: "Place to stay in Varanasi",
      price: "₹6,505",
      rating: "4.95",
      isFavourite: true,
    },
    {
      id: 6,
      image: "https://i.pinimg.com/1200x/d7/e7/dc/d7e7dc1720a2ac76deb200bf8fa7ca27.jpg",
      title: "Villa in Varanasi",
      price: "₹10,198",
      rating: "4.83",
      isFavourite: false,
    },
    {
      id: 7,
      image: "https://i.pinimg.com/736x/b9/ee/4e/b9ee4e7a9408a640f55be6093897fa88.jpg",
      title: " Apartment in Varanasi",
      price: "₹10,613",
      rating: "4.98",
      isFavourite: true,
    },
    {
      id: 8,
      image: "https://i.pinimg.com/736x/58/a0/3e/58a03e67d69d4bf728e41b51a1bfa29e.jpg",
      title: "Home in Varanasi",
      price: "₹11,127",
      rating: "5.0",
      isFavourite: false,
    }
  ];

  return (
    // Essential scroll tracks: flex-row + overflow-x-auto forces horizontal rendering
    <div 
   ref={scrollRef}
    id='varanasi'className="flex flex-row gap-6 overflow-x-auto pb-4 pt-2 w-full scroll-smooth snap-x snap-mandatory">
      {varanasiData.map((property) => (
        <VaranasiCard key={property.id} property={property} />
      ))} 

      <VaranasiCard isSeeAllCard = {true} />
    </div>
  );
};

export default Varanasi_content;