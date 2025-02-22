import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
    const login = (name, email) => {
      setUser({ name, email });
    };
  
    return (
      <UserContext.Provider value={{ user, login }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export const useUser = () => useContext(UserContext);
