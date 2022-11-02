import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <Link to={`checkout/${_id}`}>
      <div className="card w-96 bg-base-100 p-1 mr-5 shadow-md">
        <figure>
          <img src={img} alt="Shoes" className="h-40 w-80 mt-5 rounded-md" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{title}</h2>
          <div className="flex justify-between items-center">
            <p className="text-orange-500 font-bold text-xl">Price: ${price}</p>
            <FaArrowRight className="text-xl text-orange-500"></FaArrowRight>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
