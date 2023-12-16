import React from "react";
import PreloaderImg from "../assets/images/webp/WebLogo.webp";

const PreLoader = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col sm:gap-6 gap-4 justify-center items-center fixed bg-gradient-to-t from-violet-700 to-fuchsia-500">
        <img
          src={PreloaderImg}
          alt="PreloaderImg"
          className="md:max-w-[180px] max-w-[120px] w-full loaderanimat"
        />
        <div className="loader"></div>
      </div>
    </>
  );
};

export default PreLoader;
