import React from 'react';

const Watches = () => {
  const watchData = [
    { id: 1, name: "Rolex", price: 12000, description: "Luxury, Status, Comfort", image: '/Rolex-black.jpg' },
    { id: 2, name: "Watchlex", price: 3000, description: "Style, Fashion, Comfort", image: '/sunset.jpg' },
    { id: 3, name: "Rolex", price: 20000, description: "Trend, Status, Comfort", image: '/Rolex.jpg' },
    { id: 4, name: "Casio", price: 10000, description: "Status, Luxury, Comfort", image: '/new.jpg' },
    { id: 5, name: "Watchlex", price: 5000, description: "Elegant, Comfort, Timeless", image: '/Watchlex.jpg' },
    { id: 6, name: "Fossil", price: 8000, description: "Style, Elegant, Comfort", image: '/handwatch.jpg' }
  ];

  return (
    <div className="watches">
      {watchData.map((watch) => (
        <div key={watch.id} className="watch-card">
          <img src={watch.image} alt={watch.name} />
          <h3>{watch.name}</h3>
          <p>{watch.description}</p>
          <div className="price">₹{watch.price}</div>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Watches;
