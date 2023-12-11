import { useState, useEffect } from "react";
import bg from "../../assets/signupBg.png";
import buttonIcon from "../../assets/buttonIcon.svg";
import { Link } from "react-router-dom";
import { Web5 } from "@web5/api/browser";
const SignUp = () => {
  const [web5, setWeb5] = useState(null);
  const [did, setDid] = useState("");
  let web5Instance = null;
  useEffect(() => {
    const initWeb5 = async () => {
      const { web5, did } = await Web5.connect();
      console.log(web5, did);
      web5Instance = web5;
      setWeb5(web5);
      // set did to local storage
      localStorage.setItem("did", did);
      setDid(did);
    };
    initWeb5();a
    // Clean up the web5Instance when the component unmounts
    return () => {
      web5Instance = null;
    };
  }, []); // Empty dependency array ensures that the effect runs only once
  const copyDid = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(did);
    }
    alert("Copied to clipboard");
  };
  const handleSignUp = async () => {
    if (web5Instance) {
      const newDid = await web5Instance.did.generate();
      setDid(newDid);
      console.log(newDid);
      alert("New DID generated");
    }
  };
  return (
    <>
      <div
        className="flex flex-col z-0 w-[625px] h-[646px] my-[107px]  mx-auto  bg-no-repeat bg-center bg-cover text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-center text-[#3a3a3a] text-[20px] mt-[30px] mb-[18px]">
          Registration
        </h1>
        <div className="text-center  bg-white rounded-[20px] w-[490px] h-[502px] mx-auto ">
          <div className="mt-[159px]">
            <h1 className="text-[#3A3A3A] text-[20px] font-bold">
              Don't Have A DID?
            </h1>
            <button
              onClick={handleSignUp}
              className="flex mx-auto mt-[50px] mb-[30.9px]"
            >
              <img src={buttonIcon} alt="" className="mr-2" />
              Generate
            </button>
            <h1
              className="text-[#3A3A3A] text-[20px] mb-[20px] font-bold"
              onClick={copyDid}
            >
              Already generated, click{""}
              <span className="underline text-[#5B5BF3] cursor-pointer">here</span> to Copy
            </h1>
            <h2 className="text-[#3A3A3A]">
              Already have a DID?{" "}
              <Link to="/sign-in" className="underline text-[#5B5BF3]">
                Sign in
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
