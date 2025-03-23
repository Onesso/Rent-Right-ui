import { createContext, useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null //we are parsing the local storage to convert json string to javascript object
  );

  const updateUser = (data) => {
    setCurrentUser(data);
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser)); //we are stringifying the javascript object to convert it to json string
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
