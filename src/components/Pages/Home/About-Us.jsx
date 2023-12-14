import React from "react";
import abtbg from "../../../assets/abtusbg.png";
import wwa from "../../../assets/wwa.png";



const AboutUs = () => {
    return (
        <>
        <div>
        <div
        className="flex flex-col z-0 w-full h-[300px] my-[2px]  mx-auto  bg-no-repeat bg-center bg-cover text-white"
        style={{ backgroundImage: `url(${abtbg})` }}
        >

            <div className="p-[40px]">
                <h1 className="text-[50px] font-bold ">Your Data, Your Health <br />
                Your Way</h1>

                <p className="text-[white] pt-[50px] font-bold">We use Web5 Technology to help users manage their health records and <br />
                 share them with trusted parties without <br /> compromising their privacy</p>
            </div>

        </div>

        <div className="bg-[white] w-full h-[444px]">
            <div className="block">

                <p className="text-[#EE82EE] text-center pt-[30px]">About Us</p>
                <h1 className="text-[black] font-bold text-[24px] text-center">Who We Are</h1>

                <p className="px-[20px] text-[black] text-[16px] pt-7">We are a revolutionary healthcare  application built on the principles of Web5. We believe that your health data belongs to you, and you should have complete <br />
                control over who accesses it and how it is used.</p>
            </div>

        <div className="flex mt-[50px]">
        <div className="bg-[#731668] w-[360px] h-[239px] pl-[120px]"> 
        <img src={wwa} alt="" />
        
        </div>
        <div className="bg-[white] w-auto h-[239px]">
            <div className="block">

                <p className="text-[#EE82EE] text-center pt-[30px]">Our Mission</p>
                <h1 className="text-[black] font-bold text-[24px] text-center">How We Work</h1>

                <p className="px-[20px] text-[black] text-[14px] pt-7">We are passionate about building a future where individuals are empowered to manage their health with 
                <br /> transparency, privacy and control.</p>
            </div>

        </div>
        </div>

        </div>
        </div>
        </>
    );
};

export default AboutUs;