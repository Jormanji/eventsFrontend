import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check platform authentication
  const checkPlatformAuth = async () => {
  try {
    const response = await fetch('http://localhost:5000/auth/check-platform', {
      method: 'GET',
      credentials: 'include',
    });

    if (response.ok) {
      return true;
    } else if (response.status === 401) {
      return false;
    }
  } catch (error) {
    console.error("Error checking platform authentication:", error);
    return false;
  }
};

  

  return (
    <AuthContext.Provider value={{ user, setUser, checkPlatformAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
