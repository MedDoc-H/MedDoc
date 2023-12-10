import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes, Router } from "react-router-dom";
import { AuthProvider } from "./components/Auth/AuthContext";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Home from "./components/Pages/Home/Home";
import Profile from "./components/Pages/Profile/Profile";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn"));
  }, [isLoggedIn]);

  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
