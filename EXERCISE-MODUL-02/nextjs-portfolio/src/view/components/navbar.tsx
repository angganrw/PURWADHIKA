import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaBehance,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-[#3f3f40] py-4 px-8 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Image src="/img/wslogo.png" alt="wslogo" width={50} height={20} />
        </div>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 py-4 md:py-0">
          <li>
            <Link
              href="/"
              className="text-white font-medium hover:text-extra-color cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className="text-white font-medium hover:text-extra-color cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className="text-white font-medium hover:text-extra-color cursor-pointer"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white font-medium hover:text-extra-color cursor-pointer"
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white font-medium hover:text-extra-color cursor-pointer"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white font-medium hover:text-extra-color cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>

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
}
