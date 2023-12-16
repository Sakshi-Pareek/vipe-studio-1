import React from "react";
import SpaceMen from "../assets/images/webp/SpaceMen.webp";
import PccDesktop from "../assets/images/webp/Pcc-desktop.webp";

const Success = () => {
  const items = [
    {
      id: 1,
      image: PccDesktop,
      title: "Sit diam metus",
      content:
        "Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.",
      btn: "Read More....",
    },
    {
      id: 2,
      image: PccDesktop,
      title: "Sit diam metus",
      content:
        "Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.",
      btn: "Read More....",
    },
    {
      id: 3,
      image: PccDesktop,
      title: "Sit diam metus",
      content:
        "Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.",
      btn: "Read More....",
    },
  ];
  return (
    <>
      <div className="bg-[#FEFEFE]">
        <div className="max-w-[1320px] mx-auto md:px-6 px-4 xl:pt-[217px] lg:pt-36 md:pt-20 mb:pb-10 pt-10 xl:pb-16">
          <div
            className="flex flex-wrap flex-row items-center justify-center lg:gap-0 gap-10"
            data-aos="fade-down"
            data-aos-easing="linear"
          >
            <div className="lg:w-4/12">
              <img
                src={SpaceMen}
                alt="SpaceMen"
                className="lg:max-w-[413px] w-full px-5 xl:pr-0 lg:pr-5 md:px-0 "
              />
            </div>
            <div className="lg:w-8/12">
              <h2 className="text-zinc-500 text-base font-normal ff_gilroy">
                HAVE YOU SEEN OUR MASCOT?
              </h2>
              <h3 className="text-black leading-normal lg:text-5xl md:text-4xl text-[28px] ff_KonexyPersonalUse font-normal mb-5">
                Success Guides{" "}
              </h3>
              <div className="flex flex-wrap sm:gap-2.5 gap-5">
                <button className="w-[119px] h-10 px-4 py-2 bg-white rounded-[80px] border border-violet-700 text-violet-700 text-base font-normal ff_gilroy whitespace-nowrap hover:font-semibold hover:bg-violet-700 hover:text-white transition-all duration-300 ease-linear">
                  Category-1
                </button>
                <button className="w-[119px] h-10 px-4 py-2 bg-white rounded-[80px] border border-violet-700 text-violet-700 text-base font-normal ff_gilroy whitespace-nowrap hover:font-semibold hover:bg-violet-700 hover:text-white transition-all duration-300 ease-linear">
                  Category-2
                </button>
                <button className="w-[119px] h-10 px-4 py-2 bg-white rounded-[80px] border border-violet-700 text-violet-700 text-base font-normal ff_gilroy whitespace-nowrap hover:font-semibold hover:bg-violet-700 hover:text-white transition-all duration-300 ease-linear">
                  Category-3
                </button>
                <button className="w-[119px] h-10 px-4 py-2 bg-white rounded-[80px] border border-violet-700 text-violet-700 text-base font-normal ff_gilroy whitespace-nowrap hover:font-semibold hover:bg-violet-700 hover:text-white transition-all duration-300 ease-linear">
                  Category-4
                </button>
              </div>
              <div className="flex flex-row flex-wrap">
                {items.map((a, index) => (
                  <div
                    className="lg:w-1/3 md:w-1/2  w-full sm:px-3 xl:mt-9 mt-8"
                    key={index}
                  >
                    <div className="p-[14px] border border-black border-opacity-10 rounded-2xl bg-white hover:shadow-[0_20px_60.571px_rgba(229,_233,_246,_1)] transition-all duration-300 ease-linear h-full justify-between flex flex-col cursor-pointer">
                      <img
                        src={a.image}
                        alt="cardImg"
                        className="mx-auto w-full rounded-2xl"
                      />
                      <h3 className="text-neutral-950 ff_gilroy font-semibold max-lg:text-2xl text-xl mt-4">
                        {a.title}
                      </h3>
                      <p className="text-[#4D4D4D] ff_gilroy text-base font-normal mt-2.5 mb-2 ">
                        {a.content}
                      </p>
                      <a
                        href=""
                        className="ff_gilroy font-semibold text-base text-violet-700"
                      >
                        {a.btn}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
