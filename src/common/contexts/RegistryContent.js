import { useState } from "react";
import { createContext } from "react";

export const RegistryContent = createContext();

export default function RegistryContetProvider({ children }) {
  const [updateRegistry, setUpdateRegistry] = useState(null);

  return (
    <RegistryContent.Provider value={{ updateRegistry, setUpdateRegistry }}>
      {children}
    </RegistryContent.Provider>
  );
}
