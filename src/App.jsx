import { Card } from "@nextui-org/react";

import DashBoard from "./components/DashBoard";
// import PopularBaskets from "./components/PopularBaskets";

import All_Awail_Basket from "./components/All_Awail_Basket";
import PopularBasket from "./components/Popular_Basket";
import PopularBaskets from "./components/PopularBaskets";
import BasketDetils from "./components/BasketDetils";

import Basket from "./components/Basket";

const App = () => {
  return (
    <>
      {/* <DashBoard />
      <div className="flex justify-center mt-5">
        <div className="px-4 lg:px-0 w-30 lg:w-auto">
          <Basket />
        </div>
      </div>
      <PopularBaskets />
      <All_Awail_Basket /> */}

      <BasketDetils />
    </>
  );
};

export default App;
