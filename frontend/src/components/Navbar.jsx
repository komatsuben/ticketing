// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center mr-2">
              <span className="text-indigo-700 font-bold text-lg">CJ</span>
            </div>
            <span className="font-bold text-xl tracking-tight">
              CaniJournal
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition duration-300 ease-in-out"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition duration-300 ease-in-out"
              >
                About
              </Link>
              <Link
                to="/order-seat"
                className="px-3 py-2 rounded-md text-sm font-medium bg-yellow-500 hover:bg-yellow-400 text-indigo-900 font-semibold transition duration-300 ease-in-out"
              >
                Order Seat
              </Link>
              <Link
                to="/auth"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition duration-300 ease-in-out"
              >
                Login/SignUp
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-600 focus:outline-none transition duration-300 ease-in-out"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-indigo-800 shadow-lg">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition duration-300 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition duration-300 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/order-seat"
              className="block px-3 py-2 rounded-md text-base font-medium bg-yellow-500 hover:bg-yellow-400 text-indigo-900 font-semibold transition duration-300 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              Order Seat
            </Link>
            <Link
              to="/auth"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition duration-300 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              Login/SignUp
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
