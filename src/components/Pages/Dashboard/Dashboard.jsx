import profileE from "../../../assets/profileE.svg";
import dashboard from "../../../assets/dashboard.svg";
import { Link } from "react-router-dom";
const Dashboard = ({ formData }) => {
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
      <div className="w-[391px] h-[827px] my-[20px] left--3 pl-[43px]  bg-white text-[black] rounded-tl-none rounded-bl-none rounded-br-lg rounded-tr-lg">
        <h1 className="pt-[50px]">Dashboard</h1>
        <div className="flex   font-bold text-[3a3a3a] text-[16px] mt-[50px] gap-[20px]">
          <img src="/overview.svg" alt="overview" />
          <p>Overview</p>
        </div>
        <div className="flex  font-bold text-[3a3a3a] text-[16px] mt-[50px] gap-[20px]">
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
      <div className="mx-[65px]">
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
                <p className="text-center">{formData.bloodGroup || "N/A"}</p>
                <p>Blood</p>
              </div>
            </div>
            <div className="flex justify-between px-[80px] w-[337px] mt-[10px]">
              <div>
                <p className="text-center">{Height ? `${Height} cm` : "N/A"}</p>
                <p>Height</p>
              </div>
              <div>
                <p className="text-center">{Weight ? `${Weight} Kg` : "N/A"}</p>
                <p>Weight</p>
              </div>
            </div>
          </div>
          <div className="mt-[111px] ml-[60px]">
            <div className="bg-[white] w-[254px] rounded-[20px] h-[138px] mb-[30px]"></div>
            <div className="bg-[white] w-[254px] rounded-[20px] h-[138px]"></div>
          </div>
        </div>
        <div className="bg-[white] h-[391px] rounded-[20px] w-[629px] ">
          <div className="flex justify-between p-[30px]">
            <p>Your Activity</p>
            <p>Yearly</p>
          </div>
        </div>
      </div>
      <div className="w-[398px] h-[828px] rounded-[20px] bg-[white] ml-[30px] mt-[19px]"></div>
    </div>
  );
};

export default Dashboard;
