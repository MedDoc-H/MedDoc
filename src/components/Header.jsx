import React from "react";
import icon from "../assets/icon.svg";
import buttonIcon from "../assets/buttonIcon.svg";
import { NavLink } from "react-router-dom";
import "../index.css";
import "../App.css";
import { useAuth } from "./Auth/AuthContext";

export const Header = () => {
  const { login, logout, isLoggedIn } = useAuth();
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex p-[15px] justify-between w-full">
          <div className="flex items-center">
            <img src={icon} alt="Logo" />
            <h1 className="ml-2">MedDoc</h1>
          </div>
          <div className="flex space-x-10 items-center">
            {isLoggedIn ? (
              <NavLink to="/dashboard">Dashboard</NavLink>
            ) : (
              <NavLink to="/">Home</NavLink>
            )}
            {isLoggedIn ? (
              <NavLink to="/health-report">My Health</NavLink>
            ) : (
              <></>
            )}
            {!isLoggedIn ? <NavLink to="/Blog">Blog</NavLink> : <></>}
            {!isLoggedIn ? <NavLink to="/about-us">About Us</NavLink> : <></>}
            {isLoggedIn ?   <NavLink to="/profile">Profile</NavLink> : <></>}

          

            {isLoggedIn ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <NavLink to="/sign-up">
                <button className="flex items-center">
                  <img src={buttonIcon} alt="" className="mr-2" />
                  Get Started
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
