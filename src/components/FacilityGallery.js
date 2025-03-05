import React, { useState } from 'react';
import '../css/Facilities.css';

const Facilities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    '/images/facility/facility1.jpg',
    '/images/facility/facility2.jpg',
    '/images/facility/facility3.jpg',
    '/images/facility/facility4.jpg',
    '/images/facility/facility5.jpg',
    '/images/facility/facility6.jpg',
    '/images/facility/facility7.jpg',
    '/images/facility/facility8.jpg',
    '/images/facility/facility9.jpg',
    '/images/facility/facility10.jpg',
    '/images/facility/facility11.jpg',
  ];

  const showImage = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const changeSlide = (direction) => {
    if (isAnimating) return;
    let nextIndex = currentIndex + direction;
    if (nextIndex >= images.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = images.length - 1;
    showImage(nextIndex);
  };

  return (
<section className="facility-gallery">
      <div className="main-image">
        <img
          id="mainImage"
          src={images[currentIndex]}
          alt="시설 메인 이미지"
          className={isAnimating ? 'fade-out' : ''}
        />
        <button className="prev" onClick={() => changeSlide(-1)}>&#10094;</button>
        <button className="next" onClick={() => changeSlide(1)}>&#10095;</button>
      </div>
      <div className="thumbnail-container">
        <div className="thumbnails">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`시설 ${index + 1}`}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => showImage(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
