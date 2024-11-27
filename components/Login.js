import Input from "./Input";
import Button from "./Button";
import { Fugaz_One } from "next/font/google";

const fugaz = Fugaz_One({
  subsets: ["latin"], // Specify subsets as needed
  weight: ["400"], // Specify weights as needed
});

function Login() {
  return (
    <div>
      <h1
        className={`text-4xl sm:text-5xl lg:text-6xl font-bold capitalize text-center mb-4 text-black ${fugaz.className}`}
      >
        log in / register
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl text-center capitalize">your one step away</p>
      <div className="max-w-[400px] mx-auto flex flex-col">
        <Input label="email" type="email" className="text-[#3d3bf3] m-2 " />
        <Input
          label="password"
          type="password"
          className="text-[#3d3bf3] m-2 "
        />
        <Button text="submit" fill={true} />
        <p className="text-sm sm:text-base font-bold text-center my-2 text-[#3d3bf3]">
          dont have an account?
          <span className="ml-1 text-[#ff2929] underline uppercase cursor-pointer">
            signup
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
