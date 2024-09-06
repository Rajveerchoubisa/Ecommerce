import React from "react";

import Img1 from '../../assets/website/Ethnic.png'
import Img2 from '../../assets/website/Western.png'
import Img3 from '../../assets/website/Shirt.png'
import Img4 from '../../assets/website/Tshirt.png'
import {FaStar} from "react-icons/fa6";

const ProductsData = [
    {
        id:1,
        img: Img1,
        title: "Women Ethnic",
        rating: 4.9,
        color: "white",
        aosDelay: "0",
    },
    {
        id:2,
        img: Img2,
        title: "Women Western",
        rating: 4.8,
        color: "Red",
        aosDelay: "0",
    },
    {
        id:3,
        img: Img3,
        title: "Shirt",
        rating: 4.6,
        color: "Brown",
        aosDelay: "0",
    },
    {
        id:1,
        img: Img4,
        title: "T-Shirt",
        rating: 4.9,
        color: "Yellow",
        aosDelay: "0",
    },
]

const Products = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos = "fade-up" className="text-sm text-primary">Top Selling Products for you</p>
          <h1 data-aos = "fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos = "fade-up"  className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            beatae fugit unde dolor perspiciatis corrupti suscipit nisi.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card section */}
            {
                ProductsData.map((data) =>(
                    <div data-aos = "fade-up" data-aos-delay = {data.aosDelay} key={data.id} className="space-y-3">
                        <img src={data.img} alt="" 
                        className="h-[220px] w-[150px] object-cover rounded-md"
                        />
                        <div>
                            <h3 className="font-semibold">{data.title}</h3>
                            <p className="text-sm text-gray-600">{data.color}</p>
                            <div className="flex items-center gap-1">
                                <FaStar className="text-yellow-400"/>
                                <span>{data.rating}</span>
                            </div>
                        </div>
                    </div>
                ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md ">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
