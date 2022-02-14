import { useState } from "react";
import { createContext } from "react";

export const RegistryType = createContext();

export default function RegistryTypeProvider({ children }) {
  const [outflowMoney, setOutflowMoney] = useState(null);

  return (
    <RegistryType.Provider value={{ outflowMoney, setOutflowMoney }}>
      {children}
    </RegistryType.Provider>
  );
}
