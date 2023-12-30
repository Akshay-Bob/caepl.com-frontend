import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function RightVerticalSlider({ slideOption, activeIndex, setActiveIndex }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slideOption.length);
  };

  const handlePrevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slideOption.length) % slideOption.length);
  };

 const getDisplayedSlides = () => {
  const displayedSlides = [];
  const numSlidesToDisplay = 4;

  for (let i = 0; i < Math.min(numSlidesToDisplay, slideOption.length); i++) {
    const index = (slideIndex + i) % slideOption.length;
    displayedSlides.push(index);
  }

  return displayedSlides;
};

  return (
    <>
      <div className='d-md-block d-flex overflow-md-hidden overflow-auto  sliderOptionsImg'>
        {getDisplayedSlides().map((i) => (
          <div
            key={i}
            className={`slides pb-md-3 pb-0 pe-md-0 pe-2 d-block`}
          >
            <img
              src={slideOption[i]}
              alt='slide option'
              className={`img-fluid rounded optionImages`}
              style={{ border: activeIndex === i ? '2px solid rgb(45 44 43)' : 'none' }}
              onClick={() => setActiveIndex(i)}
            //  height={'113px'}
              
            />
          </div>
        ))}
      </div>
      {slideOption.length > 4 && (
        <>
          <Link
            className="carousel-control-prev"
            role="button"
            tabIndex="0"
            onClick={handlePrevSlide}
          >
            <span aria-hidden="true" className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </Link>
          <Link
            className="carousel-control-next"
            role="button"
            tabIndex="0"
            onClick={handleNextSlide}
          >
            <span aria-hidden="true" className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </Link>
        </>
      )}
    </>
  );
}
