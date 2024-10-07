import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="w-full h-[100vh] flex items-center bg-cover bg-center relative bg-[#414142]"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="left w-1/2">
          <h3 className="text-[100px] mb-[25px]">
            Angga <span className="text-extra-color">Nirwana</span>
          </h3>
          <p className="text-white text-[23px] font-medium mb-[50px]">
            Fullstack Web Development
          </p>
          <a
            href="#About"
            className="bg-blue-500 text-white py-3 px-6 rounded transition duration-300 hover:bg-blue-600"
          >
            About Me
          </a>
        </div>
        <div className="right w-1/2 pl-[80px]"></div>
      </div>
    </section>
  );
};

export default Hero;
