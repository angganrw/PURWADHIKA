import React from "react";
import { Link } from "react-scroll";
import { FaFacebook, FaTwitter, FaBehance, FaInstagram } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-[#3f3f40] py-4 px-8 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <img
            src="./src/assets/wslogo.png"
            alt="wslogo"
            className="max-w-[100px] max-h-[40px]"
          />
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                className="text-white font-medium hover:text-extra-color cursor-pointer"
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-medium hover:text-extra-color cursor-pointer"
                to="about"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-medium hover:text-extra-color cursor-pointer"
                to="portfolio"
                smooth={true}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-medium hover:text-extra-color cursor-pointer"
                to="service"
                smooth={true}
                duration={500}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-medium hover:text-extra-color cursor-pointer"
                to="blog"
                smooth={true}
                duration={500}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-medium hover:text-extra-color cursor-pointer"
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="social flex space-x-4">
          <a href="#" className="text-white hover:text-extra-color">
            <FaFacebook />
          </a>
          <a href="#" className="text-white hover:text-extra-color">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-extra-color">
            <FaBehance />
          </a>
          <a href="#" className="text-white hover:text-extra-color">
            <FaInstagram />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
