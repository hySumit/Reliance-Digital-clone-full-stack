import React, { useRef } from "react";
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";

export const StableSlider = ({ heading, products }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderStars = (stars) => {
    const starIcons = [];
    for (let i = 0; i < stars; i++) {
      starIcons.push(<AiFillStar key={i} />);
    }
    return starIcons;
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="relative">
      <div className="father bg-white border border-gray-300 rounded-lg p-14 mt-2">
        <div className="heading bg-[#F9F9F9] flex gap-4 h-[50px] items-center pl-[20px]">
          <h1 className="text-center" >EXPLORE OUR RANGE OF PRODUCTS</h1>
        </div>
        <div className="slider-container overflow-hidden">
          <Slider {...settings} ref={sliderRef}>
            {products.map((product, index) => (
              <div key={index} className="p-5">
                <img 
                  className="hover:scale-105 transition-transform duration-300 ease-in-out ml-[40px]"
                  width={"200px"}
                  src={product.image}
                  alt=""
                />
                <p className="text-center" >{product.text}</p>
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-center" >
        <button className="bg-[#003380] text-white p-2 rounded-xl m-auto" >View All</button>
        </div>
      </div>
      <button
        className="prev-btn absolute top-1/2 left-0 transform -translate-y-1/2"
        onClick={handlePrev}
      >
        <GrPrevious className="bg-[#ffffff7a] h-[100px] w-10 text-black border-[2px]" />
      </button>
      <button
        className="next-btn absolute top-1/2 right-0 transform -translate-y-1/2"
        onClick={handleNext}
      >
        <GrNext className="bg-[#ffffff7a] h-[100px] w-10 border-[2px] text-black" />
      </button>
    </div>
  );
};
