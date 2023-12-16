import React from "react";
import AgileWordPressTeam from "../assets/images/webp/agile-wordpress.webp";

const Agile = () => {
  return (
    <>
      <div className="max-w-[1320px] mx-auto md:px-6 px-4 xl:pb-[110px] md:py-20 py-10">
        <div className="flex flex-wrap flex-row items-center justify-between lg:gap-0 sm:gap-10 gap-6">
          <div className="lg:w-[45%]"data-aos="fade-up-right">
            <img
              src={AgileWordPressTeam}
              alt="AgileWordPressTeam"
              className="w-full xl:max-w-[590px] lg:max-w-[490px] xl:pr-0 lg:pr-10"
            />
          </div>
          <div className="lg:w-1/2" data-aos="fade-up-left">
            <h2 className="text-black xl:text-5xl sm:text-4xl text-2xl font-normal ff_KonexyPersonalUse mb-4">
              <span className="text-violet-700">Agile WordPress </span>
              Development Project management
            </h2>
            <p className="ff_gilroy sm:text-base text-sm font-normal text-[#4C4C4C] sm:mb-8 mb-5">
              Suspendisse consequat egestas arcu et et. Viverra quis euismod
              neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
              Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus
              tortor sollicitudin risus eget euismod in bibendum turpis.{" "}
            </p>
            <button className="ff_gilroy text-base font-semibold text-white px-6 py-2.5 inline-flex rounded-[80px] bg-violet-700 shadow-[0px_4px_20px_0px_rgba(96,_34,_234,_0.20)] hover:-translate-y-1 transition-all duration-500 ease-in-out">
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agile;
