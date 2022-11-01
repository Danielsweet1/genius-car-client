import React from "react";
import { FaStar,  FaStarHalfAlt } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const {img, name, price} = product
  return (
    <div className="card w-96 ml-3 bg-base-100 shadow-md">
      <figure>
        <img className="h-40 w-72 bg-slate-200 p-4 mt-4 rounded-lg" src={img} alt="Products" />
      </figure>
      <div className="card-body ">
        <div className="flex justify-center text-orange-500">
            <FaStar ></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStarHalfAlt></FaStarHalfAlt>
        </div>
        <h2 className="text-2xl text-center font-bold">{name}</h2>
        <p className="text-orange-500 font-bold ">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
