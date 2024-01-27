import React, { useState, useEffect } from "react";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slideshow = () => {
  const slides = [
    {
      id: 1,
      image: img1,
      text: "Shop with Trollz",
      text2: "Get 30% Off"
    },
    {
      id: 2,
      image: img2,
      text: "New Year's Special",
      text2: "Get 20% Off On All Gadgets"
    },
    {
      id: 3,
      image: img3,
      text: "Back To School",
      text2: "Get 15% Off On All School Items"
    },
    // Add more slides as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change the duration (in milliseconds) for each slide

    return () => clearInterval(interval);
  }, [slides.length]);

  const slideshowWidth = 900; // Set the desired width
  const slideshowHeight = 400; // Set the desired height
  const maxZIndex = slides.length; // Set the maximum zIndex based on the number of slides

  return (
    <div style={{ position: "relative", width: `${slideshowWidth}px`, height: `${slideshowHeight}px`, overflow: "hidden" }} className="border-l border-gray-900 p-5">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? "active" : "hidden"} p-5`}
        >
          <img
            src={slide.image}
            alt={`Slide ${slide.id}`}
            className={`absolute top-0 left-0 w-full h-full object-cover pl-20 z-${index}`}
          />
          <div className="absolute top-1/2 right-0 transform translate-y-[-50%] translate-x-[-20%]">
            <p className="text-black italic text-2xl m-4 ml-3 font-bold">{slide.text}</p>
            <p className="text-black italic text-2xl m-4 ml-3">{slide.text2}</p>
          </div>
        </div>
      ))}
      <button className="text-black p-20" onClick={prevSlide} style={{ position: "absolute", top: "50%", left: 0, transform: "translateY(-50%)", zIndex: maxZIndex + 1 }}>
        <ChevronLeft color="black" size={30}/>
      </button>
      <button className="text-black p-4" onClick={nextSlide} style={{ position: "absolute", top: "50%", right: 0, transform: "translateY(-50%)", zIndex: maxZIndex + 1 }}>
        <ChevronRight color="black" size={30}/>
      </button>
    </div>
  );
};

export default Slideshow;
