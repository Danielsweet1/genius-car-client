import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";

const Login = () => {
  const handleLogin = e => {
    e.preventDefault()
  }
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="text-center  lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold text-center">Login </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn bg-orange-500 text-white hover:bg-orange-700" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center mb-4">New to Genius Car? <Link to='/signup' className="font-bold text-orange-500">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
