import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLoginProvider from "../common/contexts/UserToken";
import RegistryTypeProvider from "../common/contexts/RegistryType";

import PageLogin from "./PageLogin";
import PageRegistry from "./PageRegistry";
import PageSignUp from "./PageSignUp";
import PageNewRegistry from "./PageNewRegistry";
import PageEditRegistry from "./PageEditRegistry";

import { StyleGlobal } from "../common/style/StyleGlobal";
import RegistryContetProvider from "../common/contexts/RegistryContent";

export default function App() {
  return (
    <BrowserRouter>
      <StyleGlobal />
      <UserLoginProvider>
        <RegistryTypeProvider>
          <RegistryContetProvider>
            <Routes>
              <Route path="/" element={<PageLogin />} />
              <Route path="/cadastro" element={<PageSignUp />} />
              <Route path="/registros" element={<PageRegistry />} />
              <Route path="/registros/novo" element={<PageNewRegistry />} />
              <Route path="/registros/editar" element={<PageEditRegistry />} />
            </Routes>
          </RegistryContetProvider>
        </RegistryTypeProvider>
      </UserLoginProvider>
    </BrowserRouter>
  );
}
