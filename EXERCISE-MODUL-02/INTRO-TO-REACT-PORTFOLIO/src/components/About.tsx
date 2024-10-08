import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className=" h-[100vh] py-20 bg-[#414142]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#ffdd79] mb-52">
          ⚙️ About Me /
        </h2>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <p className="text-lg text-white mb-6"></p>
          <div className="mt-8">
            <h3 className="text-xl font-bold text-white">About Me</h3>
            <div className="mt-4">
              <p className="text-white">
                Name: <span className="text-[#ffeaaa]">ANGGA NIRWANA</span>
              </p>
              <p className="text-white">
                Email: <span className="text-[#ffeaaa]">me@angganrw.id</span>
              </p>
              <p className="text-white">
                Phone: <span className="text-[#ffeaaa]">+6281 333 650 292</span>
              </p>
              <p className="text-white">
                Address:
                <span className="text-[#ffeaaa]"> Jakarta, Indonesia</span>
              </p>
              <p className="text-white">
                Freelance: <span className="text-[#ffeaaa]">Available</span>
              </p>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="/contact"
              download
              className="bg-blue-500 text-white py-2 px-4 rounded transition duration-300  hover:bg-blue-600 mb-96"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="./src/assets/img/01.PNG"
            alt="wslogo"
            className="w-64 h-64 rounded-full shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
