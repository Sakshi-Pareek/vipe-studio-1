import React from "react";
import Enterprise from "../assets/images/webp/Enterprise.webp";
import Business from "../assets/images/webp/business.webp";
import Maintenance from "../assets/images/webp/maintenance.webp";

const Integer = () => {
  const data = [
    {
      id: 1,
      image: Enterprise,
      title: "Enterprise WordPress Solutions",
      content:
        "Pretium, a et sapien non nunc libero. Id dolor sed quis convallis turpis purus feugiat nibh eu. Auctor cras hac ac, sociis diam montes, turpis commodo elit.",
    },
    {
      id: 2,
      image: Business,
      title: "Small to Mid Size Business Development",
      content:
        "Et nunc fermentum id amet tempus, elementum. Eget ac ultrices tortor, mattis amet blandit aenean amet. Massa diam lacus, aliquam neque, cursus.",
    },
    {
      id: 3,
      image: Maintenance,
      title: "Support & Maintenance",
      content:
        "Ac donec ipsum fringilla tortor, consectetur etiam sociis amet quis. Viverra volutpat pretium non in fusce tellus sed urna. Pharetra ullamcorper et donec aliquam.",
    },
  ];
  return (
    <>
      <div className="bg-[#FEFEFE]">
        <div className="max-w-[1320px] mx-auto md:px-6 px-4 xl:pt-[97px] xl:pb-[129px] md:py-20 py-10">
          <h2
            className="text-black ff_KonexyPersonalUse lg:text-5xl md:text-4xl text-[28px] font-normal leading-normal"
            data-aos="fade-right"
          >
            Integer et nisl non
          </h2>
          <div
            className="flex flex-row flex-wrap justify-center"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            {data.map((a, index) => (
              <div
                className="lg:w-1/3 md:w-1/2 sm:w-3/4 w-full sm:px-3 xl:mt-14 mt-8"
                key={index}
              >
                <div className="text-center xl:px-[38px] lg:px-[22px] px-4 xl:pt-[60px] lg:pt-[30px] pb-[38px] pt-[38px] border border-[#E5E5E5] rounded-2xl bg-white  hover:shadow-[0_20px_60.571px_rgba(229,_233,_246,_1)] hover:border-transparent transition-all duration-300 ease-linear h-full justify-between flex flex-col cursor-pointer">
                  <img
                    src={a.image}
                    alt="cardImg"
                    className="mx-auto w-full max-w-[70px]"
                  />
                  <h3 className="text-neutral-950 ff_inter font-semibold max-lg:text-2xl text-xl mt-10">
                    {a.title}
                  </h3>
                  <p className="text-[#4D4D4D] ff_gilroy text-base font-normal mt-4 mb-5 ">
                    {a.content}
                  </p>
                  <a
                    href=""
                    className="ff_gilroy font-semibold text-base text-violet-700"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Integer;
