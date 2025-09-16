// src/components/ImageCarousel.jsx

import React, { useState } from 'react';

// Fixed and updated images array
const images = [
  'https://astroarunpandit.org/wp-content/uploads/2025/03/1600-by-529.jpg',
  'https://astroarunpandit.org/wp-content/uploads/2025/03/1600-by-529-sade-sati.jpg',
  'https://astroarunpandit.org/wp-content/uploads/2025/03/1600-by-529-shiva.jpg',
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Navigate to previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full mx-auto">
      {/* Image */}
      <div className="overflow-hidden rounded-lg relative">
        {/* Container for sliding */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Carousel ${index + 1}`}
              className="w-full max-h-[600px] object-contain mx-auto block"
            />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 shadow-amber-950 shadow-6xl text-[#edc43a] text-5xl p-2 rounded-full focus:outline-none"
      >
        &#8249;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 shadow-amber-950 shadow-6xl text-[#edc43a] text-5xl p-2 rounded-full focus:outline-none"
      >
        &#8250;
      </button>

      {/* Dots for navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1 h-1 rounded-full  ${
              currentIndex === index ? 'bg-yellow-500' : 'bg-white'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
