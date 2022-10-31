import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero  p-5 rounded-md my-24">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            src={person}
            className=" rounded-lg shadow-2xl w-3/4  h-96"
            alt=""
          />
          <img
            src={parts}
            className=" rounded-lg bg-white shadow-3xl  p-2 absolute w-2/4 h-72 top-1/2 right-12"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <p className="text-xl font-bold text-orange-400">About Us</p>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn bg-orange-500 text-white font-bold">Get more Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
