import React from "react";
import img1 from "../assets/Ecompix/caurosel/bg.jpg";
import Nav from "./../Components/Nav";

const Landpage = () => {
  return (
    <div>
      <div className="w-full relative">
        <div className="bg-[#094166] w-full  h-full absolute z-40 opacity-[0.9]"></div>
        <img src={img1} className=" w-full  " />
      </div>
      <Nav />
    </div>
  );
};

export default Landpage;

{
  /* <CiSearch/>
<FiUser/>
<RxHeart/>
<FiShoppingCart/> */
}
