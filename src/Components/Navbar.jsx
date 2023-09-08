import React from "react";
import { GoHome } from "react-icons/go";
import { FaUserLarge } from "react-icons/fa6";
const Navbar = () => {
  return (
    <header className="header_nav absolute top-0 left-0 py-[40px] px-[120px] flex items-center justify-between w-[100%]">
      <div className="logo text-white font-semibold flex items-center gap-2">
        Tippy <span className="text-[#5DC592]">Type</span>
      </div>
      <div className="menu flex gap-10 items-center">
        <a href="#" className="text-[#65706D] hover:text-[#869591]">
          Practice Mode
        </a>
        <a
          href="/"
          className="flex items-center justify-center gap-2 nav_home_btn text-[#5DC592]"
        >
          <GoHome size={20} color={"#5DC592"} />
          Home
        </a>
        <a
          href="#"
          className="account_detail_btn flex items-center justify-center text-[#65706D] "
        >
          <FaUserLarge className="user_icon" />
          Neek
        </a>
      </div>
    </header>
  );
};

export default Navbar;
