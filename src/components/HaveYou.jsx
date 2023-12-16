import React from "react";

const HaveYou = () => {
  return (
    <>
      <div className="translate-y-14">
        <div className="max-w-[1320px] mx-auto md:px-6 px-4"data-aos="zoom-in">
          <div className="md:pt-[25px] sm:py-10 p-6 md:pb-[45px] md:pl-[45px] md:pr-[52px] sm:px-8 rounded-2xl bg-gradient-to-r from-violet-700 to-fuchsia-500 shadow">
            <div className="flex items-center justify-between flex-col sm:flex-row gap-5 sm:gap-0">
              <div>
                <h2 className="text-white ff_KonexyPersonalUse leading-normal lg:text-5xl md:text-4xl text-[28px] font-normal">
                  Have you
                </h2>
                <p className="ff_gilroy text-white sm:text-2xl text-lg font-semibold lg:max-w-[638px] sm:max-w-sm pt-2">
                  read our study about Speed and Performance in WordPress?
                </p>
              </div>
              <button className="ff_inter text-violet-700 sm:text-lg text-base font-semibold bg-white rounded-[137px] sm:py-[14px] py-3 lg:px-9 px-4 hover:bg-violet-700 hover:text-white hover:shadow-[5px_10px_30px_10px_rgba(96,_34,_234,_0.20)] duration-300">
                Check It Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HaveYou;
