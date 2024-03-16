import React, { useState } from 'react';
import logoSvg1 from '@/images/frames/untitled1.png';
import logoSvg2 from '@/images/frames/untitled2.png';
import logoSvg3 from '@/images/frames/untitled3.png';

export function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [logoSvg1, logoSvg2, logoSvg3];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className="image-slider">
      <button onClick={prevSlide}>Previous</button>
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}
