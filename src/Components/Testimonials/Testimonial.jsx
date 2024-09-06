import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Siddharth",
    text: "I was blown away by the quality of the clothing. The fabric is soft, the stitching is strong, and the fit is perfect. I’ll definitely be shopping here again!",
    img: "http://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Rishi",
    text: "I’m so impressed with the customer service and how quickly my order arrived. The clothes are exactly as described, and I couldn’t be happier with my purchase.",
    img: "http://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Aditya",
    text: "Finding stylish, affordable clothes that actually fit well has always been a challenge for me. This site has it all – I’m thrilled with my new wardrobe!",
    img: "http://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Vivek",
    text: "Whether I need something casual or a bit more dressed up, I always find what I’m looking for here. The variety and quality of the clothing keep me coming back!",
    img: "http://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Himanshu",
    text: "I wasn’t sure what to expect, but this site exceeded all my expectations. The clothes are beautiful, well-made, and I’ve received so many compliments already!",
    img: "http://picsum.photos/101/101",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Discover what our customers are saying about their experiences with
            us. Hear firsthand from satisfied shoppers who have found the
            perfect products and exceptional service.
          </p>
        </div>
        {/* testimonial cards */}
        <div 
        data-aos = "zoom-in"
        >
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className=" space-y-3 ">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0" >
                   ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
