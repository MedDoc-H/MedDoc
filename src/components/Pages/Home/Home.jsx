import React from "react";
import { Link } from "react-router-dom";
import Landing from "../../../assets/landingImage.png";
import buttonIcon from '../../../assets/buttonIcon.svg';
const Home = () => {
  return (
    <div className="pl-[112px] flex mb-[165px] ">
      <div className="w-[60%] mt-[50px]">
        <h1 className=" font-bold text-8xl leading-[122.18%] w-[600px]">
          Take Control Of Your Health
        </h1>
        <div className="flex items-center">
          <hr className="w-[268px]" />
          <p className=" text-[20px] w-[303px] ml-[23px]">
            Securely manage and share your medical information in one place
          </p>
        </div>
        <div className="flex mt-[65px] justify-between w-[475px] items-center border pr-10  rounded-r-[20px]">
        <div className="w-[2%] bg-[#EE82EE] h-[61px]" ></div>
          <p className="font-bold text-[18px]  leading-[27.49px]">
            Start Your Health Journey
          </p>
          <Link to="/sign-up">
            <button className="flex items-center">
              <img src={buttonIcon} alt="" className="mr-2" />
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="w-[40%]">
      <div className="relative w-658 h-680 bg-[#EE82EE] right-20 rounded-b-[200px]">
      {/* <div className="absolute top-1/2 left-0 right-0 bg-white  z-[0] h-2 transform -translate-y-1/2"></div>
      <div className="absolute top-0 bottom-0 left-1/2 bg-white w-2 transform -translate-x-1/2"></div> */}
        <img className="items-center z-[1000]" src={Landing} alt="Landing Image" />
      </div>
      </div>
    </div>
  );
};

export default Home;
