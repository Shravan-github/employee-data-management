import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import SignIn from '../pages/SignIn';
// import SignUp from '../pages/SignUp';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  const SignIn = () => setIsAuthenticated(true);
  const SignUp = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, SignIn, SignUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
