import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YahooNews from "../assets/images/webp/yahoonews.webp";
import YahooFinace from "../assets/images/webp/yahoo_finance.webp";
import TrendingTopics from "../assets/images/webp/trending_topics.webp";
import YahooLife from "../assets/images/webp/yahoo_life.webp";

const Feature = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseonhover: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2.5,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-[#F6F6F6] xl:pt-[105px] xl:pb-[92px] md:py-20 py-10">
        <div
          className="max-w-[1320px] mx-auto md:px-6 px-4"
          data-aos="fade-right"
        >
          <h2 className="text-black font-normal leading-normal lg:text-5xl md:text-4xl text-[28px] ff_KonexyPersonalUse lg:mb-16 mb-8">
            Featured on
          </h2>
          <Slider {...settings}>
            <div className="px-6">
              <img
                src={YahooNews}
                alt="YahooNews"
                className="w-full max-w-[171px] cursor-pointer mr-10"
              />
            </div>
            <div className="px-6">
              <img
                src={YahooFinace}
                alt="YahooFinace"
                className="w-full max-w-[171px] cursor-pointer"
              />
            </div>
            <div className="px-6">
              <img
                src={YahooNews}
                alt="YahooNews"
                className="w-full max-w-[171px] cursor-pointer"
              />
            </div>
            <div className="px-6">
              <img
                src={TrendingTopics}
                alt="TrendingTopics"
                className="w-full max-w-[171px] cursor-pointer"
              />
            </div>
            <div className="px-6">
              <img
                src={YahooLife}
                alt="YahooLife"
                className="w-full max-w-[171px] cursor-pointer"
              />
            </div>
            <div className="px-6">
              <img
                src={TrendingTopics}
                alt="TrendingTopics"
                className="w-full max-w-[171px] cursor-pointer"
              />
            </div>
            <div className="px-6">
              <img
                src={YahooLife}
                alt="YahooLife"
                className="w-full max-w-[171px] cursor-pointer"
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Feature;
