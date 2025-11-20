import { Heading1, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="w-full fixed top-0 z-999 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center  h-14 md:h-16 lg:h-18">
          <div className="flex items-center space-x-2 cursor-pointer group">
            <div>
              <img src={logo} alt="logo" className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <span className="text-lg sm:text-2xl  md:text-3xl">
              <span className="text-white">Code</span>
              <span className="text-blue-400">Flow</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Testionials
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden cursor-pointer p-2 text-gray-300 hover:text-white"
          >
            {mobileMenOpen ? (
              <X className="w-6 h-6 md:w-8 md:h-8" />
            ) : (
              <Menu className="w-6 h-6 md:w-8 md:h-8" />
            )}
          </button>
        </div>
      </div>
      {/* Hamburger Menu */}
      {mobileMenOpen && (
        <div className="md:hidden bg-slate-950/20 backdrop-blur-lg border-t border-slate-800">
          <div className="flex flex-col">
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Testionials
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
