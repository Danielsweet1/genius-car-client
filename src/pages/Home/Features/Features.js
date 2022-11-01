import React from "react";
import img1 from "../../../assets/icons/check.svg";
import img2 from "../../../assets/icons/deliveryt.svg";
import img3 from "../../../assets/icons/Group 38729.svg";
import img4 from "../../../assets/icons/person.svg";
import img5 from "../../../assets/icons/Wrench.svg";
import img6 from "../../../assets/icons/group.svg";

const Features = () => {
  return (
    <div className="text-center my-20">
      <p className="text-xl text-orange-500 font-bold">Core Features</p>
      <h3 className="text-4xl font-bold my-3">Why Choose Us?</h3>
      <p>
        the majority have suffered alteration in some form, by injected humour,{" "}
        <br /> or randomised words which don't look even slightly believable.
      </p>
      <div className="flex justify-evenly flex-col md:flex-row my-8">
        <div className="border p-12 m-2 rounded-md">
          <img className="mx-auto mb-2" src={img1} alt="" />
          <p className="font-bold">100% Guranty</p>
        </div>
        <div className="border p-12 m-2 rounded-md">
          <img className="mx-auto mb-2" src={img2} alt="" />
          <p className="font-bold">Timely Delivery</p>
        </div>
        <div className="border p-12 m-2 rounded-md bg-orange-400">
          <img className="mx-auto mb-2" src={img3} alt="" />
          <p className="font-bold">Timely Delivery</p>
        </div>
        <div className="border p-12 m-2 rounded-md">
          <img className="mx-auto mb-2" src={img4} alt="" />
          <p className="font-bold">24/7 Support</p>
        </div>
        <div className="border p-12 m-2 rounded-md">
          <img className="mx-auto mb-2" src={img5} alt="" />
          <p className="font-bold">Best Equipment</p>
        </div>
        <div className="border p-12 m-2 rounded-md">
          <img className="mx-auto mb-2" src={img6} alt="" />
          <p className="font-bold">Expert Team</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
