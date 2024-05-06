import React, { useEffect, useState } from "react";
import { Navbar_top } from "../Navbar/Navbar_top";
import { FaTag } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";

export const SingleProductpage = () => {
  const [productData, setProductData] = useState(null);

  const renderStars = (stars) => {
    const starIcons = [];
    for (let i = 0; i < stars; i++) {
      starIcons.push(<AiFillStar key={i} />);
    }
    return starIcons;
  };

  useEffect(() => {
    // Retrieve data from local storage
    const storedProductData = localStorage.getItem("selectedProduct");
    if (storedProductData) {
      setProductData(JSON.parse(storedProductData));
    }

    // Clear local storage when leaving the page
    return () => {
      localStorage.removeItem("selectedProduct");
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleAddToCart = () => {
    // Retrieve access key from localStorage
    const accessKey = localStorage.getItem("accessKey");
    // Check if access key exists
    if (!accessKey) {
      console.error("Access key not found");
      return;
    }
    // Assuming you have product data available
    const product = {
      productId: productData.productId,
      // Other product details
    };

    // Example of how to send product data to the backend with the access key
    fetch("https://reliance-digital-clone-full-stack.onrender.com/cart/add/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessKey}`,
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success or error response from the backend
        console.log(data);
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
