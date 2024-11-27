import { Fugaz_One } from "next/font/google";
import React from "react";
import Calender from "./Calender";

const fugaz = Fugaz_One({
  subsets: ["latin"], // Specify subsets as needed
  weight: ["400"], // Specify weights as needed
});

function Dashboard() {
  const statuses = {
    num_days: 14,
    time_remaining: "13:14:26",
    date: new Date().toDateString(),
  };

  const moods = {
    "&*@#$": "😭",
    Sad: "🥲",
    Existing: "😶",
    Good: "😊",
    Elated: "😍",
  };

  return (
    <div className="flex flex-col flex-1 gap-3 sm:gap-4">
      <div className="grid grid-col-1 sm:grid-cols-3 bg-[#3d3bf3] rounded-lg">
        {Object.keys(statuses).map((status, statusIndex) => {
          return (
            <div
              key={statusIndex}
              className=" flex flex-col text-base sm:text-lg p-3 text-[#ebeaff]"
            >
              <p className="capitalize">{status}</p>
              <p className={`font-bold capitalize text-lg sm:text-xl ${fugaz}`}>
                {statuses[status]}
              </p>
            </div>
          );
        })}
      </div>
      <h1
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center my-3 ${fugaz.className}`}
      >
        how do you <span className="text-[#3d3bf3]">feel</span> today?
      </h1>
      <div className="flex items-stretch flex-wrap gap-4">
        {Object.keys(moods).map((mood, moodindex) => {
          return (
            <button
              key={moodindex}
              className={`${fugaz.className} blueShadow border border-[#3d3bf3] rounded-xl text-center flex flex-col items-center gap-2 flex-1 p-4 px-5`}
            >
              <p className="text-4xl sm:text-5xl md:text-6xl">{moods[mood]}</p>
              <p className="text-[#3d3bf3] text-xs sm:text-sm md:text-base">
                {mood}
              </p>
            </button>
          );
        })}
      </div>
      <Calender />
    </div>
  );
}

export default Dashboard;
