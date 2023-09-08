import React from "react";
import { BiSolidTime } from "react-icons/bi";
import { FaFont, FaWrench, FaTools } from "react-icons/fa";
import { BsQuote } from "react-icons/bs";
const Optnav = () => {
  return (
    <div className="optnav absolute flex items-center justify-around text-[#65706D]">
      <div className="type_option flex gap-6 items-center">
        <div className="time_option optionsandicons cursor-pointer active">
          <BiSolidTime />
          time
        </div>
        <div className="words_option optionsandicons cursor-pointer">
          <FaFont />
          words
        </div>
        <div className="quote_option optionsandicons cursor-pointer">
          <BsQuote size={20} />
          quote
        </div>
        <div className="custom_option optionsandicons cursor-pointer">
          <FaWrench />
          custom
        </div>
      </div>
      <div className="separator"></div>
      <div className="time_word_count_option flex gap-5 items-center ">
        <div className="15secopt cursor-pointer optionsandicons">15</div>
        <div className="30secopt cursor-pointer optionsandicons active">30</div>
        <div className="60secopt cursor-pointer optionsandicons">60</div>
        <div className="120secopt cursor-pointer optionsandicons">120</div>
        <div className="customsecopt cursor-pointer optionsandicons">
          <FaTools />
        </div>
      </div>
    </div>
  );
};

export default Optnav;
