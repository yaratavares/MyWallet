import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLoginProvider from "../common/contexts/UserToken";
import RegistryTypeProvider from "../common/contexts/RegistryType";

import PageLogin from "./PageLogin";
import PageRegistry from "./PageRegistry";
import PageSignUp from "./PageSignUp";
import PageNewRegistry from "./PageNewRegistry";

import { StyleGlobal } from "../common/style/StyleGlobal";

export default function App() {
  return (
    <BrowserRouter>
      <StyleGlobal />
      <UserLoginProvider>
        <RegistryTypeProvider>
          <Routes>
            <Route path="/" element={<PageLogin />} />
            <Route path="/cadastro" element={<PageSignUp />} />
            <Route path="/registros" element={<PageRegistry />} />
            <Route path="/registros/novo" element={<PageNewRegistry />} />
          </Routes>
        </RegistryTypeProvider>
      </UserLoginProvider>
    </BrowserRouter>
  );
}
