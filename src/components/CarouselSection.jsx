import React, { useState, useEffect, useRef } from 'react';
import img1 from '/src/assets/Slide (1).png';
import img2 from '/src/assets/Slide (4).png';
import img3 from '/src/assets/Slide (2).png';

// Carousel data
const data = [
  {
    image: img1,
    title: 'Latest News & Updates',
    description: 'Turpis interdum nunc varius ornare dignissim pretium...',
  },
  {
    image: img2,
    title: 'Latest News & Updates',
    description: 'Turpis interdum nunc varius ornare dignissim pretium...',
  },
  {
    image: img3,
    title: 'Latest News & Updates',
    description: 'Turpis interdum nunc varius ornare dignissim pretium...',
  },
];

// Card component to display individual carousel items
const Card = ({ image, title, description }) => (
  <div className="relative rounded-lg overflow-hidden shadow-lg">
    <img className="w-full h-[320px] object-cover" src={image} alt={title} />
    <div className="absolute bottom-0 bg-black bg-opacity-30 text-white p-4 w-full">
      <h3 className="font-sans text-[12px] font-semibold leading-[16px] pb-3 text-left">{title}</h3>
      <p className="font-sans text-[12px] font-normal leading-[16px] text-left">{description}</p>
    </div>
  </div>
);

// Carousel Section component
const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const intervalRef = useRef(null); // Reference to store the interval ID

  // Move to the next slide
  const handleNext = () => {
    setFade(true);
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  // Move to the previous slide
  const handlePrev = () => {
    setFade(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  // Reset fade state
  const resetFade = () => setFade(false);

  // Start auto-slide interval
  const startAutoSlide = () => {
    intervalRef.current = setInterval(handleNext, 3000); // Slide every 3 seconds
  };

  // Stop auto-slide interval
  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide(); // Start auto-slide when component mounts

    return () => stopAutoSlide(); // Clean up on unmount
  }, []);

  return (
    <section
      className="w-[335px] h-[320px] gap-0 rounded-tl-[5px] sm:w-full sm:max-w-[510px] sm:h-[320px] sm:mx-auto relative flex flex-col justify-center items-center"
      onMouseEnter={stopAutoSlide} // Stop sliding on hover
      onMouseLeave={startAutoSlide} // Resume sliding on mouse leave
    >
      <div className="relative w-full h-full overflow-hidden">
        <div
          className={`absolute w-full transition-opacity duration-500 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'}`}
          onTransitionEnd={!fade ? null : resetFade}
        >
          <Card {...data[currentIndex]} />
        </div>
      </div>

      {/* Buttons Container */}
      <div className="flex justify-between items-center absolute top-1/2 left-3 transform -translate-y-1/2 w-full">
        <button
          onClick={handlePrev}
          className="text-black bg-white p-2 rounded-full hover:bg-opacity-70 transition duration-200 w-[32px] h-[32px] flex items-center justify-center"
        >
          &#8249; {/* Left Arrow */}
        </button>

        <button
          onClick={handleNext}
          className="mr-5 text-black bg-white sm:mr-7 p-2 rounded-full hover:bg-opacity-70 transition duration-200 w-[32px] h-[32px] flex items-center justify-center"
        >
          &#8250; {/* Right Arrow */}
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="flex absolute bottom-2 justify-center">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setFade(true);
              setCurrentIndex(index);
            }}
            className={`w-[12px] h-[3px] mx-1 rounded-sm ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default CarouselSection;
