import { useState } from "react";
import { createContext } from "react";

export const UserToken = createContext();

export default function UserLoginProvider({ children }) {
  const [token, setToken] = useState();

  return (
    <UserToken.Provider value={{ token, setToken }}>
      {children}
    </UserToken.Provider>
  );
}
