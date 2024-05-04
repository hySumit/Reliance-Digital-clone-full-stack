import React, { useState, useEffect } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const Slider = ({ images, delay = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mt-2" style={{ position: "relative", maxWidth: "100%", overflow: "hidden" }}>
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          zIndex:"1",
          left: 0,
          transform: "translateY(-50%)",
        fontSize:"40px",
        backgroundColor:"#ffffff7a",
        paddingTop:"10px",
        paddingBottom:"10px"
    }}
    >
        <GrPrevious />
      </button>
      <button
        onClick={nextSlide}
        style={{
            position: "absolute",
            top: "35%",
            zIndex:"1",
            right: 0,
            transform: "translateY(50%)",
            fontSize:"40px",
            backgroundColor:"#ffffff7a",
            paddingTop:"10px",
            paddingBottom:"10px"
        }}
      >
        <GrNext />
      </button>
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ width: "100%", flex: "0 0 auto" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
