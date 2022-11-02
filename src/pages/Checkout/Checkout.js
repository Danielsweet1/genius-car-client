import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import img from "../../assets/images/checkout/checkout.png";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";

const Checkout = () => {
  const { title, price, _id } = useLoaderData();
  const { user, } = useContext(AuthContext);

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unRegisterd";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      title,
      price,
      customer: {
        name,
        email,
        phone,
        message,
      },
    };
  
      fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      form.reset();
  };

  return (
    <div>
      <img className="mx-auto my-8" src={img} alt="" />
      <div className="my-20 bg-base-200 p-8 rounded-md">
        <div className="my-4">
          <h2 className="text-3xl font-bold">
            You will take <span className="text-orange-500">{title}</span>{" "}
            Service
          </h2>
          <h3 className="text-2xl font-semibold">Price: {price}</h3>
        </div>
        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input input-bordered w-full "
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input input-bordered w-full "
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="input input-bordered w-full "
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full "
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <textarea
            className="textarea textarea-primary w-full my-6 h-24"
            placeholder="Your Message"
            name="message"
          ></textarea>
          <input
            className="btn bg-orange-500 hover:bg-orange-700 text-white"
            type="submit"
            value="Place Your Order"
          />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
