import React from "react";
import bg from "../../../assets/signupBg.png";
import buttonIcon from "../../../assets/buttonIcon.svg";
import { Link } from "react-router-dom";

const UpdateActivity = () => {
  return (
    <div
      className="flex flex-col z-0 w-[600px] h-[830px] my-[70px]  mx-auto  bg-no-repeat bg-center bg-cover text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="text-center text-[#3a3a3a] text-[15px] mt-[30px] mb-[18px]"></h1>
      <div className=" bg-white rounded-[20px] w-[450px] h-[700px] mx-auto ">
        <div className="mt-[0px] p-[50px]">
          <h1 className=" text-center text-[#3A3A3A] text-[16px] font-bold mb-[15px]">
            Update Your Activity
          </h1>
        <form action="">
          <label htmlFor="new_allergy" className="text-[13px]  text-[#3A3A3A] ">
            Activity
          </label>
          <br />
          <input
            type="text"
            placeholder="Activity"
            id="did"
            className=" border-[1px] w-full outline-[3px] border-[#EE82EE]  text-[#808080] px-[15px] border-[#E0E0E0]   rounded-[20px] h-[35px] mt-[5px] mb-[15px]"
          />

          <label htmlFor="outcome" className="text-[13px]  text-[#3A3A3A] ">
            Type of Activity
          </label>
          <br />
          <input
            type="text"
            placeholder="Type of Activity"
            id="did"
            className=" border-[1px] w-full outline-[3px] border-[#EE82EE]  text-[#808080] px-[15px] border-[#E0E0E0]   rounded-[20px] h-[35px] mt-[5px] mb-[15px]"
          />

          <label htmlFor="severity" className="text-[13px]  text-[#3A3A3A] ">
            Date of Activity
          </label>
          <br />
          <input
            type="date"
            placeholder="Date of Activity"
            id="did"
            className=" border-[1px] w-full outline-[3px] border-[#EE82EE]  text-[#808080] px-[15px] border-[#E0E0E0]   rounded-[20px] h-[35px] mt-[5px] mb-[30px]"
          />

          <label htmlFor="severity" className="text-[13px]  text-[#3A3A3A] ">
            Medication Prescribed (if any)
          </label>
          <br />
          <input
            type="text"
            placeholder="Medication Prescribed (if any)"
            id="did"
            className=" border-[1px] w-full outline-[3px] border-[#EE82EE]  text-[#808080] px-[15px] border-[#E0E0E0]   rounded-[20px] h-[35px] mt-[5px] mb-[30px]"
          />


          <label htmlFor="severity" className="text-[13px]  text-[#3A3A3A] ">
            Specify (Liquid/Tablet/Dose/Rate)
          </label>
          <br />
          <input
            type="text"
            placeholder="Specify"
            id="did"
            className=" border-[1px] w-full outline-[3px] border-[#EE82EE]  text-[#808080] px-[15px] border-[#E0E0E0]   rounded-[20px] h-[35px] mt-[5px] mb-[30px]"
          />


          <label htmlFor="severity" className="text-[13px]  text-[#3A3A3A] ">
            Name of Provider
          </label>
          <br />
          <input
            type="text"
            placeholder="Name of Provider"
            id="did"
            className=" border-[1px] w-full outline-[3px] border-[#EE82EE]  text-[#808080] px-[15px] border-[#E0E0E0]   rounded-[20px] h-[35px] mt-[5px] mb-[30px]"
          />


          <label htmlFor="severity" className="text-[13px]  text-[#3A3A3A] ">
            Location
          </label>
          <br />
          <input
            type="text"
            placeholder="Location"
            id="did"
            className=" border-[1px] w-full outline-[3px] border-[#EE82EE]  text-[#808080] px-[15px] border-[#E0E0E0]   rounded-[20px] h-[35px] mt-[5px] mb-[30px]"
          />


          <button className="flex mx-auto">
            <img src={buttonIcon} alt="" className="mr-2" />
            Update
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateActivity;
