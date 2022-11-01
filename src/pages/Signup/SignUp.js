import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";

const SignUp = () => {
  const [err, setErr] = useState('')
  const {createUser} = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const email  = form.email.value
        const password = form.password.value;
        const name = form.name.value;
        createUser(email, password)
        .then(result=> {
          const user = result.user
          console.log(user)
          setErr('')
          form.reset()
        })
        .catch(e=> setErr(e.message))

      }
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="text-center  lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl font-bold text-center">Sign Up</h1>
            <p className="text-red-600">{err}</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <input className="btn bg-orange-500 text-white hover:bg-orange-700" type="submit" value="Sign Up" />
            </div>
          </form>
        <p className="text-center mb-4">Already Have An Account? <Link to='/login' className="font-bold text-orange-500">Log In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
