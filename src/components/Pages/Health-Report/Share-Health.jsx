import { MdGroupAdd } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import "./style.css";
import { FaSearch } from "react-icons/fa";
import buttonIcon from "../../../assets/buttonIcon.svg";
import imgd from "../../../assets/Ellipse 6.png";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useAuth } from "../../Auth/AuthContext";
import { useEffect } from "react";

const ShareHealth = ({recipientDid, handleInputChange}) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect   (() => {
    if (!isLoggedIn) {
      // If not logged in, redirect to sign-in page
      navigate('/sign-in');
    }
  }, [isLoggedIn, navigate]);
  return (
    <>
      <div className="bg-white w-[1000px] rounded-[20px]  h-[722px] mx-auto my-[50px] ft">
        <div className=" px-[40px]  ">
          <h1 className="text-[black] text-[25px] py-[20px] font-bold-[700] ft">
            {" "}
            Share
          </h1>

          <div className=" px-[40px] py-[5]">
            <div className="bg-[#FDD7FD] w-full px-auto h-[50px] py-[5px] rounded-full flex flex-row justify-center  space-between">
              <div className=" text-[black]  rounded-[20px] bg-[#FFFFFF]  text-[14px] w-[800px] items-center justify-center flex gap-[4px] text-bold">
                {" "}
                <MdGroupAdd className="mx[0px] style" /> Invite Others
              </div>
            </div>

            <div className="flex  mt-[30px]">
              <form>
                <div className="flex">
                  <label htmlFor="RecDid" class="relative block w-[700px]">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-[70px]  outline-[12px]">
                      <FaSearch className="mt-[5px] " />
                    </span>
                    <input
                      class="w-full bg-white placeholder:font-italitc border border-slate-30 border-[#FDD7FD] rounded-full py-2 pl-[100px] pr-4"
                      placeholder="Enter Recipient DID"
                      type="text"
                      id="RecDid"
                      name="recipientDid"
                      value={recipientDid.RecDid}
                      onChange={handleInputChange}
                    />
                  </label>

                  <button className="flex mx-auto w-[120px] h-[45px] mt-[10px] ml-[15px] ">
                    <img
                      src={buttonIcon}
                      alt=""
                      className="mr-2 w-[20px] h-[20px]"
                    />
                    Invite
                  </button>
                </div>
              </form>
            </div>

            <p className="text-bold ml-[10px] mt-[15px] ft">
              Only those invited can access the document
            </p>
          </div>
        </div>

        <hr className="mt-[50px]" />

        <div className="px-[60px]  ">
          <p className="text-bold pl-[20px] pt-[10px]">Peope with access</p>

          <div className="mx-auto mt-[10px] text-[black]">
            <table className="table-auto w-full">
              <tbody className="mb-[20px]">
                {/* Row 1 */}
                <tr>
                  <td className="px-4 py-2">
                    <img src={imgd} alt="Sample" className="rounded-full " />
                  </td>
                  <td className="px-4 py-2 text-[12px]">
                    {" "}
                    <span className="text-bold text-[16px]">Sarah Cobbs </span>
                    <br /> DID Confirmed
                  </td>
                  <td className="px-4 py-2">
                    <select className="w-[100px] p-2.5 text-[black]  bg-white border outline-[2px] rounded-full appearance-none border-[#FDD7FD] ">
                      <option className="text-center">Editor</option>
                      <option selected className="text-center">
                        Viewer
                      </option>
                    </select>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr>
                  <td className="px-4 py-2">
                    <img src={imgd} alt="Sample" className="rounded-full " />
                  </td>
                  <td className="px-4 py-2 text-[12px]">
                    {" "}
                    <span className="text-bold text-[16px]">Sarah Cobbs </span>
                    <br /> DID Confirmed
                  </td>
                  <td className="px-4 py-2">
                    <select className="w-[100px] p-2.5 text-[black]  bg-white border outline-[2px] rounded-full appearance-none border-[#FDD7FD] ">
                      <option className="text-center">Editor</option>
                      <option selected className="text-center">
                        Viewer
                      </option>
                    </select>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr>
                  <td className="px-4 py-2">
                    <img src={imgd} alt="Sample" className="rounded-full " />
                  </td>
                  <td className="px-4 py-2 text-[12px]">
                    {" "}
                    <span className="text-bold text-[16px]">Sarah Cobbs </span>
                    <br /> DID Confirmed
                  </td>
                  <td className="px-4 py-2">
                    <select className="w-[100px] p-2.5 text-[black] bg-white border shadow-sm outline-[2px] rounded-full appearance-none border-[#FDD7FD] ">
                      <option className="text-center">Editor</option>
                      <option selected className="text-center">
                        Viewer
                      </option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex  justify-end mr-[85px]">
        <Link to = "/">
          <button className="flex  w-[120px] h-[45px] mt-[10px] items-end ">
            <img src={buttonIcon} alt="" className="mr-2 w-[20px] h-[20px]" />
            Done
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShareHealth;
