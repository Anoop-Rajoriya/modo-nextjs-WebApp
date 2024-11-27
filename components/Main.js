import React from "react";

function Main(props) {
  const { children } = props;
  return <main className="flex-1 py-4 sm:py-5 lg:py-6 ">{children}</main>;
}

export default Main;
