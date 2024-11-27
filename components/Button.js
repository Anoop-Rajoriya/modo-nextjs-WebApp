import { Fugaz_One } from "next/font/google";
import React from "react";

const fugaz = Fugaz_One({
  subsets: ["latin"], // Specify subsets as needed
  weight: ["400"], // Specify weights as needed
});

function Button(props) {
  const { text, fill, className } = props;

  return (
    <button
      className={
        ` m-2 text-lg sm:text-xl lg:text-2xl capitalize font-bold px-8 py-3 rounded-full border-2 border-[#3d3bf3] ${className} ${fugaz.className} ` +
        (fill
          ? " text-[#ebeaff] bg-[#3d3bf3] active:border-[#9694ff] active:bg-[#9694ff] "
          : " text-[#3d3bf3] active:border-[#9694ff] active:text-[#9694ff] ")
      }
    >
      {text}
    </button>
  );
}

export default Button;
