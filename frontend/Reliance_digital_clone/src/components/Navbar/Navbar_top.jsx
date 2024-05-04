import React from "react";
import { IoMdSearch } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa";
export const Navbar_top = () => {
  return (
    <div className="nav-main bg-[#E42529] items-center flex justify-between p-5 px-10">
      <div className="logo">
        <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="Reliance Digital"/>
      </div>

      <div className="search-bar">
        <input type="search" name="search-bar" id="" placeholder="Find your favorite products" className="rounded-lg w-[400px] h-[35px]" />
        <button className=" relative right-5 h-4" > <IoMdSearch /> </button>
      </div>

      <div className="ul-links text-white  font-bold text-[15px]">

      <div className="flex gap-2 items-center">
        <a href="#">Find a store</a>
        <hr className="bg-white h-4 w-px" />
        <a href="#">Buying guides</a>
        <hr className="bg-white h-4 w-px" />
        <a href="#">Contact us</a>
      </div>
      <div className="flex gap-2 items-center">
          <a href="#">Select your Pin Code</a>
          <hr className="bg-white h-4 w-px" />
          <a href="#" className="flex items-center"> <MdShoppingCart />Cart</a>
          <hr className="bg-white h-4 w-px" />
          <a href="#" className="flex items-center"> <FaUser />Login</a>
        </div>

      </div>
    </div>
  ); 
};
