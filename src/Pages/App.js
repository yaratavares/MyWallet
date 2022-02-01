import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Container } from "../common/style/StyleGlobal";

import PageLogin from "./PageLogin";
import PageSignIn from "./PageSignIn";

export default function App() {
  return (
    <BrowserRouter>
      <Container />
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/cadastro" element={<PageSignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
