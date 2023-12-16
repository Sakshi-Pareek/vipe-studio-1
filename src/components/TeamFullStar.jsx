import React from "react";
import TeamFullStarImg from "../assets/images/webp/teamFullstar.webp";

const TeamFullStar = () => {
  return (
    <>
      <div className="bg-neutral-100 lg:py-0 md:py-20 py-10">
        <div className="max-w-[1320px] mx-auto md:px-6 px-4"data-aos="zoom-in">
          <div className="flex flex-row flex-wrap-reverse items-center justify-between lg:gap-0 gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-black font-normal leading-normal lg:text-5xl md:text-4xl text-[28px] ff_KonexyPersonalUse mb-4">
                Team Full of Stars{" "}
              </h2>
              <p className="ff_giroy sm:text-base text-sm font-normal text-[#313131] sm:mb-9 mb-5 lg:max-w-[476px]">
                Suspendisse consequat egestas arcu et et. Viverra quis euismod
                neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
                Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum.
                Lacus tortor sollicitudin risus eget euismod in bibendum turpis.{" "}
              </p>
              <button className="ff_gilroy text-base font-semibold text-white px-6 py-2.5 inline-flex rounded-[80px] bg-violet-700 shadow-[0px_4px_20px_0px_rgba(96,_34,_234,_0.20)] hover:-translate-y-1 transition-all duration-500 ease-in-out">
                Explore
              </button>
            </div>
            <div className="lg:w-1/2">
              <img
                src={TeamFullStarImg}
                alt="TeamFullStar"
                className="rounded-[32px] w-full 2xl:max-w-[686px] xl:max-w-[600px] lg:translate-y-20"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamFullStar;
