import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLoginProvider from "../common/contexts/UserToken";

import PageLogin from "./PageLogin";
import PageRegistry from "./PageRegistry";
import PageSignUp from "./PageSignUp";

import { Container } from "../common/style/StyleGlobal";

export default function App() {
  return (
    <BrowserRouter>
      <Container />
      <UserLoginProvider>
        <Routes>
          <Route path="/" element={<PageLogin />} />
          <Route path="/cadastro" element={<PageSignUp />} />
          <Route path="/registros" element={<PageRegistry />} />
        </Routes>
      </UserLoginProvider>
    </BrowserRouter>
  );
}
