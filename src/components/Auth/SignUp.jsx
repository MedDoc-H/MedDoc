import { useState, useEffect } from "react";
import bg from "../../assets/signupBg.png";
import buttonIcon from "../../assets/buttonIcon.svg";
import { Link } from "react-router-dom";

const SignUp = ({copyDid, handleSignUp}) => {
  return (
    <>
      <div
        className="flex flex-col z-0 w-[625px] h-[646px] my-[107px]  mx-auto  bg-no-repeat bg-center bg-cover text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-center text-[#3a3a3a] text-[20px] mt-[30px] mb-[18px]">
          Registration
        </h1>
        <div className="text-center  bg-white rounded-[20px] w-[490px] h-[502px] mx-auto ">
          <div className="mt-[159px]">
            <h1 className="text-[#3A3A3A] text-[20px] font-bold">
              Don't Have A DID?
            </h1>
            <button
              onClick={handleSignUp}
              className="flex mx-auto mt-[50px] mb-[30.9px]"
            >
              <img src={buttonIcon} alt="" className="mr-2" />
              Generate
            </button>
            <h1
              className="text-[#3A3A3A] text-[20px] mb-[20px] font-bold"
              onClick={copyDid}
            >
              Already generated, click{""}
              <span className="underline text-[#5B5BF3] cursor-pointer">
                here
              </span>{" "}
              to Copy
            </h1>
            <h2 className="text-[#3A3A3A]">
              Already have a DID?{" "}
              <Link to="/sign-in" className="underline text-[#5B5BF3]">
                Sign in
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
