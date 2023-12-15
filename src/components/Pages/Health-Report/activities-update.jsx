import React, { useEffect } from "react";
import bg from "../../../assets/signupBg.png";
import buttonIcon from "../../../assets/buttonIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth/AuthContext";

const UpdateActivity = ({activitiesData, handleActivitiesInputChange }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      // If not logged in, redirect to sign-in page
      navigate('/sign-in');
    }
  }, [isLoggedIn, navigate]);
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
        <form >
          <label htmlFor="activity" className="text-[13px]  text-[#3A3A3A] ">
            Activity
          </label>
          <br />
          <input
            type="text"
            placeholder="Activity"
            id="activity"
            value={activitiesData.activity}
            onChange={handleActivitiesInputChange}
            className=" border-[1px] w-full outline-[3px] border-[#EE82EE]  text-[#808080] px-[15px]    rounded-[20px] h-[35px] mt-[5px] mb-[15px]"
          />

          <label htmlFor="type" className="text-[13px]  text-[#3A3A3A] ">
            Type of Activity
          </label>
          <br />
          <input
            type="text"
            placeholder="Type of Activity"
            id="type"
            value={activitiesData.type}
            onChange={handleActivitiesInputChange}
            className=" border-[1px] w-full outline-[3px] border-[#EE82EE]  text-[#808080] px-[15px]    rounded-[20px] h-[35px] mt-[5px] mb-[15px]"
          />

          <label htmlFor="date" className="text-[13px]  text-[#3A3A3A] ">
            Date of Activity
          </label>
          <br />
          <input
            type="date"
            placeholder="Date of Activity"
            id="date"
            value={activitiesData.date}
            onChange={handleActivitiesInputChange}
            className=" border-[1px] w-full outline-[3px] border-[#EE82EE]  text-[#808080] px-[15px]    rounded-[20px] h-[35px] mt-[5px] mb-[30px]"
          />

          <label htmlFor="medication" className="text-[13px]  text-[#3A3A3A] ">
            Medication Prescribed (if any)
          </label>
          <br />
          <input
            type="text"
            placeholder="Medication Prescribed (if any)"
            id="medication"
            value={activitiesData.medication}
            onChange={handleActivitiesInputChange}
            className=" border-[1px] w-full outline-[3px] border-[#EE82EE]  text-[#808080] px-[15px]   rounded-[20px] h-[35px] mt-[5px] mb-[30px]"
          />


          <label htmlFor="specify" className="text-[13px]  text-[#3A3A3A] ">
            Specify (Liquid/Tablet/Dose/Rate)
          </label>
          <br />
          <input
            type="text"
            placeholder="Specify"
            id="specify"
            value={activitiesData.specify}
            onChange={handleActivitiesInputChange}
            className=" border-[1px] w-full outline-[3px] border-[#EE82EE]  text-[#808080] px-[15px]   rounded-[20px] h-[35px] mt-[5px] mb-[30px]"
          />


          <label htmlFor="provider" className="text-[13px]  text-[#3A3A3A] ">
            Name of Provider
          </label>
          <br />
          <input
            type="text"
            placeholder="Name of Provider"
            id="provider"
            value={activitiesData.provider}
            onChange={handleActivitiesInputChange}
            className=" border-[1px] w-full outline-[3px] border-[#EE82EE]  text-[#808080] px-[15px]    rounded-[20px] h-[35px] mt-[5px] mb-[30px]"
          />


          <label htmlFor="location" className="text-[13px]  text-[#3A3A3A] ">
            Location
          </label>
          <br />
          <input
            type="text"
            placeholder="Location"
            id="location"
            value={activitiesData.location}
            onChange={handleActivitiesInputChange}
            className=" border-[1px] w-full outline-[3px] border-[#EE82EE]  text-[#808080] px-[15px]    rounded-[20px] h-[35px] mt-[5px] mb-[30px]"
          />

          <Link to = "/health-report">
          <button className="flex mx-auto">
            <img src={buttonIcon} alt="" className="mr-2" />
            Update
          </button>
          </Link>
        </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateActivity;
