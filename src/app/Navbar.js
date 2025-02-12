"use client";
import { React, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggelNavBar = () => {
    setIsClick(!isClick);
    console.log(isClick);
  };
  return (
    <>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg-px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flesx-shrink-0">
                <Link href="/" className="text-white">
                  Group Logo
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Home
                </Link>
                <Link
                  href="/group-about"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  About
                </Link>
                <Link
                  href="/group-contact"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Conatct
                </Link>
                <Link
                  href="/training"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Training
                </Link>
                <Link
                  href="/investment"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Investment
                </Link>
                <Link
                  href="/study"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Higher Study
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white  hover:text-white focus:outline-none focus:ring-2
                  focus:ring-inset focus:ring-white"
                onClick={toggelNavBar}
              >
                {isClick ? (
                  <svg
                    className={`w-6 h-6`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className={`w-6 h-6`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-2 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Home
              </Link>
              <Link
                href="/group-about"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                About
              </Link>
              <Link
                href="/group-contact"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Conatct
              </Link>
              <Link
                href="/training"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Training
              </Link>
              <Link
                href="/investment"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Investment
              </Link>
              <Link
                href="/study"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Higher Study
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
