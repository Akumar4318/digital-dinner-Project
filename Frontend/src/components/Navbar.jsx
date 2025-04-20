import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdHistory } from "react-icons/md";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import logo from '../assets/logo.png'
import { useSelector } from "react-redux";

const Navbar = () => {

  const cart=useSelector((state)=>state.cart)
 
  
  return (
    <nav className="bg-gradient-to-r from-pink-200 via-yellow-100 to-orange-200 shadow-md px-6 py-4 flex justify-between items-center ">
   
      <Link to="/" className="flex items-center gap-3 cursor-pointer">
        <div className=" p-2   hover:scale-105 transition-transform duration-300">
          <img
            src={logo}
            alt="logo"
            className="h-10 w-65"
          />
        </div>
        
      </Link>

  
      <ul className="flex items-center gap-8 text-gray-800 font-semibold text-md">
        <li className="cursor-pointer">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-1 transition-all duration-300 ${
                isActive ? "text-rose-600" : "hover:text-rose-500"
              }`
            }
          >
            <FaHome size={18} />
            <span>Home</span>
          </NavLink>
        </li>

        <li className="cursor-pointer">
          <NavLink
            to="/history"
            className={({ isActive }) =>
              `flex items-center gap-1 transition-all duration-300 ${
                isActive ? "text-rose-600" : "hover:text-rose-500"
              }`
            }
          >
            <MdHistory size={18} />
            <span>History</span>
          </NavLink>
        </li>

        <li className="cursor-pointer">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `flex items-center gap-1 transition-all duration-300 ${
                isActive ? "text-rose-600" : "hover:text-rose-500"
              }`
            }
          >
            <FaShoppingCart size={20} />
            <p className="w-[30px] h-[30px] items-center flex justify-center bg-amber-600 text-black p-1 rounded-full absolute top-1">{cart.length}</p>
            <span>Cart</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
