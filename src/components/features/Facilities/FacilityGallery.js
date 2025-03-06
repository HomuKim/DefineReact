import React, { useState } from 'react';
import './facilities.css';

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


  useEffect(() => {
    // 이미지가 로딩되었는지 확인하는 함수
    const checkImageLoad = () => {
      const img = new Image();
      img.src = images[currentIndex];
      img.onload = () => {
        setIsImageLoaded(true);
      };
    };

    // 컴포넌트가 마운트될 때와 currentIndex가 변경될 때마다 실행
    setIsImageLoaded(false); // 이미지 로딩 상태 초기화
    checkImageLoad();
  }, [currentIndex, images]);
  
  const showImage = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
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
