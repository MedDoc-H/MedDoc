import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes, Router } from "react-router-dom";
import { useAuth } from "./components/Auth/AuthContext";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Home from "./components/Pages/Home/Home";
import UpdateAllergy from "./components/Pages/Health-Report/update-allergy";
import Profile from "./components/Pages/Profile/Profile";
import { useEffect, useState } from "react";
import { Web5 } from "@web5/api/browser";
import Health from "./components/Pages/Health-Report/Health-Report";
import ShareHealth from "./components/Pages/Health-Report/Share-Health";
import UpdateActivities from "./components/Pages/Health-Report/activities-update";
import protocolDef from "./assets/protocol.json";

function App() {
  // const [web5, setWeb5] = useState(null);
  const [did, setDid] = useState("");
  const { isLoggedIn, login, logout, web5, myDID } = useAuth();

  useEffect(() => {
    // You can now access web5 and myDID here
    if (web5 && myDID) {
      // Do something with web5 and myDID
      console.log("Web5 and DID are available:", web5, myDID);
    }
  }, [web5, myDID]);

  const [formData, setFormData] = useState({
    fName: "",
    fNameK: "",
    providerName: "",
    lName: "",
    lNameK: "",
    bloodGroup: "",
    gender: "",
    heightWeight: "",
    birthday: "",
    maritalStatus: "",
    lSpoken: "",
    nextOfKin: "",
    address: "",
    relationshipOfKin: "",
    telephone1: "",
    telephone2: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  
  const [allergyData, setAllergyData] = useState({
    new_allergy: "",
    outcome: "",
    severity: "",
  });
  
  const handleAllergyInputChange = (e) => {
    const { id, value } = e.target;
    setAllergyData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const [activitiesData, setActivitiesData] = useState({
    activity: "",
    type: "",
    date: "",
    medication: "",
    specify: "",
    provider: "",
    location: "",
  });
  console.log(activitiesData)


  const handleActivitiesInputChange = (e) => {
    const { id, value } = e.target;
    setActivitiesData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  const [recipientDid, setRecipientDid] = useState(
    {
      "RecDid": "",
    }
  );

  const handleRecipientDidChange = (e) => {
    const { id, value } = e.target;
    setRecipientDid((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  console.log(recipientDid)

  const configureProtocol = async () => {
    if (!web5) {
      console.error("web5 not available");
      return;
    }

    // query the list of existing protocols on the DWN
    const { protocols, status } = await web5.dwn.protocols.query({
      message: {
        filter: {
          protocol: protocolDefinition.protocol,
        },
      },
    });

    if (status.code !== 200) {
      alert("Error querying protocols");
      console.error("Error querying protocols", status);
      return;
    }

    // if the protocol already exists, we return
    if (protocols.length > 0) {
      console.log("Protocol already exists");
      return;
    }

    // configure protocol on local DWN
    const { status: configureStatus, protocol } =
      await web5.dwn.protocols.configure({
        message: {
          definition: protocolDefinition,
        },
      });

    console.log("Protocol configured", configureStatus, protocol);
  };

  // implementation to share
  const createShareReport = async () => {
    recipientDid = recipientDid.RecDid;
    const sharedListData = {
      "@type": "list",
      "tit"

    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!noteValue.trim()) {
      setErrorMessage("Please update your details before sending.");
      return;
    }

    const Doc = constructDoc();
    const record = await writeToDwn(Doc);
    const { status } = await sendRecord(record);

    console.log("Send record status", status);

    await fetchDoc(web5, did);
    setNoteValue("");
  };

  // copy did to clipboard
  const copyDid = async () => {
    const DID = localStorage.getItem("did");
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(DID);
    }
    alert("Copied to clipboard");
  };

 
  const handleSignInputChange = (event) => {
    setDid(event.target.value);
  };
  
 

  // generate new did
  const handleSignUp = async () => {
    setDid(myDID);
    localStorage.setItem("did", myDID);
    alert("DID generated");
    console.log(myDID);
  };

  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/sign-in"
            element={<SignIn handleInputChange={handleSignInputChange} did={did} />}
          />
          <Route
            path="/sign-up"
            element={<SignUp handleSignUp={handleSignUp} copyDid={copyDid} />}
          />
          <Route
            path="/profile"
            element={
              <Profile
                formData={formData}
                setFormData={setFormData}
                handleInputChange={handleInputChange}
              />
            }
          />
          <Route
            path="/dashboard"
            element={<Dashboard formData={formData} activitiesData={activitiesData} allergyData={allergyData} />}
          />
          <Route path="/health-report" element={<Health />} />
          <Route
            path="/update-allergy"
            element={
              <UpdateAllergy
                handleInputChange={handleAllergyInputChange}
                allergyData={allergyData}
              />
            }
          />
           <Route
            path="/update-activities"
            element={
              <UpdateActivities 
              handleActivitiesInputChange={handleActivitiesInputChange}
                activitiesData={activitiesData}
              />
            }
          />
          <Route path="/share"  element={<ShareHealth handleInputChange={handleRecipientDidChange} recipientDid={recipientDid} />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
