import React from "react";
import Popular_Basket from "./Popular_Basket";

function PopularBaskets() {
  return (
    <div className="w-900 mt-5  p-5">
      <h1 className="mb-5">Most Popular Basket</h1>

      <div className="flex gap-2 overflow-x-auto mr-5">
        <div className="flex-shrink-0">
          <Popular_Basket />
        </div>
      </div>
    </div>
  );
}

export default PopularBaskets;
