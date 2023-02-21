import React from "react";
import logo from "../assets/Logo.svg";
import { CiSearch } from "react-icons/ci";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { RxHeart } from "react-icons/rx";

const Nav = () => {
  return (
    <nav className="absolute top-4 text-white z-40  w-full px-20  flex justify-between">
      <span className="flex items-center ">
        <img src={logo} alt="" className="w-10 mr-2" />
        <span className="font-mon font-semibold text-2xl">Jeans Wear</span>
      </span>
      <div className="w-fit  flex ">
        <a href="/" className="p-3 font-mon text-sm">
          Home
        </a>
        <a href="/" className="p-3 font-mon text-sm">
          For Him
        </a>
        <a href="/" className="p-3 font-mon text-sm">
          For Her
        </a>
        <a href="/" className="p-3 font-mon text-sm">
          Sports
        </a>
        <a href="/" className="p-3 font-mon text-sm">
          Accessories
        </a>
      </div>

      <div className="flex w-44 justify-between items-center">
        <CiSearch className=""/>
        <FiUser className=""/>
        <RxHeart className=""/>
        <FiShoppingCart className=""/>
      </div>
    </nav>
  );
};
{
  /* <CiSearch/>
  <FiUser/>
  <RxHeart/>
  <FiShoppingCart/> */
}
export default Nav;
