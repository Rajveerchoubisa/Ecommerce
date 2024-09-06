import React from "react";
import Image3 from "../../assets/Hero/Sale.png";
import Image2 from "../../assets/Hero/Shopping.png";
import Image1 from "../../assets/Hero/shpooing.webp";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Discover unbeatable discounts on our entire collection of men's wear. From casual t-shirts to formal attire, save up to 50% on top-quality clothing that suits every occasion. Don't miss out on these amazing deals to refresh your wardrobe with stylish and comfortable options.",
  },
  {
    id: 2,
    img: Image2,
    title: "Get upto 30% off on all Women's Wear",
    description:
      "Elevate your style with our exclusive offer: get up to 30% off on all women's wear. Whether you're looking for elegant dresses, chic tops, or trendy accessories, our collection has something for every occasion. Don't miss out on these fashionable deals and update your wardrobe today.",
  },
  {
    id: 3,
    img: Image3,
    title: "50% off on all Product Sale",
    description:
      "Don't miss our massive sale: enjoy 50% off on all products! From the latest gadgets to stylish apparel, this is your chance to grab everything you need at half the price. Hurry, these unbeatable deals won't last long. Shop now and save big on your favorite items.",
  },
];
const Hero = ({handleOrderPopup}) => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 800,
        arrows:false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: true,
        cssEase: "ease-in-out",
    }
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9 "></div>
      {/* Hero section */}
      <div className="container pb-8 sm:pb-0 ">
        <Slider  {... settings} >
            {ImageList.map((data) => (
                // eslint-disable-next-line react/jsx-key
                <div>
            <div className=" grid grid-cols-1 sm:grid-cols-2">
              {/* text content section */}

              <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                <h1 data-aos = "zoom-out" data-aos-duration = "500" data-aos-once="true" className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                  {data.title}
                </h1>
                <p data-aos = "zoom-out" data-aos-duration = "500" data-aos-delay="100"  className="text-sm">
                  {data.description}
                </p>
                <div data-aos = "zoom-out" data-aos-duration = "500" data-aos-dealy="300" >
                  <button onClick={handleOrderPopup} className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full ">
                    Order Now
                  </button>
                </div>
              </div>
              {/* Image section */}
              <div className="order-1 sm:order-2">
                <div data-aos = "zoom-in" data-aos-once = "true"  className="relative z-10 ">
                  <img
                    className="w-[200px] h-[195px] sm:h-[350px] sm:w-[350px] sm:scale-105 object-contain mx-auto lg:scale-120"
                    src={data.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
