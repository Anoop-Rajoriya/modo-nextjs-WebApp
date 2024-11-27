import React from "react";

function Input(props) {
  const { label, type, className } = props;
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="text-black text-sm sm:text-base ml-4 uppercase font-bold">{label}</label>
      <input type={type} placeholder={label} className="outline-none border-2 border-[#3d3bf3] rounded-xl font-bold px-3 sm:px-4 py-2 text-xl sm:text-2xl lg:text-3xl capitalize" />
    </div>
  );
}

export default Input;
