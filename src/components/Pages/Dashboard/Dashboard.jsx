import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="w-[331px] h-[827px] my-[22px] left--3 pl-[43px]  bg-white text-[black] rounded-tl-none rounded-bl-none rounded-br-lg rounded-tr-lg">
        <h1 className="pt-[50px]">Dashboard</h1>
        <div className="flex   font-bold text-[3a3a3a] text-[16px] mt-[70px] gap-[20px]">
          <img src="/overview.svg" alt="overview" />
          <p>Overview</p>
        </div>
        <div className="flex  font-bold text-[3a3a3a] text-[16px] mt-[70px] gap-[20px]">
          <img src="/profile.svg" alt="report" />
          <p>profile</p>
        </div>
        <div className="flex  font-bold text-[3a3a3a] text-[16px] mt-[70px] gap-[20px]">
          <img src="/report.svg" alt="report" />
          <p>report</p>
        </div>
        <div className="flex  font-bold text-[3a3a3a] text-[16px] mt-[70px] gap-[20px]">
          <img src="/home.svg" alt="back to home" />
          <p>Back to home</p>
        </div>
        <div className="flex font-bold text-[3a3a3a] text-[16px] mt-[70px] gap-[20px]">
          <img src="/signout.svg" alt="sign out" />
          <p>Sign Out</p>
        </div>
      </div>
      <div className="gap-[50px]">
        <div>
          <div></div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
      <div></div>
    </>
  );
};

export default Dashboard;
