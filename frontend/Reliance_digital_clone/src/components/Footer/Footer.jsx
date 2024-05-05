import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";

export const Footer = () => {
  return (
    <div id="main" className="bg-[#003380] text-white">
      <div className="up flex justify-around gap-10">
        <div className="">
          <h1>PRODUCT CATEGORIES</h1>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Smartphones</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Laptops</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">DSLR Camera</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Telivisons</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Air Conditioners</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Refgirator</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Kitchen Appliences</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Accessories</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Personal Care & Grooming</p>
        </div>
        <div className="">
          <h1>SITE INFO</h1>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">About Reliance Digital</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">resQ Service</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Site Map</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Gift Cards</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Corporate Enquires</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Contact Us</p>
        </div>
        <div className="">
          <h1>RESOURCE CENTER</h1>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Proudct Reviews</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Buying Guides</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">How Tos</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Featured Stories</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Events & Happenings</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Nearest Store</p>
        </div>
        <div className="">
          <h1>POLICIES</h1>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Terms of Use</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">FAQs</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Cancellation and Return Policy</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Pricing and Payments Policy</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Shipping and Delivery Policy</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Privacy Policy</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">E-waste Recycling Policy</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">EMI and Additional Cashback T&C</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">RelianceOne Loyalty Program T&C</p>
          {/* <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">Caution Notice</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">FOLLOW US</p>
          <p className=" hover:text-[#b6b6b6] duration-200 ease-in-out " href="#">EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</p> */}
        </div>
      </div>
      <div className="down mt-5 flex ml-[60px] ">
        <div className="head">
          <h1 className="font-bold" >FOLLOW US</h1>
        <div className="flex gap-2">
          <FaFacebookSquare/>
          <FaSquareXTwitter/>
          <TfiYoutube/>
        </div>
        </div>
        <div className="head ml-[230px]">
          <h1 className="font-bold" >EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</h1>
        <div className="flex">
          <img className="h-12" src="https://www.reliancedigital.in/build/client/images/google_play_store.png" alt="" />
          <img className="h-12" src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png" alt="" />
        </div>
        </div>
      </div>

      <div className="disclaimer text-center bg-[#0A244A] mt-5 p-10">
        <h1 className=" font-bold underline">Disclaimer</h1>
        <p className=" font-semibold ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae beatae perferendis numquam suscipit sit totam dolore incidunt temporibus ex ratione eaque laudantium aspernatur possimus, minus quisquam eligendi distinctio blanditiis praesentium, doloremque quibusdam deleniti. Obcaecati exercitationem facilis sint molestiae quo dignissimos omnis repudiandae veniam. Quo, beatae!</p>
        <hr className="mt-4"/>
        <p className="mt-4">&copy; 2024 Reliance Digital. ALl Rights Reserved.</p>
      </div>
    </div>
  );
};
