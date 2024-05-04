import React from "react";

export const Cards = ({ val, images }) => {
  return (
    <div className="bg-white">
      <div className="heading">
        <h1 className="m-5">{val}</h1>
      </div>

      <div className="container-card flex gap-10 px-5">
        {images.map((el) => (
          <div key={el} className="hover:scale-105 transition-transform duration-300 ease-in-out">
            <img src={el} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
