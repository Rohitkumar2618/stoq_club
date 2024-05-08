import React from "react";

function All_Awail_Basket() {
  const list = [
    {
      title: "Tata",
      img: "https://animationvisarts.com/wp-content/uploads/2016/10/tata-logo-design.jpg",
      price: "$5.50",
    },
    {
      title: "SBI",
      img: "https://animationvisarts.com/wp-content/uploads/2016/10/sbi-logo-design.jpg",
      price: "$3.00",
    },
    {
      title: "HDFC",
      img: "https://animationvisarts.com/wp-content/uploads/2016/10/hdfc-bank-logo-design.jpg",
      price: "$10.00",
    },
    {
      title: "Airtel",
      img: "https://animationvisarts.com/wp-content/uploads/2016/10/airtel-logo-design.jpg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
  ];

  return (
    <>
      <div className="bg-zinc-200">
        <div className="p-3">
          <h1 className="font-bold m-5">All Available Baskets</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          {list.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-md px-2 py-1 md:py-16 lg:py-20"
            >
              {item.img ? (
                <img
                  alt="Logo"
                  className="mb-2 rounded-md"
                  height={80}
                  src={item.img}
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width={80}
                />
              ) : (
                <div className="mb-2 rounded-md bg-gray-300 flex items-center justify-center h-20 w-20">
                  <span className="text-gray-500">
                    <i className="fas fa-image fa-2x"></i>
                  </span>
                </div>
              )}
              <span className="text-sm font-medium">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default All_Awail_Basket;
