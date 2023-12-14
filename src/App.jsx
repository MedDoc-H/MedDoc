import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes, Router } from "react-router-dom";
import { AuthProvider } from "./components/Auth/AuthContext";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Home from "./components/Pages/Home/Home";
import UpdateAllergy from "./components/Pages/Health-Report/update-allergy"
import Profile from "./components/Pages/Profile/Profile";
import { useEffect, useState } from "react";
import { Web5 } from '@web5/api/browser';
import Health from "./components/Pages/Health-Report/Health-Report";
import ShareHealth from "./components/Pages/Health-Report/Share-Health";
import Blog from "./components/Pages/Blog/Blog";
import UpdateActivity from "./components/Pages/Health-Report/activities-update";
import AboutUs from "./components/Pages/Home/About-Us";


function App() {
  const [web5, setWeb5] = useState(null);
  const [did, setDid] = useState("");
  const [recipientDid, setRecipientDid] = useState("");
  const [activeRecipient, setActiveRecipient] = useState(null);
  const [allReports, setAllReports] = useState([]);

  const [formData, setFormData] = useState({
    fName: "",
    fNameK: "",
    providerName: "",
    lName: "",
    lNameK: "",
    bloodGroup: "",
    gender: "",
    heightWeight: "",
    birthday:"",
    maritalStatus: "",
    lSpoken:"",
    nextOfKin: "",
    address: "",
    relationshipOfKin: "",
    telephone1: "",
    telephone2: "",
  });

  console.log(formData);
  let web5Instance = null;
  useEffect(() => {
    const initWeb5 = async () => {
      const { web5, did } = await Web5.connect();
      setWeb5(web5);
      localStorage.setItem("did", did);
      setDid(did);
      if (web5 && did) {
        await configureProtocol(web5, did);
        await fetchDoc(web5, did);
      }
    };
    initWeb5();
    return () => {
      web5Instance = null;
    };
  }, []);

  useEffect(() => {
    if (!web5 || !did) return;
    const intervalId = setInterval(async () => {
      await fetchDoc(web5, did);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [web5, did]);

  const createProtocolDefinition = () => {
    const dingerProtocolDefinition = {
      protocol: "https://medDoc.dev/medDoc-protocol",
      published: true,
      types: {
        doc: {
          schema: "https://medDoc.dev/medDoc",
          dataFormats: ["application/json"],
        },
      },
      structure: {
        doc: {
          $actions: [
            { who: "anyone", can: "write" },
            { who: "author", of: "ding", can: "read" },
            { who: "recipient", of: "ding", can: "read" },
          ],
        },
      },
    };
    return dingerProtocolDefinition;
  };

  const queryForProtocol = async (web5) => {
    return await web5.dwn.protocols.query({
      message: {
        filter: {
          protocol: "https://medDoc.dev/medDoc-protocol",
        },
      },
    });
  };

  const installProtocolLocally = async (web5, protocolDefinition) => {
    return await web5.dwn.protocols.configure({
      message: {
        definition: protocolDefinition,
      },
    });
  };

  const configureProtocol = async (web5, did) => {
    const protocolDefinition = await createProtocolDefinition();

    const { protocols: localProtocol, status: localProtocolStatus } =
      await queryForProtocol(web5);
    console.log({ localProtocol, localProtocolStatus });
    if (localProtocolStatus.code !== 200 || localProtocol.length === 0) {
      const { protocol, status } = await installProtocolLocally(
        web5,
        protocolDefinition
      );
      console.log("Protocol installed locally", protocol, status);

      const { status: configureRemoteStatus } = await protocol.send(did);
      console.log(
        "Did the protocol install on the remote DWN?",
        configureRemoteStatus
      );
    } else {
      console.log("Protocol already installed");
    }
  };

  const constructDoc = () => {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const Doc = {
      sender: did,
      data: formData,
      recipient: recipientDid, //Note
      timestampWritten: `${currentDate} ${currentTime}`,
    };
    return Doc;
  };

  const writeToDwn = async (Doc) => {
    const { record } = await web5.dwn.records.write({
      data: Doc,
      message: {
        protocol: "https://medDoc.dev/medDoc-protocol",
        protocolPath: "Doc",
        schema: "https://medDoc.dev/medDoc",
        recipient: recipientDid,
      },
    });
    return record;
  };

  const sendRecord = async (record) => {
    return await record.send(recipientDid);
  };

  // implementation to share data to recipient DID here
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

  const fetchSentDoc = async (web5, did) => {
    const response = await web5.dwn.records.query({
      message: {
        filter: {
          protocol: "https://medDoc.dev/medDoc-protocol",
        },
      },
    });

    if (response.status.code === 200) {
      const sentDoc = await Promise.all(
        response.records.map(async (record) => {
          const data = await record.data.json();
          return data;
        })
      );
      console.log(sentDoc, "I sent these Doc");
      return sentDoc;
    } else {
      console.log("error", response.status);
    }
  };

  const fetchReceivedDoc = async (web5, did) => {
    const response = await web5.dwn.records.query({
      from: did,
      message: {
        filter: {
          protocol: "https://medDoc.dev/medDoc-protocol",
          schema: "https://medDoc.dev/medDoc",
        },
      },
    });

    if (response.status.code === 200) {
      const recievedDoc = await Promise.all(
        response.records.map(async (record) => {
          const data = await record.data.json();
          return data;
        })
      );
      console.log(recievedDoc, "I received these Doc");
      return recievedDoc;
    } else {
      console.log("error", response.status);
    }
  };

  const fetchDoc = async (web5, did) => {
    const sentMessages = await fetchSentDoc(web5, did);
    const receivedMessages = await fetchReceivedDoc(web5, did);
    const allMessages = [...(sentMessages || []), ...(receivedMessages || [])];
    setAllReports(allMessages);
  };

  const handleSetActiveRecipient = (recipient) => {
    setRecipientDid(recipient);
    setActiveRecipient(recipient);
  };

  // generate new did
  const handleSignUp = async () => {
    const { web5, did } = await Web5.connect();
    setWeb5(web5);
    localStorage.setItem("did", did);
    setDid(did);
    alert("DID generated");
  };

  const handleInputChange = (e) => {
    setDid(e.target.value);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn"));
  }, [isLoggedIn]);

  return (
    <>
      <AuthProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/sign-in"
              element={
                <SignIn handleInputChange={handleInputChange} did={did} />
              }
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
                  writeToDwn={writeToDwn}
                  constructDoc={constructDoc}
                />
              }
            />
            <Route path="/dashboard" element={<Dashboard  formData={formData}/>} />
            <Route path="/health-report" element={<Health />} />
            <Route path="/blog" element={<Blog />} />
          <Route path="/update-allergy" element={<UpdateAllergy />} />
          <Route path="/share" element={<ShareHealth />} />
          <Route path="/update-activities" element={<UpdateActivity />} />
         <Route path="/about-us" element={<AboutUs />}/>
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </>
  );
}

export default App;