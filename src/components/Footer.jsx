import React from "react";
import WebLogo from "../assets/images/webp/WebLogo.webp";
import {
  AddressIcon,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  MsgIcon,
  RightArrow,
  SearchIcon1,
  TellIcon,
  Twitter,
} from "./Icon";

const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <div className="max-w-[1320px] mx-auto md:px-6 px-4 md:pt-36 pt-20">
          <div className="flex sm:flex-row sm:gap-0 gap-8 flex-col sm:items-center sm:justify-between">
            <img
              src={WebLogo}
              alt="nav-logo"
              className="w-full max-w-[176px] sm:max-w-[150px]"
            />
            <div className="flex justify-between bg-[#FFFFFF] py-2.5 px-5 md:min-w-[381px] max-w-[381px] rounded-[80px]">
              <input
                type="text"
                className="ff_gilroy  text-base text-[#6F6F6F] font-normal outline-none w-full"
                placeholder="Search here...."
              />
              <SearchIcon1 />
            </div>
          </div>
          <div className="flex flex-row flex-wrap -mx-3 mt-12">
            <div className=" lg:w-3/12 md:w-4/12 sm:w-1/2 w-full px-3">
              <ul>
                <li className="text-base text-white ff_gilroy font-normal">
                  Services
                </li>
              </ul>
              <ul className="pt-4">
                <li className="group">
                  <a
                    href="#"
                    aria-label="linkone"
                    className="flex items-center gap-1 text-sm font-normal text-white ff_gilroy"
                  >
                    <span>
                      <RightArrow />
                    </span>
                    <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                      WordPress Development
                    </p>
                  </a>
                </li>
                <li className="pt-3 group">
                  <a
                    href="#"
                    aria-label="linktwo"
                    className="flex items-center gap-1 text-sm font-normal text-white ff_gilroy"
                  >
                    <span>
                      <RightArrow />
                    </span>
                    <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                      WooCommerce Development
                    </p>
                  </a>
                </li>
                <li className="pt-3 group">
                  <a
                    href="#"
                    aria-label="linkthree"
                    className="flex items-center gap-1 text-sm font-normal text-white ff_gilroy"
                  >
                    <span>
                      <RightArrow />
                    </span>
                    <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                      WordPress Maintenance
                    </p>
                  </a>
                </li>
                <li className="pt-3 group">
                  <a
                    href="#"
                    aria-label="linkonefour"
                    className="flex items-center gap-1 text-sm font-normal text-white ff_gilroy"
                  >
                    <span>
                      <RightArrow />
                    </span>
                    <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                      Speed Optimization
                    </p>
                  </a>
                </li>
                <li className="pt-3 group">
                  <a
                    href="#"
                    aria-label="linkfive"
                    className="flex items-center gap-1 text-sm font-normal text-white ff_gilroy"
                  >
                    <span>
                      <RightArrow />
                    </span>
                    <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                      Dedicated WordPress Developer
                    </p>
                  </a>
                </li>
                <li className="pt-3  group">
                  <a
                    href="#"
                    aria-label="linksix"
                    className="flex items-center gap-1 text-sm font-normal text-white ff_gilroy"
                  >
                    <span>
                      <RightArrow />
                    </span>
                    <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                      Headless WordPress Development
                    </p>
                  </a>
                </li>
                <li className="pt-3 group">
                  <a
                    href="#"
                    aria-label="linkseven"
                    className="flex items-center gap-1 text-sm font-normal text-white ff_gilroy"
                  >
                    <span>
                      <RightArrow />
                    </span>
                    <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                      White Label Development
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <div className=" lg:w-3/12 md:w-4/12 sm:w-1/2  pt-6 sm:pt-0 w-full px-3">
              <ul>
                <li className="text-base text-white ff_gilroy font-normal">
                  Services
                </li>
              </ul>
              <ul className="pt-4">
                <li className="group">
                  <a
                    href="#"
                    aria-label="linkeight"
                    className="flex items-center gap-1 text-sm font-normal text-white ff_gilroy"
                  >
                    <span>
                      <RightArrow />
                    </span>
                    <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                      WordPress Hosting
                    </p>
                  </a>
                </li>
                <li className="pt-3 group">
                  <a
                    href="#"
                    aria-label="linknine"
                    className="flex items-center gap-1 text-sm font-normal text-white ff_gilroy"
                  >
                    <span>
                      <RightArrow />
                    </span>
                    <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                      PSD, XD, Figma to WordPress Conversion
                    </p>
                  </a>
                </li>
                <li className="pt-3 group">
                  <a
                    href="#"
                    aria-label="linkten"
                    className="flex items-center gap-1 text-sm font-normal text-white ff_gilroy"
                  >
                    <span>
                      <RightArrow />
                    </span>
                    <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                      Custom WordPress Theme
                    </p>
                  </a>
                </li>
                <li className="pt-3 group">
                  <a
                    href="#"
                    aria-label="linkeleven"
                    className="flex items-center gap-1 text-sm font-normal text-white ff_gilroy"
                  >
                    <span>
                      <RightArrow />
                    </span>
                    <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                      Custom WordPress Plugins
                    </p>
                  </a>
                </li>
                <li className="pt-3 group">
                  <a
                    href="#"
                    aria-label="linkteweleve"
                    className="flex items-center gap-1 text-sm font-normal text-white ff_gilroy"
                  >
                    <span>
                      <RightArrow />
                    </span>
                    <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                      CMS to WordPress
                    </p>
                  </a>
                </li>
                <li className="pt-3 group">
                  <a
                    href="#"
                    aria-label="linkthreten"
                    className="flex items-center gap-1 text-sm font-normal text-white ff_gilroy"
                  >
                    <span>
                      <RightArrow />
                    </span>
                    <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                      WordPress Malware Removal
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <div className=" lg:w-3/12 md:w-4/12 sm:w-1/2 w-full pt-6 md:pt-0 px-3">
              <ul>
                <li className="text-base text-white ff_gilroy font-normal">
                  Latest Articles
                </li>
              </ul>
              <ul className="pt-4">
                <li>
                  <a
                    href="#"
                    aria-label="linkforten"
                    className="flex items-center gap-1 text-sm font-normal text-white ff_gilroy"
                  >
                    7 WordPress Plugins to Create an Effective Newsletter
                    03.01.2022
                  </a>
                </li>
                <li className="pt-3">
                  <a
                    href="#"
                    aria-label="linkfiveten"
                    className="flex items-center gap-1 text-sm font-normal text-white ff_gilroy"
                  >
                    What’s the Perfect Blog Post Length for Your WordPress
                    Site’s SEO? 02.01.2022
                  </a>
                </li>
                <li className="pt-3">
                  <a
                    href="#"
                    aria-label="linksixten"
                    className="flex items-center gap-1 text-sm font-normal text-white ff_gilroy"
                  >
                    5 Reasons the Future of WordPress Is Headless 01.01.2022
                  </a>
                </li>
                <li className="pt-3">
                  <a
                    href="#"
                    aria-label="linkseventen"
                    className="flex items-center gap-1 text-sm font-normal text-white ff_gilroy"
                  >
                    Viptor Says: Vipe Studio’s WordPress Developers Wrap Up the
                    Amazingly Successful 2021 30.12.2021
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-3/12 md:w-4/12 sm:w-1/2 w-full pt-6 lg:pt-0 px-3">
              <ul>
                <li className="text-base text-white ff_gilroy font-normal">
                  Contact
                </li>
              </ul>
              <ul className="pt-4">
                <li>
                  <a
                    href="tel:359988993128"
                    aria-label="numberfooteronoe"
                    target="_blank"
                    className="flex items-center gap-3 text-sm font-normal text-white ff_gilroy"
                  >
                    <span>
                      <TellIcon />
                    </span>
                    EU: +359 988 993 128
                  </a>
                </li>
                <li className="pt-3">
                  <a
                    href="tel:+118882666917"
                    aria-label="number-footer"
                    target="_blank"
                    className="flex items-center gap-3 text-sm font-normal text-white ff_gilroy"
                  >
                    <span>
                      <TellIcon />
                    </span>
                    US: +1 (1 888) 266-6917
                  </a>
                </li>
                <li className="pt-3">
                  <a
                    href="mailto:office@vipestudio.com"
                    aria-label="mail"
                    target="_blank"
                    className="flex items-center gap-3 text-sm font-normal text-white ff_gilroy"
                  >
                    <span>
                      <MsgIcon />
                    </span>
                    office@vipestudio.com
                  </a>
                </li>
                <li className="pt-3">
                  <a
                    href="https://maps.app.goo.gl/xMo2vzyg5HQp7CCS6"
                    aria-label="location"
                    target="_blank"
                    className="flex items-center gap-3 text-sm font-normal text-white ff_gilroy"
                  >
                    <span>
                      <AddressIcon />
                    </span>
                    14 Srebarna, Sofia 1407, Bulgaria
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#4C4C4C] mt-20"></div>
        <div className="max-w-[1320px] mx-auto md:px-6 px-4 py-8">
          <div className="flex sm:items-center justify-between flex-col sm:flex-row gap-6 sm:gap-0">
            <div>
              <p className="text-sm font-normal text-white ff_gilroy ">
                © Vipe Studio 2016-2022
              </p>
              <div className="pt-3 flex items-center gap-[14px]">
                <p className="text-sm font-normal text-white ff_gilroy relative after:absolute after:w-[1px] after:h-full after:bg-white after:right-[-8px] after:max-h-[14px] after:top-1">
                  Privacy
                </p>
                <p className="text-sm font-normal text-white ff_gilroy relative after:absolute after:w-[1px] after:h-full after:bg-white after:right-[-8px] after:max-h-[14px] after:top-1">
                  Careers
                </p>
                <p className="text-sm font-normal text-white ff_gilroy relative after:absolute after:w-[1px] after:h-full after:bg-white after:right-[-8px] after:max-h-[14px] after:top-1">
                  Media
                </p>
                <p className="text-sm font-normal text-white ff_gilroy">
                  Client Area
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="https://github.com/"
                aria-label="github"
                target="_blank"
                className="hover:-translate-y-2 transition-all duration-300 ease-linear"
              >
                <GitHub />
              </a>
              <a
                href="https://in.linkedin.com"
                aria-label="linkedin"
                target="_blank"
                className="hover:-translate-y-2 transition-all duration-300 ease-linear"
              >
                <LinkedIn />
              </a>
              <a
                href="https://twitter.com"
                aria-label="twitter"
                target="_blank"
                className="hover:-translate-y-2 transition-all duration-300 ease-linear"
              >
                <Twitter />
              </a>
              <a
                href="https://www.facebook.com/"
                aria-label="facebook"
                target="_blank"
                className="hover:-translate-y-2 transition-all duration-300 ease-linear"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/"
                aria-label="instagram"
                target="_blank"
                className="hover:-translate-y-2 transition-all duration-300 ease-linear"
              >
                <Instagram />
              </a>
              <a
                href="https://www.wikipedia.org/"
                aria-label="wikipedia"
                target="_blank"
                className="hover:-translate-y-2 transition-all duration-300 ease-linear"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
