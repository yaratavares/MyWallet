import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Buttons from "../../common/components/Buttons";
import Inputs from "../../common/components/Inputs";
import { userLogin } from "../../common/services/myWalletServices";
import Login from "./style";

export default function PageLogin() {
  const inputs = [
    { field: "email", text: "E-mail" },
    { field: "password", text: "Senha" },
  ];
  const [data, setData] = useState({});
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();

    try {
      await userLogin(data);

      navigate("/registros");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Login>
      <h1>MyWallet</h1>
      <form onSubmit={login}>
        <Inputs inputs={inputs} data={data} setData={setData} />
        <Buttons buttonName={"Entrar"} />
      </form>
      <Link to="/cadastro">
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </Login>
  );
}
