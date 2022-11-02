import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { AuthContext } from "../../../contexts/AuthContext/AuthProvider";

const Header = () => {
  const {logOut, user} = useContext(AuthContext)

    const menu = < >
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/login'>Log In</Link></li>
    </>
  return (
    <div className="navbar bg-base-100 mt-8 mb-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold"
          >
          {menu}
          </ul>
        </div>
        <Link><img style={{width:'70px'}}  src={logo} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-bold">
          {menu}
        </ul>
      </div>
      <div className="navbar-end">
      <button className="btn btn-outline btn-warning">Appointment</button>
      {
        user?.email && <button onClick={logOut} className="btn ml-12 btn-outline btn-primary">Log Out</button>

      }
      </div>
    </div>
  );
};

export default Header;
