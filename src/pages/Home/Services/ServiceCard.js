import React from "react";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="card w-96 bg-base-100 p-1  shadow-xl">
      <figure>
        <img src={img} alt="Shoes"  className="h-60 rounded-md"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <p className="text-orange-500 font-bold text-xl">Price: ${price}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
