import React, { createContext,useEffect,  useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Web5 } from '@web5/api'; // Import Web5 if needed

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [web5, setWeb5] = useState(null);
  const [myDID, setMyDID] = useState(null);
  const navigate = useNavigate();

  // Your login and logout functions
  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    alert('You will be logged out');
    setIsLoggedIn(false);
    navigate('/sign-in');
  };

  // Initialize Web5
  const initializeWeb5 = async () => {
    try {
      const { web5: initializedWeb5, did: initializedDID } = await Web5.connect({
        sync: '5s',
      });

      console.log("Here's your DID", initializedDID);

      setWeb5(initializedWeb5);
      setMyDID(initializedDID);
    } catch (error) {
      console.error('Error initializing Web5', error);
    }
  };

  // Call initializeWeb5 on component mount
  useEffect(() => {
    initializeWeb5();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, web5, myDID }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
