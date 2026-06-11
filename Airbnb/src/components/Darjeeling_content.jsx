import React from 'react';
import DarjeelingCard from './DarjeelingCard'; // Make sure this path targets the file from Step 1

const Darjeeling_Content = ({scrollRef}) => {
  // Completely unique dataset for Varanasi to prevent data layout leaking
  const DarjeelingData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
      title: "Colonial Tea Estate Bungalow",
      price: "₹18,500",
      rating: "4.96",
      isFavourite: true,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
      title: "Cozy Attic Room with Kanchenjunga View",
      price: "₹4,200",
      rating: "4.89",
      isFavourite: false,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=800&q=80",
      title: "Wooden Cabin in Mall Road",
      price: "₹6,800",
      rating: "4.82",
      isFavourite: true,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
      title: "Luxury Mountain Villa",
      price: "₹24,000",
      rating: "5.0",
      isFavourite: true,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
      title: "Ridge-view Alpine Cottage",
      price: "₹9,100",
      rating: "4.78",
      isFavourite: false,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      title: "Charming Heritage Loft near Ghoom",
      price: "₹5,500",
      rating: "4.91",
      isFavourite: true,
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      title: "Modern Studio with Panoramic Valley View",
      price: "₹7,900",
      rating: "4.87",
      isFavourite: false,
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      title: "Secluded Pine Forest Hideaway",
      price: "₹11,500",
      rating: "4.95",
      isFavourite: true,
    }
];

  return (
    // Essential scroll tracks: flex-row + overflow-x-auto forces horizontal rendering
    <div
    ref={scrollRef} id='darjeeling' className="flex flex-row gap-6 overflow-x-auto pb-4 pt-2 w-full scroll-smooth snap-x snap-mandatory">
      {DarjeelingData.map((property) => (
        <DarjeelingCard key={property.id} property={property} />
      ))}

      <DarjeelingCard isSeeAllCard  = {true} />
    </div>
  );
};

export default Darjeeling_Content;