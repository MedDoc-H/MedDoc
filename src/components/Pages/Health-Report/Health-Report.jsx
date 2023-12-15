import React, { useEffect } from "react";
import html2pdf from "html2pdf.js";
import vectorSvg from "../../../assets/vector.svg";
import addicon from "../../../assets/add-icon.png";
import med from "../../../assets/medication.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth/AuthContext";

const Health = () => {
  const defaultFirstName = "Sarah";
  const defaultLastName = "Cobbs";
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Months are zero-based, so we add 1
  const day = today.getDate();

  const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;

  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      // If not logged in, redirect to sign-in page
      navigate("/sign-in");
    }
  }, [isLoggedIn, navigate]);

  const formData = JSON.parse(localStorage.getItem("formData"));
  console.log(formData);

  const handleDownload = () => {
    const targetElement = document.getElementById("pdfContent");

    if (targetElement) {
      const pdfOptions = {
        margin: 10,
        filename: "medical_report.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      html2pdf(targetElement, pdfOptions);
    } else {
      console.error("Element with id 'pdfContent' not found.");
    }
  };
  return (
    <div className="App" id="pdfContent">
      <h1 className="text-center text-[30px] mt-3">My Medical Report</h1>
      <h2 className="text-[30px] ml-8">{`${
        formData?.fName || defaultFirstName
      }, ${formData?.lName || defaultLastName}`}</h2>
      <span className="leading-10 ml-8">Last Updated, {formattedDate}</span>
      <div className="grid grid-cols-3 gap-5 ml-8">
        <div className="row-span-2 col-span-1 bg-white text-black rounded-xl mb-14">
          <div className="grid grid-cols-2 gap-5 pl-8 pt-4 pb-4">
            <div className="first-name">
              <span> First name </span>
              <h3 className="font-bold"> {formData.fName || "Sarah"}</h3>
            </div>

            <div className="last-name">
              <span> Last name </span>
              <h3 className="font-bold"> {formData.fName || "Cobbs"}</h3>
            </div>

            <div className="gender">
              <span> Gender </span>
              <h3 className="font-bold">{formData.gender || "Female"}</h3>
            </div>

            <div className="marital">
              <span> Marital status </span>
              <h3 className="font-bold">{formData.maritalStatus || "Married"}</h3>
            </div>

            <div className="Religion">
              <span> Religion </span>
              <h3 className="font-bold">Christian</h3>
            </div>

            <div className="country">
              <span> Country </span>
              <h3 className="font-bold">Ghana</h3>
            </div>

            <div className="bdate">
              <span> Date of birth </span>
              <h3 className="font-bold">{formData.birthday || " October 12 1990"}</h3>
            </div>

            <div className="language-spoken">
              <span> Language Spoken </span>
              <h3 className="font-bold">{formData.fName || "English"}</h3>
            </div>

            <div className="Telephone">
              <span> Telephone </span>
              <h3 className="font-bold">{formData.telephone1 || "+234 28728782"}</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 bg-white col-span-2 rounded-xl w-11/12 text-black p-8">
          <div className="next-of-kin">
            <span> Next Of Kin </span>
            <h3 className="font-bold">{formData.relationshipOfKin || "Husband"}</h3>
          </div>

          <div className="country">
            <span> </span>
            <span> </span>
          </div>

          <div className="first-name">
            <span> First Name </span>
            <h3 className="font-bold">{formData.fNameK || "James"}</h3>
          </div>

          <div className="last-name">
            <span> Last Name </span>
            <h3 className="font-bold">{formData.lNameK || "Cobbs"}</h3>
          </div>

          <div className="Address">
            <span> Address </span>
            <h3 className="font-bold">{formData.address || "7, Bank Rd, Lagos, Nigeria"}</h3>
          </div>

          <div className="Tel">
            <span> Telephone </span>
            <h3 className="font-bold">{formData.telephone2 || "+234 5434 232"}</h3>
          </div>
        </div>

        <div className="bg-white text-black grid grid-cols-2 col-span-2 rounded-xl w-11/12 p-8">
          <div className="name-of-provider">
            <span> Name Of Provider </span>
            <h3 className="font-bold">Leana Medical Centre</h3>
          </div>

          <div className="country">
            <span> </span>
            <span> </span>
          </div>

          <div className="address">
            <span> Address </span>
            <h3 className="font-bold">12, Don Peppe Street, Ikr</h3>
          </div>

          <div className="tel">
            <span> Telephone </span>
            <h3 className="font-bold">+234 2131 313</h3>
          </div>
        </div>
      </div>

      {/* Allergies Section */}
      <div className="allergies w-11/12 ml-8 mt-28">
        <div className="w-full relative">
          <button className="btn-plus">
            <img src={addicon} className="w-[35px]" />
          </button>
        </div>
        <div className="flex bg-white text-black rounded-xl">
          <div className="icon bg-pink-500 w-20 h-auto rounded-l-xl"></div>
          <div className="allergy-section-parent grid w-full ">
            <div className="allergy-section-grid-one inline-grid grid-cols-3 pl-5">
              <div className="first-grid mt-3">
                <h3 className="text-xl font-bold mb-3">Allergies</h3>
                <p className="mb-2 text-[#EE82EE] text-[18px] font-bold">
                  Nuts
                </p>
              </div>

              <div className="second-grid mt-3">
                <h3 className="text-xl font-bold mb-3">Outcomes</h3>
                <p className="font-bold mb-2">Skin Breakouts</p>
              </div>

              <div className="third-grid mt-3">
                <h3 className="text-xl font-bold mb-4">Severity</h3>
                <div className="allergy-severity inline-flex mb-10">
                  <div className="severity-none bg-pink-400 w-auto h-1 pr-2">
                    None
                  </div>
                  <div className="severity-low bg-pink-700 w-auto h-1 pr-2">
                    Low
                  </div>
                  <div className="severity-moderate bg-yellow-600 w-auto h-1 pr-2">
                    Moderate
                  </div>
                  <div className="severity-severe bg-red-700 w-auto h-1 pr-2">
                    Severe
                  </div>
                </div>
              </div>
            </div>
            <div className="allergy-section-grid-two inline-grid grid-cols-3 pl-5">
              <div className="first-grid">
                <p className="mb-2 text-[#EE82EE] text-[18px] font-bold">
                  Penicilin
                </p>
              </div>

              <div className="second-grid">
                <p className="font-bold mb-2">Hives</p>
              </div>

              <div className="third-grid">
                <div className="allergy-severity inline-flex mb-10">
                  <div className="severity-none bg-pink-400 w-auto h-1 pr-2">
                    None
                  </div>
                  <div className="severity-low bg-pink-700 w-auto h-1 pr-2">
                    Low
                  </div>
                  <div className="severity-moderate bg-yellow-600 w-auto h-1 pr-2">
                    Moderate
                  </div>
                  <div className="severity-severe bg-red-700 w-auto h-1 pr-2">
                    Severe
                  </div>
                </div>
              </div>
            </div>

            <div className="allergy-section-grid-three inline-grid grid-cols-3 pl-5">
              <div className="first-grid">
                <p className="mb-2 text-[#EE82EE] text-[18px] font-bold">
                  Codeine
                </p>
              </div>

              <div className="second-grid">
                <p className="font-bold mb-2">Shortness of Breath</p>
              </div>

              <div className="third-grid">
                <div className="allergy-severity inline-flex mb-10">
                  <div className="severity-none bg-pink-400 w-auto h-1 pr-3">
                    None
                  </div>
                  <div className="severity-low bg-pink-700 w-auto h-1 pr-2">
                    Low
                  </div>
                  <div className="severity-moderate bg-yellow-600 w-auto h-1 pr-2">
                    Moderate
                  </div>
                  <div className="severity-severe bg-red-700 w-auto h-1 pr-2">
                    Severe
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Yearly Activities */}
      <div className="yearly-activities mt-10 mb-10 bg-white p-4 rounded-xl w-11/12 ml-8">
        <div className="w-full relative bottom-3 left-4 mt-10">
          <button className="btn-plus">
            <img src={addicon} className="w-[35px]" />
          </button>
        </div>
        <div className="year">
          <h3 className="font-bold text-black text-center text-xl">
            {" "}
            2023's Activities{" "}
          </h3>
        </div>
      </div>

      {/* Yearly Activities section */}

      <div className="yearly-activities w-11/12  ml-8 mt-20">
        <div className="w-full relative">
          <button className="btn-plus">
            <img src={addicon} className="w-[35px]" />
          </button>
        </div>
        <div className="flex rounded-xl bg-white text-black">
          <div className="icon bg-pink-500 w-auto h-auto rounded-l-xl">
            <img src={med} className="w-[50px] vec" />
            <h3 className="text-[16px] text-white font-bold mr-3 ml-3">
              Medication
            </h3>
          </div>
          <div className="allergy-section-parent grid w-full mb-5">
            <div className="allergy-section-grid-one inline-grid grid-cols-3 pl-5">
              <div className="first-grid mt-3">
                <h3 className="text-xl font-bold mb-3">November 28, 2023</h3>
                <span className="text-[#EE82EE] mb-12 text-[18px] font-bold">
                  {" "}
                  Acetaminophen with Codeine
                </span>
              </div>

              <div className="second-grid mt-3">
                <span className="text-lg font-bold">Liquid</span>

                <div className="yearly-activities mt-3 mb-3">
                  <b className="dose pr-4">Dose</b>
                  <span className="dose-text"> 2 Spoonful </span>
                </div>

                <div className="yearly-activities ">
                  <b className="rate pr-4">Rate</b>
                  <span className="rate-text"> 2/day </span>
                </div>
              </div>

              <div className="third-grid mt-3">
                <div className="yearly-activities mb-3">
                  <b className="instruction pr-4">Instruction</b>
                  <span className="instruction-text">
                    {" "}
                    2 Spoonful twice a day{" "}
                  </span>
                </div>

                <div className="yearly-activities ">
                  <b className="prescriber pr-4">Prescriber</b>
                  <span className="prescriber-text">
                    {" "}
                    Leane Medical Centre{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Yearly Activities section 2 */}

      <div className="yearly-activities w-11/12 ml-8 mt-20">
        <div className="w-full relative">
          <button className="btn-plus">
            <img src={addicon} className="w-[35px]" />
          </button>
        </div>
        <div className="flex bg-white text-black w-full rounded-xl">
          <div className="icon bg-pink-500 w-auto h-auto rounded-l-xl">
            <img src={vectorSvg} className="w-[55px] vec" />
            <h3 className="text-[16px] text-white font-bold mr-1 ml-1">
              Appointment
            </h3>
          </div>
          <div className="yearly-activities-section-parent grid w-full">
            <div className="yearly-activities-section-grid-one inline-grid grid-cols-2 pl-5">
              <div className="first-grid mt-3">
                <h3 className="text-xl font-bold mb-3">August 18, 2023</h3>
                <p className="text-[#EE82EE] mb-12 text-[18px] font-bold">
                  X-ray Examination
                </p>
              </div>

              <div className="second-grid mt-3">
                <div className="yearly-activities mb-3">
                  <b className="provider pr-4">Provider</b>
                  <span className="provider-text"> Dr. Felicia Parker </span>
                </div>

                <div className="yearly-activities ">
                  <b className="location pr-4">Location</b>
                  <span className="location-text"> Community Hospital </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Yearly Activities section 3 */}

      <div className="yearly-activities bg-white text-black w-11/12 rounded-xl ml-8 mt-20 mb-8">
        <div className="w-full relative">
          <button className="btn-plus">
            <img src={addicon} className="w-[35px]" />
          </button>
        </div>
        <div className="flex bg-white text-black w-full rounded-xl">
          <div className="icon bg-pink-500 w-auto h-auto rounded-l-xl">
            <div className="icon bg-pink-500 w-auto h-auto rounded-l-xl">
              <img src={vectorSvg} className="w-[55px] vec" />
              <h3 className="text-[16px] text-white font-bold mr-1 ml-1">
                Appointment
              </h3>
            </div>
          </div>
          <div className="yearly-activities-section-parent grid w-full">
            <div className="yearly-activities-section-grid-one inline-grid grid-cols-2 pl-5">
              <div className="first-grid mt-3">
                <h3 className="text-xl font-bold mb-3">October 11, 2023</h3>
                <p className="text-[#EE82EE] mb-12 text-[18px] font-bold">
                  Annual Physical Examination
                </p>
              </div>

              <div className="second-grid mt-3">
                <div className="yearly-activities mb-3">
                  <b className="provider pr-4">Provider</b>
                  <span className="provider-text"> Dr. John Momoh </span>
                </div>

                <div className="yearly-activities ">
                  <b className="location pr-4">Location</b>
                  <span className="location-text"> Leane Medical Centre </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download && Share btn */}
      <div className="flex justify-between w-full mb-8">
        <div className="flex-two">
          <button className="ml-8" onClick={handleDownload}>
            Download
          </button>
        </div>
        <Link to="/share">
          <div className="flex-two">
            <button className="mr-20"> Share </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Health;
