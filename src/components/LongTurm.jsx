import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Propy from "../assets/images/webp/propy.webp";
import Ciela from "../assets/images/webp/ciela.webp";
import Revuele from "../assets/images/webp/revuele.webp";
import Spark from "../assets/images/webp/spark.webp";

const LongTurm = () => {
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
        <div className="max-w-[1320px] mx-auto md:px-6 px-4" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
          <h2 className="text-black font-normal leading-normal lg:text-5xl md:text-4xl sm:text-[28px] text-2xl ff_KonexyPersonalUse mb-5 max-w-[631px]">
            Long Term WordPress Partner
          </h2>
          <p className="ff_giroy sm:text-base text-sm font-normal text-[#313131] sm:mb-9 mb-5 max-w-[693px]">
            Our motto is the long-term partnership – we will not only develop
            your perfect website, but will be behind you through the whole
            process. They already trusted us:
          </p>
          <Slider {...settings}>
            <div className="px-5">
              <img
                src={Propy}
                alt="Propy"
                className="w-full max-w-[179px] cursor-pointer"
              />
            </div>
            <div className="px-5">
              <img
                src={Ciela}
                alt="ciela"
                className="w-full max-w-[163px] cursor-pointer"
              />
            </div>
            <div className="px-5">
              <img
                src={Revuele}
                alt="Revuele"
                className="w-full max-w-[192px] cursor-pointer"
              />
            </div>
            <div className="px-5">
              <img
                src={Ciela}
                alt="ciela"
                className="w-full max-w-[163px] cursor-pointer"
              />
            </div>
            <div className="px-5">
              <img
                src={Spark}
                alt="Spark"
                className="w-full max-w-[171px] cursor-pointer"
              />
            </div>
            <div className="px-5">
              <img
                src={Ciela}
                alt="ciela"
                className="w-full max-w-[163px] cursor-pointer"
              />
            </div>
            <div className="px-5">
              <img
                src={Revuele}
                alt="Revuele"
                className="w-full max-w-[192px] cursor-pointer"
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default LongTurm;
