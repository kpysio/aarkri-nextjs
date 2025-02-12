import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg-px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flesx-shrink-0">
                <a href="/" className="text-white">
                  Study Logo
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href="/study/courses"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  List of courses
                </Link>
                <Link
                  href="/study/study-about"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  About
                </Link>

                <Link
                  href="/study/study-contact"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Contact
                </Link>
                <a
                  href="/study/study-why"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Why study with us
                </a>
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Aarkri Group
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
