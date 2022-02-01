import { useState } from "react";
import Buttons from "../../common/components/Buttons";
import Inputs from "../../common/components/Inputs";
import Login from "./style";

export default function PageLogin() {
  const inputs = [
    { field: "email", text: "E-mail" },
    { field: "password", text: "Senha" },
  ];
  const [data, setData] = useState({});

  function login(event) {
    event.preventDefault();
  }

  return (
    <Login>
      <h1>MyWallet</h1>
      <form onSubmit={login}>
        <Inputs inputs={inputs} data={data} setData={setData} />
        <Buttons buttonName={"Entrar"} />
      </form>
      <p>Primeira vez? Cadastre-se!</p>
    </Login>
  );
}
