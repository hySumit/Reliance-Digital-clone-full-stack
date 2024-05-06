import React, { useEffect, useState } from "react";
import { Navbar_top } from "../Navbar/Navbar_top";
import { FaTag } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";
import { useLocation } from "react-router-dom";

export const SingleProductpage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [productData, setProductData] = useState(null);

  const renderStars = (stars) => {
    const starIcons = [];
    for (let i = 0; i < stars; i++) {
      starIcons.push(<AiFillStar key={i} />);
    }
    return starIcons;
  };

  useEffect(() => {
    // Extract product data from query parameters
    const productName = queryParams.get("productName");
    const productImage = queryParams.get("productImage");
    const price = queryParams.get("price");
    const stars = queryParams.get("stars");
  
    // Set product data
    setProductData({
      product_name: productName,
      product_image: productImage,
      price: price,
      stars: stars,
    });
  }, [location.search]);
  

  const handleAddToCart = () => {
    // Assuming you have access to the productData state here
    const product = {
      productId: queryParams.get("productId"), // Include productId from query params
      productName: productData.product_name,
      productImage: productData.product_image,
      price: productData.price,
      // Add other necessary product details
    };

    fetch("https://reliance-digital-clone-full-stack.onrender.com/cart/add/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Assuming you have an access token stored in localStorage
        Authorization: `Bearer ${localStorage.getItem("accessKey")}`,
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle success or error response from the backend
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div>
      <Navbar_top />

      <div className="main flex bg-white">
        <div className="product_details1">
          <div className="product_box">
            {productData ? (
              <div>
                <img
                  className="w-[400px] p-[30px]"
                  src={productData.product_image}
                  alt=""
                />
              </div>
            ) : (
              <div>
                <p>No Image Available</p>
              </div>
            )}
          </div>
        </div>

        <div className="product_details2 p-[50px] ">
          <div className="box">
            {productData ? (
              <div>
                <h1>{productData.product_name}</h1>
                <p className="flex items-center">
                  Rating :{" "}
                  <span className="text-orange-500 flex items-center">
                    {renderStars(productData.stars)}
                  </span>
                </p>
              </div>
            ) : (
              <div>
                {" "}
                <p>No Data Available</p>{" "}
              </div>
            )}
            <hr />
          </div>

          <div className="details mt-10 flex">
            {productData && (
              <div>
                <p>Gain More with offers (1)</p>
                <p className="flex items-center">
                  {" "}
                  <FaTag className=" text-green-700 " /> 7.5 off upto 3000
                  with BOB Credit Card{" "}
                  <span className="text-blue-800 hover:underline">
                    Read-T&C
                  </span>{" "}
                </p>
              </div>
            )}
            {productData && (
              <div>
                <div className="price">
                  <p className="font-bold">
                    {" "}
                    Deal Price: ₹ {productData.price}{" "}
                  </p>
                  <p> MRP: ₹64,900.00 (Inclusive of all taxes) </p>
                  <p>EMIs (Credit Cards) from ₹2132.72/month | View-Plans</p>

                  <div className="flex gap-1">
                    <button
                      className="bg-[#E42529] text-white h-10 w-[150px]"
                      onClick={handleAddToCart}
                    >
                      ADD TO CART
                    </button>
                    <button className="bg-[#FC6027] text-white h-10 w-[150px]">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
