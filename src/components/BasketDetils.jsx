import React from "react";

function BasketDetils() {
  return (
    <>
      <div className="p-10 font-bold text-2xl ">
        <h1 className="text-3xl"> Bancking</h1>
      </div>
      <div className="flex  ">
        <div className="p-3">
          <div className="w-52 bg-zinc-100 rounded-md overflow-hidden">
            <div className="w-full h-32 flex justify-center items-center bg-zinc-300">
              <div>
                <h1 className="font-semibold ">Anual Return</h1>
                <p className=" ml- text-3xl">54%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 ">
        <h3 className=" font-semibold mb-3"> Why to invest in this basket</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          minus quis itaque, atque expedita nulla sapiente provident cumque
          quasi? Nisi nihil possimus atque rem suscipit praesentium voluptatum
          adipisci qui quo?
        </p>
      </div>
    </>
  );
}

export default BasketDetils;
