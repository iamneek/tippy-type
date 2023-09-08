import React from "react";
import { FaRedo } from "react-icons/fa";
const Restart = () => {
  return (
    <div className="restart flex items-center justify-center gap-3 text-[#eee] cursor-pointer">
      <FaRedo color="#5DC592" /> Start Over
    </div>
  );
};

export default Restart;
