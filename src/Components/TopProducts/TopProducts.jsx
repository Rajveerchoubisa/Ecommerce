import React from "react";
import Img1 from "../../assets/website/shirt11.png";
import Img2 from "../../assets/website/WomenWear.png";
import Img3 from "../../assets/website/tshirt11.png";
import { FaStar } from "react-icons/fa6";


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "t-shirt",
    description: "Our premium T-shirt offers unmatched comfort and timeless style.",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Wear",
    description: "Perfect for the modern woman who values both fashion and function.",
  },
  {
    id: 3,
    img: Img3,
    title: "Denim Shirt",
    description: "This classic denim shirt combines timeless style with modern comfort.",
  },
];

const TopProducts = ({handleOrderPopup}) => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24 ">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            beatae fugit unde dolor perspiciatis corrupti suscipit nisi.
          </p>
        </div>
        {/*body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            // eslint-disable-next-line react/jsx-key
            <div data-aos = "zoom-in" className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
              <div className="h-[100px]">
                <img src={data.img} alt="" 
                className="max-w-[200px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              <div className="p-4 text-center ">
                    {/* Star rating */}
                    <div className="w-full flex items-center justify-center gap-1">
                        <FaStar className = "text-yellow-500" />
                        <FaStar className = "text-yellow-500" />
                        <FaStar className = "text-yellow-500" />
                        <FaStar className = "text-yellow-500" />
                    </div>
                    <h1 className="text-xl font-bold">{data.title}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{data.description}</p>
                    <button onClick={handleOrderPopup} className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
