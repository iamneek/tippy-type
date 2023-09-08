import React from "react";

const Timer = () => {
  return (
    <div className="timer flex flex-col gap-2 text-center">
      <div className="timer_text text-[#f1f1f1]">TIMER</div>
      <div className="time_count text-6xl text-[#454D4B]">00</div>
    </div>
  );
};

export default Timer;
