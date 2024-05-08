import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";

function Basket() {
  // State to store fetched basket data
  const [baskets, setBaskets] = useState([]);

  // Fetch basket data from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setBaskets(data))
      .catch((error) => console.error("Error fetching baskets:", error));
  }, []);

  return (
    <>
      <h1 className="font-semibold mb-3">Your Baskets</h1>
      <div className="overflow-y-scroll max-h-[400px]">
        <div className="grid grid-cols-1 gap-4">
          {baskets.map((basket) => (
            <div
              key={basket.id}
              className="flex items-center justify-between w-full gap-4 p-4 rounded-md hover:shadow-lg transition duration-300 bg-[#F0F4FE] mb-3"
            >
              <div>
                <IoMdCheckboxOutline className="text-3xl" />
              </div>
              <div>
                <h1 className="text-black font-semibold text-xl mb-2">
                  {basket.title}
                </h1>
                <p className="text-black text-sm">{basket.description}</p>
              </div>
              <div>
                <FaArrowRight className=" px-1 bg-white text-black text-2xl hover:text-blue-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Basket;
