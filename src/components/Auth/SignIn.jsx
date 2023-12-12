import React, { useState } from "react";
import bg from "../../assets/signupBg.png";
import buttonIcon from "../../assets/buttonIcon.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";

const SignIn = ({handleInputChange, did}) => {

  const {login} = useAuth();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const myDid = localStorage.getItem("did");
    if (myDid && myDid === did) {
      login();
      navigate("/profile");
    }
    else{
      alert("Invalid DID");
      
    }
  };

  return (
    <>
      <div
        className="flex flex-col  z-0 w-[625px] h-[646px] my-[107px]  mx-auto  bg-no-repeat bg-center bg-cover text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-center text-[20px] mt-[30px] mb-[18px]">Sign In</h1>
        <div className="bg-white rounded-[20px] w-[490px] h-[502px] mx-auto px-[40px]">
          <div className="mt-[159px]">
            <form onSubmit={handleLogin}>
              <label htmlFor="did" className="text-[18px] text-[#3A3A3A] ">
                Enter Your Did
              </label>
              <br />
              <input
                type="text"
                placeholder="Your DiD"
                id="did"
                className=" border-[1px] w-full outline-none  text-[#808080] px-[20px] border-[#E0E0E0]  bg-[#F6AEF6] rounded-[20px] h-[43px] mt-[10px] mb-[30px]"
                value={did}
                onFocus={() => setNoteValue("")}
                onChange={handleInputChange}
              />
              <button  className="flex mx-auto">
                <img src={buttonIcon} alt="" className="mr-2" />
                Sign In
              </button>
              <p className="text-[#3a3a3a] text-center mt-2">Don't have an account?  <Link to="/sign-up" className="underline text-[#5B5BF3]">
                Sign Up
              </Link></p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
