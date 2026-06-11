import React from 'react';
import DehradunCard from './DehradunCard'; // Make sure this path targets the file from Step 1

const Dehradun_Content = ({scrollRef}) => {
  // Completely unique dataset for Varanasi to prevent data layout leaking
  const DehradunData = [
    { id: 1, image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80", title: "Scenic Valley Cottage near Rajpur Road", price: "₹8,500", rating: "4.96", isFavourite: true },
    { id: 2, image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80", title: "Cozy Wooden Cabin, Mussoorie Diversion", price: "₹5,900", rating: "4.88", isFavourite: false },
    { id: 3, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", title: "Modern 3BHK Penthouse in Jakhan", price: "₹12,000", rating: "4.92", isFavourite: true },
    { id: 4, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", title: "Lush Green Villa in Vasant Vihar", price: "₹15,500", rating: "5.0", isFavourite: true },
    { id: 5, image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80", title: "Peaceful Studio Apartment, Clement Town", price: "₹3,200", rating: "4.75", isFavourite: false },
    { id: 6, image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80", title: "Elegant Independent Floor in Dalanwala", price: "₹9,800", rating: "4.91", isFavourite: true },
    { id: 7, image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=800&q=80", title: "Hill-View Terrace Loft near Sahastradhara", price: "₹4,800", rating: "4.83", isFavourite: false },
    { id: 8, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80", title: "Boutique Orchard Farmhouse, Ballupur", price: "₹18,000", rating: "4.97", isFavourite: true }
  
];

  return (
    // Essential scroll tracks: flex-row + overflow-x-auto forces horizontal rendering
    <div
    ref={scrollRef} id='dehradun' className="flex flex-row gap-6 overflow-x-auto pb-4 pt-2 w-full scroll-smooth snap-x snap-mandatory">
      {DehradunData.map((property) => (
        <DehradunCard key={property.id} property={property} />
      ))}

      <DehradunCard isSeeAllCard = {true} />
    </div>
  );
};

export default Dehradun_Content;