"use client";
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Create UserContext
const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // On initial render, check if there's a user in localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); 
    }
  }, []);

  // Login function
  const login = async (username, password) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { username, password });
      const loggedInUser = response.data.user;
      setUser(loggedInUser);
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      console.log("User set in context:", loggedInUser);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    console.log("User logged out");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use UserContext
export const useUserContext = () => useContext(UserContext);
