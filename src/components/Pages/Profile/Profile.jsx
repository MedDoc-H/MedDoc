import { React, useEffect } from "react";
import buttonIcon from "../../../assets/buttonIcon.svg";
import "./profile.css";
import { Link, useNavigate } from "react-router-dom";
import Profileimg from "../../../assets/profile.svg";
import { useAuth } from "../../Auth/AuthContext";

const Profile = ({formData, handleInputChange}) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      // If not logged in, redirect to sign-in page
      navigate('/sign-in');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // create a json for formData
    console.log(formData);
    navigate("/dashboard");
  };

  return (
    <>
      <div className="w-[90%] h-[1075px] bg-[white] mx-[auto] my-[17px] rounded-[20px] flex p-[56px]">
        <div className="w-[20%] mx-[auto] content-center items-center mt-[57px]">
          <img src={Profileimg} alt="profile img" />
          <p className=" text-center mr-[34px] mt-[10px]">Insert photos</p>
        </div>
        <div className="w-[100%] mr-[160px] ml-[34px]">
          <h1 className="text-[#3A3A3A] text-[7xl] text-[30px]">Profile</h1>
          <p className="underline my-[13px]">Update profile</p>
          <form onSubmit={handleSubmit}>
            <table className="w-[100%]">
              <tbody className="">
                <tr className="space-x-4">
                  <td>
                    <label htmlFor="fName">First Name</label>
                    <br />
                    <input
                      className="p-[14px] text-[#3A3A3A]"
                      type="text"
                      id="fName"
                      value={formData.fName}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <label htmlFor="providerName">Name of Provider</label>{" "}
                    <br />
                    <input
                      className="p-[14px] text-[#3A3A3A]"
                      type="text"
                      id="providerName"
                      value={formData.providerName}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr className="space-x-4">
                  <td>
                    <label htmlFor="lName">Last Name</label>
                    <br />
                    <input
                      className="p-[14px] text-[#3A3A3A]"
                      type="age"
                      id="lName"
                      value={formData.lName}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <label htmlFor="bloodGroup">Blood group</label> <br />
                    <input
                      className="p-[14px] text-[#3A3A3A]"
                      type="text"
                      id="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr className="space-x-4">
                  <td>
                    <label htmlFor="gender">Gender</label>
                    <br />
                    <input
                      className="p-[14px] text-[#3A3A3A]"
                      type="text"
                      id="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <label htmlFor="heightWeight">Height, weight</label>
                    <br />
                    <input
                      className="p-[14px] text-[#3A3A3A]"
                      type="text"
                      id="heightWeight"
                      value={formData.heightWeight}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr className="space-x-4">
                  <td>
                    <label htmlFor="birthday">Birthday</label>
                    <br />
                    <input
                      className="p-[14px] text-[#3A3A3A]"
                      type="date"
                      id="birthday"
                      value={formData.birthday}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <label htmlFor="nextOfKin">Next of Kin</label>
                    <br />
                    <input
                      className="p-[14px] text-[#3A3A3A]"
                      type="text"
                      id="nextOfKin"
                      value={formData.nextOfKin}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr className="space-x-4">
                  <td>
                    <label htmlFor="address">Address</label>
                    <br />
                    <input
                      className="p-[14px] text-[#3A3A3A]"
                      type="text"
                      id="address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <label htmlFor="fNameK">First Name of Kin</label>
                    <br />
                    <input
                      className="p-[14px] text-[#3A3A3A]"
                      type="text"
                      id="fNameK"
                      value={formData.fNameK}
                      onChange={handleInputChange}
                    />
                  </td>
                  
                </tr>
                <tr className="space-x-4">
                <td>
                    <label htmlFor="maritalStatus">Marital Status</label>
                    <br />
                    <input
                      className="p-[14px] text-[#3A3A3A]"
                      type="text"
                      id="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <label htmlFor="lNameK">Last Name of Kin</label>
                    <br />
                    <input
                      className="p-[14px] text-[#3A3A3A]"
                      type="age"
                      id="lNameK"
                      value={formData.lNameK}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr className="space-x-4">
                
                <td>
                    <label htmlFor="lSpoken">language Spoken</label>
                    <br />
                    <input
                      className="p-[14px] text-[#3A3A3A]"
                      type="text"
                      id="lSpoken"
                      value={formData.lSpoken}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <label htmlFor="address">Address</label>
                    <br />
                    <input
                      className="p-[14px] text-[#3A3A3A]"
                      type="text"
                      id="address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </td>
                  
                </tr>
                <tr className="space-x-4">
                  <td>
                    <label htmlFor="telephone1">Telephone 1</label>
                    <br />
                    <input
                      className="p-[14px] text-[#3A3A3A]"
                      type="text"
                      id="telephone1"
                      value={formData.telephone1}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <label htmlFor="telephone2">Telephone 2</label>
                    <br />
                    <input
                      className="p-[14px] text-[#3A3A3A]"
                      type="text"
                      id="telephone2"
                      value={formData.telephone2}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
            <div className="flex justify-between mt-[65px] ml-[-80px] mr-[-30px]">
            <Link to="/">
            <p className="underline text-[#5B5BF3] font-bold text-[25px]">SignOut</p>
            </Link>
            <button className="flex">
              <img src={buttonIcon} alt="" className="mr-2" />
              <h2 onClick = {handleSubmit} className="text-[#fffff]">Submit</h2>
            </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
