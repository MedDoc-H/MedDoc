import React, { useEffect } from "react";
import bg from "../../../assets/signupBg.png";
import buttonIcon from "../../../assets/buttonIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth/AuthContext";

const UpdateAllergy = ({ handleInputChange, allergyData }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      // If not logged in, redirect to sign-in page
      navigate("/sign-in");
    }
  }, [isLoggedIn, navigate]);
  console.log(allergyData);
  return (
    <div
      className="flex flex-col z-0 w-[500px] h-[500px] my-[70px]  mx-auto  bg-no-repeat bg-center bg-cover text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="text-center text-[#3a3a3a] text-[15px] mt-[30px] mb-[18px]"></h1>
      <div className=" bg-white rounded-[20px] w-[400px] h-[400px] mx-auto ">
        <div className="mt-[0px] p-[50px]">
          <h1 className=" text-center text-[#3A3A3A] text-[16px] font-bold mb-[15px]">
            Update Your Allergy
          </h1>

          <label htmlFor="new_allergy" className="text-[13px]  text-[#3A3A3A] ">
            New Allergy
          </label>
          <br />
          <input
            type="text"
            placeholder="Title"
            id="new_allergy"
            value={allergyData.new_allergy}
            onChange={handleInputChange}
            className=" border-[1px] w-full outline-[3px] border-[#EE82EE]  text-[#808080] px-[15px]   rounded-[20px] h-[35px] mt-[5px] mb-[15px]"
          />

          <label htmlFor="outcome" className="text-[13px]  text-[#3A3A3A] ">
            Outcome
          </label>
          <br />
          <input
            type="text"
            placeholder="Title"
            id="outcome"
            value={allergyData.outcome}
            onChange={handleInputChange}
            className=" border-[1px] w-full outline-[3px] border-[#EE82EE]  text-[#808080] px-[15px]   rounded-[20px] h-[35px] mt-[5px] mb-[15px]"
          />

          <label htmlFor="severity" className="text-[13px]  text-[#3A3A3A] ">
            Severity
          </label>
          <br />
          <input
            type="text"
            placeholder="Title"
            id="severity"
            value={allergyData.severity}
            onChange={handleInputChange}
            className=" border-[1px] w-full outline-[3px] border-[#EE82EE]  text-[#808080] px-[15px]   rounded-[20px] h-[35px] mt-[5px] mb-[30px]"
          />

          <Link to="/health-report">
            <button className="flex mx-auto">
              <img src={buttonIcon} alt="" className="mr-2" />
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateAllergy;
