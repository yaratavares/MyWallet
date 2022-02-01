import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Container } from "../common/style/StyleGlobal";

import PageLogin from "./PageLogin";

export default function App() {
  return (
    <BrowserRouter>
      <Container />
      <Routes>
        <Route path="/" element={<PageLogin />} />
      </Routes>
    </BrowserRouter>
  );
}
