import {React, useState} from "react";
import buttonIcon from "../../../assets/buttonIcon.svg";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import Profileimg from "../../../assets/profile.svg";

const Profile = () => {
  const [formData, setFormData] = useState({
    fName: "",
    providerName: "",
    age: "",
    bloodGroup: "",
    gender: "",
    heightWeight: "",
    maritalStatus: "",
    nextOfKin: "",
    address: "",
    relationshipOfKin: "",
    telephone1: "",
    telephone2: "",
  });
  const Navigate = useNavigate();
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Access all form data in the `formData` state
    console.log(formData);
    Navigate("/dashboard");
    // Add your logic to submit the form data
  };
  return (
    <>
      <div className="w-[90%] h-[822px] bg-[white] mx-[auto] my-[17px] rounded-[20px] flex p-[56px]">
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
                    <label htmlFor="fName">Full Name</label>
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
                    <label htmlFor="age">Age</label>
                    <br />
                    <input
                      className="p-[14px] text-[#3A3A3A]"
                      type="age"
                      id="age"
                      value={formData.age}
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
                    <label htmlFor="relationshipOfKin">
                      Relationship of Kin
                    </label>{" "}
                    <br />
                    <input
                      className="p-[14px] text-[#3A3A3A]"
                      type="text"
                      id="relationshipOfKin"
                      value={formData.relationshipOfKin}
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
            <button className="flex mx-auto mt-[50px]  mb-[30.9px]">
              <img src={buttonIcon} alt="" className="mr-2" />
              <h2 className="text-[#fffff]">Submit</h2>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
