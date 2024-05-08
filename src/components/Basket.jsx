import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";

function Basket() {
  return (
    <div className="flex items-center justify-between w-full gap-4 p-4 rounded-md hover:shadow-lg transition duration-300 bg-[#F0F4FE] mb-3 ">
      <div className="">
        <IoMdCheckboxOutline className="text-3xl" />
      </div>
      <div>
        <h1 className="text-black font-semibold text-xl mb-2">Banking</h1>
        <p className="text-black text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          voluptas.
        </p>
      </div>
      <div>
        <FaArrowRight className=" px-1 bg-white text-black text-2xl hover:text-blue-400" />
      </div>
    </div>
  );
}

export default Basket;
