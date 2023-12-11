import { MdGroups3 } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

const ShareHealth = () => {
    return (

        <div className="bg-white rounded-[20px] w-[1200px] h-[722px] mx-auto px-[40px] my-[50px] ">

            <h1 className="text-[black] text-[25px] py-[15px] font-bold-[700]" > Share</h1>

            <div className=" px-[40px] py-[25]">
            <div className="bg-[#FDD7FD] w-full px-auto h-[55px] py-[10px] rounded-[20px] flex flex-row" >

                <div > <MdGroups3 />  Invite Others</div>
                <div className="bg-[#FFFFFF] text-[black] rounded-[20px]  text-[25px]"><BiWorld /> Share Privately</div>


            </div>
            </div>
        </div>
        

    );
};

export default ShareHealth;