import profileE from "../../../assets/profileE.svg";
import dashboard from "../../../assets/dashboard.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import yearlyChart from "../../../assets/yearlyChart.svg";
import "./Dashboard.css";

const Dashboard = ({ formData }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showOverview, setShowOverview] = useState(true);

  const handleNotification = () => {
    setShowNotification(true);
    setShowOverview(false);
  };

  const handleOverview = () => {
    setShowOverview(true);
    setShowNotification(false);
  };

  const birthDate = formData.birthday;
  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };
  const age = calculateAge(birthDate);

  const seperateString = (string) => {
    const newString = string.split(",");
    return newString;
  };
  const Height = seperateString(formData.heightWeight)[0];
  const Weight = seperateString(formData.heightWeight)[1];

  return (
    <div className="flex">
      <div className="w-[351px] h-[827px] my-[20px] px-[15px]  bg-white text-[black] rounded-tl-none rounded-bl-none rounded-br-lg rounded-tr-lg">
        <h1 className="pt-[50px]">Dashboard</h1>
        <div
          onClick={handleOverview}
          className="flex   font-bold text-[3a3a3a] text-[16px] mt-[50px] gap-[20px]"
        >
          <img src="/overview.svg" alt="overview" />
          <p>Overview</p>
        </div>
        <div
          onClick={handleNotification}
          className="flex  font-bold text-[3a3a3a] text-[16px] mt-[50px] gap-[20px]"
        >
          <img src="/profile.svg" alt="report" />
          <p>Notification</p>
        </div>

        <div className="flex  font-bold text-[3a3a3a] text-[16px] mt-[50px] gap-[20px]">
          <img src="/home.svg" alt="back to home" />
          <p>Back to home</p>
        </div>
        <Link to="/">
          <div className="flex font-bold text-[3a3a3a] text-[16px] mt-[50px] gap-[20px]">
            <img src="/signout.svg" alt="sign out" />
            <p>Sign Out</p>
          </div>
        </Link>
        <div className="mt-[50px]">
          <hr />
          <img className="my-[32px]" src={dashboard} alt="dashboard" />
        </div>
      </div>

      {showNotification && (
        <div className="px-[40px] py-[40px] w-[970px] h-[820px] rounded-[20px] bg-[#ee82ee] mx-[auto] my-[auto] ">
          <p className="text-[white] font-extrabold text-[20px]">
            Notification
          </p>
          <p className="text-white text-[16px] my-[20px]">New Message</p>
          <div className="w-[806px] h-[262px] px-[40px] pt-[14px] pb-[40px] bg-[white] rounded-[20px] mx-[auto]  mb-[40px] ">
            <div className="flex items-center justify-between ">
              <p className="text-[16px] font-bold ">Message 1 day ago</p>
              <p className="text-[30px]">x</p>
            </div>
            <p className="text-center mt-[52px] mb-[40px] font-medium text-[20px] ">
              You have been invited by Daniel Holmes to view and edit his
              document.{" "}
            </p>
            <div className="flex border-[1px] rounded-[20px] w-max border-[#5B5BF3] ">
              <p className="text-[#5B5BF3] font-bold border-r-[1px] px-[25px] py-[17px] border-[#5B5BF3] ">
                Accept
              </p>
              <p className="py-[17px] text-[#5B5BF3] font-bold px-[25px]">
                Decline
              </p>
            </div>
          </div>
          <hr />
          <p className="text-white text-[16px] my-[20px]">Older Message</p>
          <div className="w-[806px] h-[262px] px-[40px] pt-[14px] pb-[40px] bg-[white] rounded-[20px] mx-[auto]  mb-[40px] ">
            <div className="flex items-center justify-between ">
              <p className="text-[16px] font-bold ">Message 4 day ago</p>
              <p className="text-[30px]">x</p>
            </div>
            <p className="text-center mt-[52px] mb-[40px] font-medium text-[20px] ">
              You have been invited by Daniel Holmes to view and edit his
              document.{" "}
            </p>
            <div className="flex border-[1px] rounded-[20px] w-max border-[#5B5BF3] ">
              <p className="text-[#5B5BF3] font-bold border-r-[1px] px-[25px] py-[17px] border-[#5B5BF3] ">
                Accept
              </p>
              <p className="py-[17px] text-[#5B5BF3] font-bold px-[25px]">
                Decline
              </p>
            </div>
          </div>
        </div>
      )}
      {showOverview && (
        <>
          <div className="mx-[25px]">
            <div className="flex">
              <div className=" bg-[white] mx-[auto] w-[337px] h-[304px] rounded-[20px] mb-[41px] mt-[111px]">
                <img
                  className="mx-[auto] my-[20px]"
                  src={profileE}
                  alt="profile image"
                />
                <p className="font-bold text-[20px] text-center text-[3A3A3A] ">
                  {formData.fName || "John Doe"}
                </p>
                <div className="flex justify-between px-[80px] w-[337px] ">
                  <div>
                    <p className="text-center">{age || 25}</p>
                    <p>Years</p>
                  </div>
                  <div>
                    <p className="text-center">
                      {formData.bloodGroup || "N/A"}
                    </p>
                    <p>Blood</p>
                  </div>
                </div>
                <div className="flex justify-between px-[80px] w-[337px] mt-[10px]">
                  <div>
                    <p className="text-center">
                      {Height ? `${Height} cm` : "N/A"}
                    </p>
                    <p>Height</p>
                  </div>
                  <div>
                    <p className="text-center">
                      {Weight ? `${Weight} Kg` : "N/A"}
                    </p>
                    <p>Weight</p>
                  </div>
                </div>
              </div>
              <div className="mt-[111px] ml-[60px]">
                <div className="bg-[white] w-[254px] rounded-[20px] h-[138px] mb-[30px]">
                  <div className="flex justify-between p-[30px]">
                    <p>Your Activity</p>
                    <p>Weekly</p>
                  </div>
                </div>
                <div className="bg-[white] w-[254px] rounded-[20px] h-[138px]">
                  <p>General Health</p>
                </div>
              </div>
            </div>
            <div className="bg-[white] h-[391px] rounded-[20px] w-[629px] ">
              <div className="flex justify-between p-[30px]">
                <p>Your Activity</p>
                <p>Yearly</p>
              </div>
              <div className="">
                <img src={yearlyChart} alt="yearly chart" />
              </div>
            </div>
          </div>
          <div className="w-[398px] h-[828px] p-[20px] rounded-[20px] bg-[white] mr-[20px] mt-[19px]">
            <p className="text-center font-bold text-[16px]">
              Doctor's Appointment
            </p>
            <div className="calendar-container">
              <Calendar onChange={setDate} value={date} />
            </div>
            <p className="text-center">
              <span className="bold">Selected Date:</span> {date.toDateString()}
            </p>
            <div className="rounded-[20px] w-[292px] h-[447px]  bg-[white] mx-[auto] ">
              <div className="">
                <p className="underline text-[#0000FF] text-end">Edit</p>
                <div className="text-white flex justify-between items-center bg-[blue] pt-[10px] pb-[10px] rounded-[20px] px-[15px]">
                  <div className="justify-between ">
                    <p className="text-white text-[20px] mb-[10px] font-extrabold ">
                      Dentist
                    </p>
                    <p className="text-white text-[16px]">Dr. Tom Kin </p>
                  </div>
                  <div>
                    <p className="text-[#3a3a3a] text-[16px] px-[8px] my-[10px] py-[14px] bg-[white] font-semibold">
                      10am
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="underline text-[#0000FF] text-end">Edit</p>
                <div className="text-white flex justify-between items-center bg-[#FC7373] pt-[10px] pb-[10px] rounded-[20px] px-[15px]">
                  <div className="justify-between ">
                    <p className="text-white text-[20px] mb-[10px] font-extrabold ">
                      Cardiologist
                    </p>
                    <p className="text-white text-[16px]">Dr.Gates Pir </p>
                  </div>
                  <div>
                    <p className="text-[#3a3a3a] text-[16px] px-[8px] my-[10px] py-[14px] bg-[white] font-semibold">
                      01pm{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="underline text-[blue] text-end">Edit</p>
                <div className="text-white flex justify-between items-center bg-[#EE82EE] pt-[10px] pb-[10px] rounded-[20px] px-[15px]">
                  <div className="justify-between ">
                    <p className="text-white text-[20px] mb-[10px] font-extrabold ">
                      Optician
                    </p>
                    <p className="text-white text-[16px]">Dr. Salome </p>
                  </div>
                  <div>
                    <p className="text-[#3a3a3a] text-[16px] px-[8px] my-[10px] py-[14px] bg-[white] font-semibold">
                      03pm{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
