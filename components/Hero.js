import React from "react";
import Button from "./Button";
import Calender from "./Calender";
import { Fugaz_One } from "next/font/google";

const fugaz = Fugaz_One({
  subsets: ["latin"], // Specify subsets as needed
  weight: ["400"], // Specify weights as needed
});

function Hero() {
  return (
    <>
      <h1
        className={`text-4xl sm:text-5xl lg:text-6xl p-2 sm:px-4 lg:px-5 pt-4 font-bold capitalize text-center text-[#3d3bf3] ${fugaz.className}`}
      >
        <span className=" text-[#ff2929]">modo</span> helps you to tracke your{" "}
        <span className=" text-[#ff2929]">daily</span> mood!
      </h1>
      <p className="font-bold capitalize text-xl text-black text-center max-w-[500px] w-full mx-auto pt-2 pb-6">
        create your mood record and see how you feel on every day of every year.
      </p>
      <div className="flex items-center justify-center my-2">
        <Button text="signUp" />
        <Button text="login" fill={true} />
      </div>
      <Calender />
    </>
  );
}

export default Hero;
