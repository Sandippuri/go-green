import React from "react";

const Header = () => {
  return (
    <nav className=" sticky top-0 bg-white shadow-sm flex justify-between items-center px-24 py-2">
      <div className="nav-left">
        <a href="/" className="text-xl font-medium">
          <span>Go</span>
          <span className=" text-green-500 ">Green</span>
          {/* <img src={logo} alt="logo" /> */}
        </a>
      </div>
      <div className="flex items-center gap-16">
        <ul className="flex gap-8">
          <li className="text-black hover:border-b hover:border-green-500 hover:text-green-500  cursor-pointer">
            Home
          </li>
          <li className="text-black hover:border-b hover:border-green-500 hover:text-green-500 cursor-pointer">
            Gallery
          </li>
          <li className="text-black hover:border-b hover:border-green-500 hover:text-green-500 cursor-pointer">
            Services
          </li>
          <li className="text-black hover:border-b hover:border-green-500 hover:text-green-500 cursor-pointer">
            About
          </li>
        </ul>
        <button className="button">Contact us</button>
      </div>
    </nav>
  );
};

export default Header;
