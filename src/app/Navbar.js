import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg-px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flesx-shrink-0">
                <a href="/" className="text-white">
                  Logo
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Home
                </a>
                <a
                  href="/group-about"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  About
                </a>
                <a
                  href="/group-contact"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Conatct
                </a>
                <a
                  href="/training"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Training
                </a>
                <a
                  href="/investment"
                  className="text-white hover:bg-white hover:bg-black rounded-lg p-2"
                >
                  Investment
                </a>
                <a
                  href="/study"
                  className="text-white hover:bg-white hover:bg-black rounded-lg p-2"
                >
                  Higher Study
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
