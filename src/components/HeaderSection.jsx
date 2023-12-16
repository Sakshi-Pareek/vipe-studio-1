import React, { useState } from "react";
import LogoImg from "../assets/images/webp/WebLogo.webp";
import { NavArrow } from "./Icon";
import { Earth } from "./Icon";
import { PlayBtn } from "./Icon";
import WordpressTeam from "../assets/images/webp/wordpress-team.webp";
import { SearchIcon } from "./Icon";
import { SpinnerRefresh } from "./Icon";
import Trust from "../assets/images/webp/trustpiolt.webp";
import Fivestar from "../assets/images/webp/stars_images.webp";

const HeaderSection = () => {
  const [show, setshow] = useState(true);
  if (show === false) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="bg-black relative">
        <div className="max-w-[1320px] mx-auto md:px-6 px-4">
          <nav className="flex justify-between items-center py-4">
            <div className="flex justify-between gap-12 items-center">
              <img
                src={LogoImg}
                alt="LogoImg"
                className="w-full sm:max-w-[176px] max-w-[120px] cursor-pointer"
              />
              <ul
                className={`${
                  show
                    ? "flex flex-row items-center max-xl:fixed bottom-0 max-xl:z-[5] max-xl:min-h-screen max-xl:left-[-150%] max-xl:h-full gap-[20px] max-xl:w-full transition-all duration-300 ease-linear"
                    : "max-xl:bg-[#8997e9fa] max-xl:flex-col max-xl:fixed text-black max-xl:z-[5] max-xl:left-[0] max-xl:h-full bottom-0 gap-[20px] max-xl:w-full max-xl:min-h-screen flex items-center justify-center"
                }`}
              >
                <li className="group relative">
                  <a
                    className="text-white flex font-normal text-base ff_gilroy xl:text-base sm:text-2xl"
                    href=""
                  >
                    WordPress Solution
                    <span>
                      <NavArrow />
                    </span>
                  </a>
                  <div className="absolute bg-transparent min-w-[109px] z-[1] hidden justify-center items-center flex-col max-xl:invisible left-0 right-0 top-[30px] transition-all duration-300 ease-linear group-hover:flex ">
                    <a
                      href="#Home"
                      className="w-[108px] h-[45px] text-white bg-gradient-to-r from-violet-700 to-fuchsia-500 rounded-2xl flex justify-center items-center ff_gilroy"
                    >
                      About
                    </a>
                  </div>
                </li>
                <li className="group relative">
                  <a
                    className="text-white flex ff_gilroy text-base font-normal xl:text-base sm:text-2xl"
                    href=""
                  >
                    Services
                    <span>
                      <NavArrow />
                    </span>
                  </a>
                  <div className="absolute bg-transparent min-w-[109px] z-[1] hidden justify-center items-center max-xl:invisible flex-col left-0 right-0 top-[30px] transition-all duration-300 ease-linear group-hover:flex ">
                    <a
                      href="#Home"
                      className="w-[108px] h-[45px] text-white bg-gradient-to-r from-violet-700 to-fuchsia-500 rounded-2xl flex justify-center items-center ff_gilroy"
                    >
                      About
                    </a>
                  </div>
                </li>
                <li className="group relative">
                  <a
                    className="text-white font-normal text-base ff_gilroy flex xl:text-base sm:text-2xl"
                    href=""
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group relative">
                  <a
                    className="text-white font-normal text-base ff_gilroy flex xl:text-base sm:text-2xl"
                    href=""
                  >
                    About
                    <span>
                      <NavArrow />
                    </span>
                  </a>
                  <div className="absolute bg-transparent min-w-[109px] z-[1] max-xl:invisible hidden justify-center items-center flex-col left-0 right-0 top-[30px] transition-all duration-300 ease-linear group-hover:flex ">
                    <a
                      href="#Home"
                      className="w-[108px] h-[45px] text-white bg-gradient-to-r from-violet-700 to-fuchsia-500 rounded-2xl flex justify-center items-center ff_gilroy"
                    >
                      About
                    </a>
                  </div>
                </li>
                <li className="group">
                  <a
                    className="text-white font-normal xl:text-base sm:text-2xl text-base flex ff_gilroy"
                    href=""
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:block hidden">
              <ul className="flex items-center justify-center gap-9">
                <li>
                  <a
                    className="text-white text-base font-normal ff_gilroy duration-300 transition-all ease-in-out hover:underline"
                    href="tel:1888 266-6917"
                  >
                    1 888 266-6917 (eu <span className="ff_inter">?</span>)
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:shadow-[2px_5px_10px_rgba(225,_225,_225,_1)] transition-all duration-500 ease-in-out text-[18px] font-semibold leading-[150%] py-[10px] px-[24px] bg-[#6022EA] shadow rounded-[80px] ff_gilroy"
                    href=""
                  >
                    Contact Us
                  </a>
                </li>
                <li className="relative group flex gap-1">
                  <Earth />
                  <a
                    className="text-white flex font-normal text-[16px] leading-[150%] ff_gilroy"
                    href=""
                  >
                    Eng
                    <span>
                      <NavArrow />
                    </span>
                  </a>
                  <div className="absolute bg-transparent min-w-[109px] z-[1] hidden justify-center items-center flex-col left-0 right-0 top-[30px] transition-all duration-300 ease-linear group-hover:flex">
                    <a
                      href="#Home"
                      className="w-[108px] h-[45px] text-white bg-gradient-to-r from-violet-700 to-fuchsia-500 rounded-2xl flex justify-center items-center ff_gilroy"
                    >
                      Hindi
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div
              onClick={() => setshow(!show)}
              className="w-[39px] h-[27px] relative z-[15] flex flex-col justify-between xl:hidden"
            >
              <span
                className={`${
                  show
                    ? "bg-white w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl"
                    : "bg-white w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl rotate-[50deg] translate-y-[26px]"
                }`}
              ></span>
              <span
                className={`${
                  show
                    ? "bg-white w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl"
                    : "opacity-0"
                }`}
              ></span>
              <span
                className={`${
                  show
                    ? "bg-white w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl"
                    : "bg-white w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl rotate-[-50deg] translate-y-[89%]"
                }`}
              ></span>
            </div>
          </nav>
        </div>
        <div className="max-w-[1320px] mx-auto md:px-6 px-4 sm:pt-[107px] pt-[50px] sm:pb-[150px] pb-[20px]">
          <div className="flex flex-row flex-wrap items-center">
            <div className="lg:w-1/2 w-full" data-aos="fade-right">
              <h1 className=" ff_KonexyPersonalUse text-white xxl:text-7xl xl:text-[60px] md:text-[50px] text-[32px] font-normal relative after:absolute after:bg-[#6022EA] after:w-1 after:h-full after:left-0 after:top-0 pl-3 ">
                WordPress Development Agency
              </h1>
              <p className=" pt-[30px] text-white ff_gilroy sm:text-2xl text-xl font-bold pb-[22px] ">
                for Enterprise + Friendly Team{" "}
              </p>
              <p className="text-[#575757] lg:max-w-[592px] md:text-base text-sm font-normal ff_gilroy pb-7">
                Vipe Studio is a WordPress Agency for development - a long-term
                partner for any WordPress service. Websites and,online shops
                development, maintenance and customization is what we do best.
              </p>
              <div className=" flex sm:items-center sm:flex-row flex-col gap-8">
                <div>
                  <a
                    href=""
                    className="hover:shadow-[2px_5px_10px_rgba(225,_225,_225,_1)] transition-all duration-500 ease-in-out ff_gilroy text-base font-semibold text-white py-3 px-10 bg-violet-700 shadow rounded-[80px]"
                  >
                    Get Started
                  </a>
                </div>
                <div className=" flex items-center gap-3 group">
                  <PlayBtn />
                  <p className=" cursor-pointer ff_gilroy font-normal text-white opacity-[0.7] text-base">
                    What is Vipe? (1min)
                  </p>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/2 w-full pt-12 lg:pt-0 relative"
              data-aos="fade-left"
            >
              <div className="w-[187.13px] h-[187.13px] bg-gradient-to-b to-[#6022EA] from-[#FA00FF] absolute rounded-full blur-[100px] 2xl:right-[-10%] right-0 top-[-15%]" />
              <div className="w-[187.13px] h-[187.13px] bg-gradient-to-b to-[#6022EA] from-[#FA00FF] absolute rounded-full blur-[100px] left-[-10%] bottom-[-9%]"></div>
              <img
                src={WordpressTeam}
                alt="WordpressTeam"
                className="w-full rounded-[20px] relative z-[1]"
              />
              <div className="bg-[#0000004d] backdrop-blur-md absolute z-[2] py-[10px] cursor-pointer pl-[18px] pr-7 left-0 bottom-0 rounded-[15px] sm:m-6 m-3">
                <img
                  src={Trust}
                  alt="Trust"
                  className="relative z-[2] w-full max-w-[60px] md:max-w-[107px]"
                />
                <img
                  src={Fivestar}
                  alt="Fivestar"
                  className="pt-[5px] md:max-w-[170px] max-w-[80px]"
                />
                <p className="font-normal ff_inter md:text-base text-xs text-white pt-2">
                  Rated 5.0 Excellent
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-0 left-0 w-full bg-[#e1ffff0d]">
          <div className="max-w-[1320px] mx-auto md:px-6 px-4 py-10">
            <div
              className="flex max-lg:flex-col items-center justify-between"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <div>
                <h2 className="text-white md:text-4xl text-2xl font-normal ff_KonexyPersonalUse relative pb-4">
                  Tell us more....
                </h2>
                <p className="text-white md:text-base text-sm ff_gilroy max-w-[573px] font-normal">
                  Lectus vitae est ultrices sed. Sit aliquam commodo hac donec
                  augue in quis. Magna vel orci sem neque fringilla et lectus
                  laoreet.
                </p>
              </div>
              <div className="w-full flex flex-col lg:items-end items-center">
                <div className=" flex justify-between mt-8 lg:mt-0 items-center w-full bg-[#ffffff1a] rounded-[80px] sm:py-5 py-3 pl-[33px] pr-[31px] max-w-[537px] border-[#ffffff1a] border">
                  <input
                    type="text"
                    placeholder="What do you need assistance with?"
                    className=" bg-transparent outline-none w-full text-[#ffffffb3] sm:text-base text-xs ff_gilroy font-normal"
                  />
                  <SearchIcon />
                </div>
                <div className="flex sm:gap-[205px] gap-10 pt-3">
                  <div className="flex items-center gap-1 justify-start group">
                    <SpinnerRefresh />
                    <a
                      href=""
                      className="text-white ff_gilroy font-normal leading-[150%] text-xs sm:text-base  hover:text-violet-700 transition-all duration-300 ease-in-out"
                    >
                      or send us an inquire?{" "}
                    </a>
                  </div>
                  <a
                    href=""
                    className="text-white text-xs sm:text-base ff_gilroy font-normal hover:text-violet-700 transition-all duration-300 ease-in-out"
                  >
                    Learn more about...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
