import React from "react";
import bg from "../../assets/signupBg.png";

const SignUp = () => {
  return (
    <>
      <div
        className="flex flex-col  z-0 w-[625px] h-[646px] my-[107px]  mx-auto  bg-no-repeat bg-center bg-cover text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-center mt-[30px]">Registration</h1>
        <div className="text-center bg-white w-[490px] h-[502px] mx-auto">
          <h1 className="text-[#3A3A3A]">Don't Have A DID?</h1>
          <h2 className="text-[#3A3A3A] ">Already have a DID? <span className=" underline text[#5B5BF3]">Sign in</span></h2>
        </div>
      </div>
    </>
  );
};

export default SignUp;
