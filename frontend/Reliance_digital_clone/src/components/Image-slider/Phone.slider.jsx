import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";

export const PhoneSlider = ({ url, heading }) => {
  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setProducts(resp.data.products.slice(10,20));
      } catch (error) {
        console.log("Error Fetching data", error);
      }
    };
    fetchData();
  }, []);

  
  const NextArrow = ({ onClick }) => (
    <button className="slick-next" onClick={onClick}>
      <GrNext />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button className="slick-prev" onClick={onClick}>
      <GrPrevious />
    </button>
  );

  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  const handlePrev = () => {
    sliderRef.current.slickPrev(); 
  };

  const handleNext = () => {
    sliderRef.current.slickNext(); 
  };
  const renderStars = (stars) => {
    const starIcons = [];
    for (let i = 0; i < stars; i++) {
      starIcons.push(<AiFillStar key={i} />);
    }
    return starIcons;
  };

  return (
    <div className="relative">
      <div className="father bg-white border border-gray-300 rounded-lg p-14 mt-2">
        <div className="heading bg-[#F9F9F9] flex gap-4 h-[50px] items-center pl-[20px]">
          <h1>{heading}</h1>
          <button className="bg-[#003380] text-white p-1 rounded-sm">
            View All
          </button>
        </div>
        <div className="slider-container overflow-hidden">
          <Slider {...settings} ref={sliderRef}>
            {products.map((product, index) => (
              <div key={index} className="p-5">
                <img
                  className="hover:scale-105 transition-transform duration-300 ease-in-out"
                  width={"200px"}
                  src={product.product_image}
                  alt=""
                />
                <p>{product.product_name}</p>
                <p>
                  {" "}
                  Offer Price :{" "}
                  <span className="text-black font-bold">₹{product.price}</span>
                </p>

                <p className="flex items-center">
                  Rating: {renderStars(product.stars)}
                </p>
                <div className="flex gap-2">
                  {" "}
                  <p>Offer</p>
                  {product.offer ? (
                    <p className="text-green-500">Available</p>
                  ) : (
                    <p className="text-red-500">Unvailable</p>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <button
        className="prev-btn absolute top-1/2 left-0 transform -translate-y-1/2"
        onClick={handlePrev}
      >
        <GrPrevious className="bg-[#ffffff7a] h-[100px] w-10 text-black  border-[2px] " />
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
