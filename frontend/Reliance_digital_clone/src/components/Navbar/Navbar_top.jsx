import React from "react";
import { IoMdSearch } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Dropdown } from "./Dropdown";
export const Navbar_top = () => {
  const dropDownMenuColor = {
    color: "white",
    backgroundColor: "#003380",
  };
  return (
    <div className="main">

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
          <Link to={"/cart"} href="#" className="flex items-center"> <MdShoppingCart />Cart</Link>
          <hr className="bg-white h-4 w-px" />
          <Link to={"/login"} href="#" className="flex items-center"> <FaUser />Login</Link>
        </div>

      </div>
    </div>
    <div className="navline p-3 bg-[#003380] text-white">
        <section className="hideOnFullScreen flex justify-evenly gap-[40px] text-[14px]">
          <Dropdown
            colors={dropDownMenuColor}
            val={"MOBILE & TABLETS"}
            b1={"Smartphones"}
            b2={"Headphones & Headsets"}
            b3={"AI Learning Robots"}
            b4={"Smartwatches"}
            b5={"Tablests & eReaders"}
            b6={"Power Banks"}
            b7={"Accessories"}
            p1={"Apple"}
            p2={"Samsung"}
            p3={"Fireboltt"}
            p4={"Noise"}
            p5={"Boat"}
            p6={"Every Day use Tables below 15000"}
            p7={"Premium Tablets, Above 15001"}
            p8={"Tablet Acessories"}
            p9={"Mobile Grips & Stands"}
            p10={"Car Mobile Holders"}
            p11={"Memory Cards"}
            p12={"Cables & Cords"}
            p13={"Charger & Adapters"}
          />
          <Dropdown
            colors={dropDownMenuColor}
            val={"TELEVISIONS"}
            b1={"Smartphones"}
            b2={"Headphones & Headsets"}
            b3={"AI Learning Robots"}
            b4={"Smartwatches"}
            b5={"Tablests & eReaders"}
            b6={"Power Banks"}
            b7={"Accessories"}
            p1={"Apple"}
            p2={"Samsung"}
            p3={"Fireboltt"}
            p4={"Noise"}
            p5={"Boat"}
            p6={"Every Day use Tables below 15000"}
            p7={"Premium Tablets, Above 15001"}
            p8={"Tablet Acessories"}
            p9={"Mobile Grips & Stands"}
            p10={"Car Mobile Holders"}
            p11={"Memory Cards"}
            p12={"Cables & Cords"}
            p13={"Charger & Adapters"}
          />
          <Dropdown
            colors={dropDownMenuColor}
            val={"AUDIO"}
            b1={"Smartphones"}
            b2={"Headphones & Headsets"}
            b3={"AI Learning Robots"}
            b4={"Smartwatches"}
            b5={"Tablests & eReaders"}
            b6={"Power Banks"}
            b7={"Accessories"}
            p1={"Apple"}
            p2={"Samsung"}
            p3={"Fireboltt"}
            p4={"Noise"}
            p5={"Boat"}
            p6={"Every Day use Tables below 15000"}
            p7={"Premium Tablets, Above 15001"}
            p8={"Tablet Acessories"}
            p9={"Mobile Grips & Stands"}
            p10={"Car Mobile Holders"}
            p11={"Memory Cards"}
            p12={"Cables & Cords"}
            p13={"Charger & Adapters"}
          />
          <Dropdown
            colors={dropDownMenuColor}
            val={"HOME APPLIANCES"}
            b1={"Smartphones"}
            b2={"Headphones & Headsets"}
            b3={"AI Learning Robots"}
            b4={"Smartwatches"}
            b5={"Tablests & eReaders"}
            b6={"Power Banks"}
            b7={"Accessories"}
            p1={"Apple"}
            p2={"Samsung"}
            p3={"Fireboltt"}
            p4={"Noise"}
            p5={"Boat"}
            p6={"Every Day use Tables below 15000"}
            p7={"Premium Tablets, Above 15001"}
            p8={"Tablet Acessories"}
            p9={"Mobile Grips & Stands"}
            p10={"Car Mobile Holders"}
            p11={"Memory Cards"}
            p12={"Cables & Cords"}
            p13={"Charger & Adapters"}
          />
          <Dropdown
            colors={dropDownMenuColor}
            val={"COMPUTERS"}
            b1={"Smartphones"}
            b2={"Headphones & Headsets"}
            b3={"AI Learning Robots"}
            b4={"Smartwatches"}
            b5={"Tablests & eReaders"}
            b6={"Power Banks"}
            b7={"Accessories"}
            p1={"Apple"}
            p2={"Samsung"}
            p3={"Fireboltt"}
            p4={"Noise"}
            p5={"Boat"}
            p6={"Every Day use Tables below 15000"}
            p7={"Premium Tablets, Above 15001"}
            p8={"Tablet Acessories"}
            p9={"Mobile Grips & Stands"}
            p10={"Car Mobile Holders"}
            p11={"Memory Cards"}
            p12={"Cables & Cords"}
            p13={"Charger & Adapters"}
          />
          <Dropdown
            colors={dropDownMenuColor}
            val={"CAMERAS"}
            b1={"Smartphones"}
            b2={"Headphones & Headsets"}
            b3={"AI Learning Robots"}
            b4={"Smartwatches"}
            b5={"Tablests & eReaders"}
            b6={"Power Banks"}
            b7={"Accessories"}
            p1={"Apple"}
            p2={"Samsung"}
            p3={"Fireboltt"}
            p4={"Noise"}
            p5={"Boat"}
            p6={"Every Day use Tables below 15000"}
            p7={"Premium Tablets, Above 15001"}
            p8={"Tablet Acessories"}
            p9={"Mobile Grips & Stands"}
            p10={"Car Mobile Holders"}
            p11={"Memory Cards"}
            p12={"Cables & Cords"}
            p13={"Charger & Adapters"}
          />
          <Dropdown
            colors={dropDownMenuColor}
            val={"KITCHEN APPLIANCES"}
            b1={"Smartphones"}
            b2={"Headphones & Headsets"}
            b3={"AI Learning Robots"}
            b4={"Smartwatches"}
            b5={"Tablests & eReaders"}
            b6={"Power Banks"}
            b7={"Accessories"}
            p1={"Apple"}
            p2={"Samsung"}
            p3={"Fireboltt"}
            p4={"Noise"}
            p5={"Boat"}
            p6={"Every Day use Tables below 15000"}
            p7={"Premium Tablets, Above 15001"}
            p8={"Tablet Acessories"}
            p9={"Mobile Grips & Stands"}
            p10={"Car Mobile Holders"}
            p11={"Memory Cards"}
            p12={"Cables & Cords"}
            p13={"Charger & Adapters"}
          />
          <Dropdown
            colors={dropDownMenuColor}
            val={"PERSONAL CARE"}
            b1={"Smartphones"}
            b2={"Headphones & Headsets"}
            b3={"AI Learning Robots"}
            b4={"Smartwatches"}
            b5={"Tablests & eReaders"}
            b6={"Power Banks"}
            b7={"Accessories"}
            p1={"Apple"}
            p2={"Samsung"}
            p3={"Fireboltt"}
            p4={"Noise"}
            p5={"Boat"}
            p6={"Every Day use Tables below 15000"}
            p7={"Premium Tablets, Above 15001"}
            p8={"Tablet Acessories"}
            p9={"Mobile Grips & Stands"}
            p10={"Car Mobile Holders"}
            p11={"Memory Cards"}
            p12={"Cables & Cords"}
            p13={"Charger & Adapters"}
          />
          <Dropdown
            colors={dropDownMenuColor}
            val={"ACCESSORIES"}
            b1={"Smartphones"}
            b2={"Headphones & Headsets"}
            b3={"AI Learning Robots"}
            b4={"Smartwatches"}
            b5={"Tablests & eReaders"}
            b6={"Power Banks"}
            b7={"Accessories"}
            p1={"Apple"}
            p2={"Samsung"}
            p3={"Fireboltt"}
            p4={"Noise"}
            p5={"Boat"}
            p6={"Every Day use Tables below 15000"}
            p7={"Premium Tablets, Above 15001"}
            p8={"Tablet Acessories"}
            p9={"Mobile Grips & Stands"}
            p10={"Car Mobile Holders"}
            p11={"Memory Cards"}
            p12={"Cables & Cords"}
            p13={"Charger & Adapters"}
          />
        </section>
      </div>
    </div>
  ); 
};
