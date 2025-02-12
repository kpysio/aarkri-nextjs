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
                <Link href="/" className="text-white">
                  Investment Logo
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href="/investment/portfolio"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Our Portfoilio
                </Link>
                <Link
                  href="/investment/invest-about"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  About
                </Link>

                <Link
                  href="/investment/invest-contact"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Contact
                </Link>
                <Link
                  href="/investment/invest-why"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Why invest with us
                </Link>
                <Link
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Aarkri Group
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
